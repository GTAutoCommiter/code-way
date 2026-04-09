import fg from 'fast-glob';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OBSIDIAN_PATH = path.resolve(__dirname, '../obsidian-notes');
const DOCS_PATH = path.resolve(__dirname, '../docs');
const ASSETS_NAME = '_assets';

async function syncNotes() {
  console.log('🚀 正在同步并构建超级首页...');

  // 1. 确保目录存在
  await fs.ensureDir(DOCS_PATH);

  // 2. 深度清理，保护系统文件和已有的 index.md
  const existingFiles = await fg(['**/*', '!**/.*'], {
    cwd: DOCS_PATH,
    absolute: true
  });

  for (const file of existingFiles) {
    if (file.includes('.vitepress') || file.endsWith('index.md')) {
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

    // 🏆 核心自动脱敏
    content = content.replace(/\{\{/g, '&#x7b;&#x7b;').replace(/\}\}/g, '&#x7d;&#x7d;');

    // 🏆 核心转义
    content = content
      .replace(/<script/gi, '&lt;script')
      .replace(/<\/script>/gi, '&lt;/script&gt;')
      .replace(/<style/gi, '&lt;style')
      .replace(/<\/style>/gi, '&lt;/style&gt;');

    // 自动处理图片
    content = content.replace(/!\[\[(.*?)\]\]/g, (match, p1) => {
      return `![${p1}](/${ASSETS_NAME}/${p1})`;
    });

    const assetPath = path.join(OBSIDIAN_PATH, ASSETS_NAME);
    content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, p2) => {
      let fileName = '';
      if (p2.includes('\\') || p2.startsWith('C:') || p2.startsWith('D:')) {
        fileName = p2.replace(/\\/g, '/').split('/').pop() || '';
      } else if (p2.startsWith(`/${ASSETS_NAME}/`)) {
        fileName = p2.replace(`/${ASSETS_NAME}/`, '');
      }

      if (fileName && !fs.existsSync(path.join(assetPath, fileName))) {
        return ` > [!WARNING]\n > 🖼️ 本地图片缺失: ${fileName}\n`;
      }
      return match;
    });

    await fs.writeFile(dest, content);
  }

  // 4. 读取分类并补全 index.md
  const dirs = await fg(['*', '!public', '!.vitepress', '!tags', '!_assets'], {
    cwd: DOCS_PATH,
    onlyDirectories: true
  });

  // 为每个分类文件夹补全 index.md (层级索引版)
  for (const dir of dirs) {
    const indexPath = path.join(DOCS_PATH, dir, 'index.md');
    if (!(await fs.pathExists(indexPath))) {
      const allFiles = await fg(['**/*.md', '!index.md'], { cwd: path.join(DOCS_PATH, dir) });

      // 按子目录分组
      const groups: Record<string, string[]> = {};
      for (const file of allFiles) {
        const parts = file.split('/');
        const groupName = parts.length > 1 ? parts[0] : '未分类';
        if (!groups[groupName]) groups[groupName] = [];
        groups[groupName].push(file);
      }

      let indexContent = `# 📂 ${dir.toUpperCase()} 知识体系\n\n`;

      // 排序并生成内容
      Object.keys(groups).sort().forEach(group => {
        indexContent += `## 📑 ${group}\n\n`;
        groups[group].sort().forEach(f => {
          const fileName = f.replace('.md', '').split('/').pop();
          indexContent += `- [${fileName}](./${f.replace('.md', '')})\n`;
        });
        indexContent += '\n';
      });

      await fs.writeFile(indexPath, indexContent);
    }
  }

  // 5. 🚀 动态生成超级首页 index.md
  const { CATEGORY_MAP, DEFAULT_CATEGORY } = await import('./category-config.js');

  let indexContent = `---
layout: page
title: 知识库首页
---

# 📚 我的知识体系

<div class="kb-container">
`;

  for (const dir of dirs) {
    // @ts-ignore
    const config = CATEGORY_MAP[dir] || { ...DEFAULT_CATEGORY, title: dir.toUpperCase() };
    indexContent += `
  <a href="./${dir}/" class="kb-card">
    <div class="kb-icon">${config.icon}</div>
    <div class="kb-content">
      <div class="kb-title">${config.title}</div>
      <div class="kb-desc">${config.desc}</div>
    </div>
  </a>`;
  }

  indexContent += `
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
  await fs.writeFile(path.join(DOCS_PATH, 'index.md'), indexContent);

  // 6. 拷贝资源
  const assetSrc = path.join(OBSIDIAN_PATH, ASSETS_NAME);
  const assetDest = path.join(DOCS_PATH, 'public', ASSETS_NAME);
  if (await fs.pathExists(assetSrc)) {
    await fs.copy(assetSrc, assetDest);
  }

  console.log('✅ 超级首页构建完成！');
}

syncNotes().catch(err => {
  console.error('❌ 同步失败:', err);
  process.exit(1);
});
