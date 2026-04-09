import fg from 'fast-glob';
import fs from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DOCS_PATH = path.resolve(__dirname, '../docs');
const TAGS_PATH = path.resolve(DOCS_PATH, 'tags');

async function genTags() {
  console.log('🏷️ 正在生成标签索引...');
  const files = await fg(['**/*.md', '!**/index.md', '!tags/**'], { cwd: DOCS_PATH });
  const tagMap: Record<string, any[]> = {};

  for (const file of files) {
    const content = await fs.readFile(path.join(DOCS_PATH, file), 'utf-8');
    const { data } = matter(content);

    if (data.tags && Array.isArray(data.tags)) {
      data.tags.forEach(tag => {
        if (!tagMap[tag]) tagMap[tag] = [];
        tagMap[tag].push({
          title: data.title || path.basename(file, '.md'),
          path: `/${file.replace('.md', '')}`
        });
      });
    }
  }

  if (Object.keys(tagMap).length === 0) {
    console.log('ℹ️ 没有发现带标签的文章，跳过生成。');
    return;
  }

  await fs.ensureDir(TAGS_PATH);

  // 生成 tags/index.md
  let indexContent = `---\ntitle: '标签云'\n---\n\n# 🏷️ 标签云\n\n`;
  indexContent += Object.keys(tagMap).map(tag => `- [${tag}](/tags/${tag}) (${tagMap[tag].length})`).join('\n');
  await fs.writeFile(path.join(TAGS_PATH, 'index.md'), indexContent);

  // 生成 tags/{tag}.md
  for (const [tag, posts] of Object.entries(tagMap)) {
    const safeTagName = tag.replace(/\//g, '-'); // 修复路径冲突
    let listContent = `---\ntitle: '标签: ${tag}'\n---\n\n# Tag: ${tag}\n\n`;
    listContent += posts.map(p => `- [${p.title}](${p.path})`).join('\n');
    await fs.writeFile(path.join(TAGS_PATH, `${safeTagName}.md`), listContent);
  }

  console.log('✅ 标签系统生成完成！');
}

genTags().catch(err => {
  console.error('❌ 标签系统生成失败:', err);
  process.exit(1);
});
