import fg from 'fast-glob';
import fs from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NOTES_PATH = path.resolve(__dirname, '../obsidian-notes');

// 映射表：将文件夹名映射为更规范的标签
const CATEGORY_MAP: Record<string, string> = {
  'java': 'Java',
  'javascript': 'JavaScript',
  'typescript': 'TypeScript',
  'react': 'React',
  'vue': 'Vue',
  'algorithm': '算法',
  'db': '数据库',
  'frontend': '前端',
  'nodejs': 'Node.js',
  'network': '网络协议',
  'os': '操作系统',
  'webpack': 'Webpack',
  'vite': 'Vite',
  'git': 'Git',
  'npm': 'npm/pnpm',
  'htmlandcss': 'HTML/CSS',
  'regExp': '正则表达式'
};

async function organizeNotes() {
  console.log('🧹 正在全自动整理笔记元数据...');

  const files = await fg(['**/*.md', '!index.md', '!notes.md', '!getting-started.md'], {
    cwd: NOTES_PATH,
    absolute: true
  });

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const { data, content: body } = matter(content);

    // 1. 确定分类标签
    const relativePath = path.relative(NOTES_PATH, file);
    const dirName = path.dirname(relativePath);
    const categoryTag = CATEGORY_MAP[dirName] || (dirName !== '.' ? dirName : null);

    // 2. 更新 Tags
    const currentTags = data.tags || [];
    const newTags = new Set([...(Array.isArray(currentTags) ? currentTags : [currentTags])]);
    if (categoryTag) newTags.add(categoryTag);

    // 3. 更新 Title (如果缺失或只是文件名)
    const baseName = path.basename(file, '.md');
    const cleanTitle = baseName
      .replace(/【.*】/g, '') // 去齐一些特殊括号
      .trim();

    const updatedData = {
      ...data,
      title: data.title || cleanTitle,
      tags: Array.from(newTags).filter(t => t && t !== 'undefined')
    };

    // 4. 写回文件
    const newContent = matter.stringify(body, updatedData);
    await fs.writeFile(file, newContent);
    console.log(`✅ 已整理: ${relativePath} -> Tags: [${updatedData.tags.join(', ')}]`);
  }

  console.log('✨ 笔记元数据全量整理完成！');
}

organizeNotes().catch(console.error);
