import fg from 'fast-glob';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const OBSIDIAN_PATH = path.resolve(__dirname, '../obsidian-notes');
const DOCS_PATH = path.resolve(__dirname, '../docs');
const ASSETS_NAME = '_assets';

async function syncNotes() {
  console.log('🚀 开始从 Obsidian 同步笔记...');

  // 1. 确保目录存在
  await fs.ensureDir(DOCS_PATH);
  await fs.ensureDir(path.join(DOCS_PATH, '.vitepress'));

  // 2. 清理 docs 中除了 .vitepress 以外的内容
  const existingFiles = await fg(['**/*', '!**/.*', '!.*/**'], {
    cwd: DOCS_PATH,
    absolute: true
  });

  for (const file of existingFiles) {
    if (!file.includes('.vitepress')) {
      await fs.remove(file);
    }
  }

  // 3. 拷贝 Markdown 文件
  const notes = await fg(['**/*.md', '!**/.*/**'], { cwd: OBSIDIAN_PATH });

  for (const note of notes) {
    const src = path.join(OBSIDIAN_PATH, note);
    const dest = path.join(DOCS_PATH, note);
    await fs.ensureDir(path.dirname(dest));

    let content = await fs.readFile(src, 'utf-8');

    // 自动处理 Obsidian 双链图片 ![[image.png]]
    content = content.replace(/!\[\[(.*?)\]\]/g, (match, p1) => {
      return `![${p1}](/${ASSETS_NAME}/${p1})`;
    });

    // 🏆 新增：全量清洗 Typora 冲突路径 (以 \ 或 C:\ 等开头的路径)
    // 逻辑：将那些指向磁盘绝对路径且无法解析的图片引用转换为纯文本或合法路径，防止阻塞 Vite
    content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, p2) => {
      // 如果路径包含反斜杠或看起来像绝对路径
      if (p2.includes('\\') || p2.startsWith('/Data') || p2.startsWith('C:') || p2.startsWith('D:')) {
        // 鲁棒性提取文件名：先替换所有反斜杠，再取最后一段
        const fileName = p2.replace(/\\/g, '/').split('/').pop();
        console.log(`⚠️ 修复损毁路径: ${p2} -> ${fileName}`);
        return `![${alt}](/${ASSETS_NAME}/${fileName})`;
      }
      return match;
    });

    await fs.writeFile(dest, content);
  }

  // 4. 自动化：为每个分类文件夹生成 index.md (如果不存在)
  const dirs = await fg(['*', '!public', '!.vitepress', '!tags', '!_assets'], {
    cwd: DOCS_PATH,
    onlyDirectories: true
  });

  for (const dir of dirs) {
    const indexPath = path.join(DOCS_PATH, dir, 'index.md');
    if (!(await fs.pathExists(indexPath))) {
      // 递归获取该目录下所有 md 文件
      const allFiles = await fg(['**/*.md', '!index.md'], { cwd: path.join(DOCS_PATH, dir) });

      let indexContent = `---
title: ${dir.toUpperCase()} 知识库
---

# 📂 ${dir.toUpperCase()} 分类目录

在这里，你可以找到关于 ${dir} 的所有笔记。

<div class="dir-list">

${allFiles
          .sort()
          .map(f => {
            const depth = f.split('/').length - 1;
            const indent = '  '.repeat(depth);
            const title = f.replace('.md', '').split('/').pop();
            return `${indent}- [${title}](./${f})`;
          })
          .join('\n')}

</div>

<style>
.dir-list {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  line-height: 1.8;
}
</style>
`;
      await fs.writeFile(indexPath, indexContent);
    }
  }

  // 5. 拷贝资源目录
  const assetSrc = path.join(OBSIDIAN_PATH, ASSETS_NAME);
  const assetDest = path.join(DOCS_PATH, 'public', ASSETS_NAME);
  if (await fs.pathExists(assetSrc)) {
    await fs.copy(assetSrc, assetDest);
  }

  console.log('✅ 同步完成！');
}

syncNotes().catch(err => {
  console.error('❌ 同步失败:', err);
  process.exit(1);
});
