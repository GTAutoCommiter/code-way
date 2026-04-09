import fg from 'fast-glob';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OBSIDIAN_PATH = path.resolve(__dirname, '../obsidian-notes');
const DOCS_PATH = path.resolve(__dirname, '../docs');
const ASSETS_NAME = '_assets';

async function syncNotes() {
  console.log('🚀 正在进行纯净同步...');

  // 1. 确保目录存在
  await fs.ensureDir(DOCS_PATH);

  // 2. 深度清理，但保护系统文件
  const existingFiles = await fg(['**/*', '!**/.*'], {
    cwd: DOCS_PATH,
    absolute: true
  });

  for (const file of existingFiles) {
    if (file.includes('.vitepress') || file.endsWith('notes.md') || file.endsWith('index.md')) {
      continue;
    }
    await fs.remove(file);
  }

  // 3. 拷贝 Markdown 文件
  const notes = await fg(['**/*.md', '!**/.*/**'], { cwd: OBSIDIAN_PATH });

  for (const note of notes) {
    const src = path.join(OBSIDIAN_PATH, note);
    const dest = path.join(DOCS_PATH, note);
    await fs.ensureDir(path.dirname(dest));

    let content = await fs.readFile(src, 'utf-8');

    // 🏆 核心自动脱敏：将正文中的 {{ }} 转义为 HTML 实体
    content = content.replace(/\{\{/g, '&#x7b;&#x7b;').replace(/\}\}/g, '&#x7d;&#x7d;');

    // 🏆 核心修复：转义潜在的顶级标签，防止干扰 VitePress 构建
    // 很多笔记包含 HTML 示例，必须转义才能通过 SFC 编译
    content = content
      .replace(/<script/gi, '&lt;script')
      .replace(/<\/script>/gi, '&lt;/script&gt;')
      .replace(/<style/gi, '&lt;style')
      .replace(/<\/style>/gi, '&lt;/style&gt;');

    // 🏆 精简逻辑：只处理图片路径
    // 自动处理 Obsidian 双链图片 ![[image.png]]
    content = content.replace(/!\[\[(.*?)\]\]/g, (match, p1) => {
      return `![${p1}](/${ASSETS_NAME}/${p1})`;
    });

    // 清洗 Typora 绝对路径，增加物理存在检查防止阻断构建
    const assetPath = path.join(OBSIDIAN_PATH, ASSETS_NAME);
    content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, p2) => {
      let fileName = '';
      if (p2.includes('\\') || p2.startsWith('C:') || p2.startsWith('D:')) {
        fileName = p2.replace(/\\/g, '/').split('/').pop() || '';
      } else if (p2.startsWith(`/${ASSETS_NAME}/`)) {
        fileName = p2.replace(`/${ASSETS_NAME}/`, '');
      }

      if (fileName) {
        if (!fs.existsSync(path.join(assetPath, fileName))) {
          return ` > [!WARNING]\n > 🖼️ 本地图片缺失: ${fileName}\n`;
        }
        return `![${alt}](/${ASSETS_NAME}/${fileName})`;
      }
      return match;
    });

    await fs.writeFile(dest, content);
  }

  // 4. 读取实际生成的分类文件夹
  const dirs = await fg(['*', '!public', '!.vitepress', '!tags', '!_assets'], {
    cwd: DOCS_PATH,
    onlyDirectories: true
  });

  // 为每个分类文件夹补全 index.md
  for (const dir of dirs) {
    const indexPath = path.join(DOCS_PATH, dir, 'index.md');
    if (!(await fs.pathExists(indexPath))) {
      const allFiles = await fg(['**/*.md', '!index.md'], { cwd: path.join(DOCS_PATH, dir) });
      let indexContent = `# 📂 ${dir.toUpperCase()}\n\n`;
      indexContent += allFiles.sort().map(f => `- [${f.replace('.md', '')}](./${f.replace('.md', '')})`).join('\n');
      await fs.writeFile(indexPath, indexContent);
    }
  }

  // 5. 🚀 自动化：动态生成核心索引页 notes.md
  console.log('📖 正在根据目录结构生成知识库索引...');
  const { CATEGORY_MAP, DEFAULT_CATEGORY } = await import('./category-config.js');

  let notesContent = `---
layout: page
title: 知识库索引
---

# 📚 知识体系分类

<div class="kb-container">
`;

  for (const dir of dirs) {
    // @ts-ignore
    const config = CATEGORY_MAP[dir] || { ...DEFAULT_CATEGORY, title: dir.toUpperCase() };
    notesContent += `
  <a href="./${dir}/" class="kb-card">
    <div class="kb-icon">${config.icon}</div>
    <div class="kb-content">
      <div class="kb-title">${config.title}</div>
      <div class="kb-desc">${config.desc}</div>
    </div>
  </a>`;
  }

  notesContent += `
</div>

<style scoped>
.kb-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 24px;
}
.kb-card {
  display: flex !important;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-decoration: none !important;
  transition: all 0.2s ease;
}
.kb-card:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
  transform: translateY(-2px);
}
.kb-icon { font-size: 32px; flex-shrink: 0; }
.kb-title { font-weight: 600; color: var(--vp-c-text-1); font-size: 1.1rem; }
.kb-desc { color: var(--vp-c-text-2); font-size: 0.85rem; margin-top: 4px; line-height: 1.4; }
</style>
`;
  await fs.writeFile(path.join(DOCS_PATH, 'notes.md'), notesContent);

  // 6. 拷贝资源目录
  const assetSrc = path.join(OBSIDIAN_PATH, ASSETS_NAME);
  const assetDest = path.join(DOCS_PATH, 'public', ASSETS_NAME);
  if (await fs.pathExists(assetSrc)) {
    await fs.copy(assetSrc, assetDest);
  }

  console.log('✅ 纯净同步完成！');
}

syncNotes().catch(err => {
  console.error('❌ 同步失败:', err);
  process.exit(1);
});
