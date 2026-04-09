import { defineConfig } from 'vitepress'
import { generatedSidebar } from './sidebar-gen'

export default defineConfig({
  base: '/code-way/', // 只有这个是 GitHub Pages 必须保留的
  title: "VitePress KB",
  description: "高级个人知识库系统",

  themeConfig: {
    nav: [
      { text: '📚 知识体系', link: '/' },
      { text: '🏷️ 标签', link: '/tags/' }
    ],
    sidebar: generatedSidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/vp-kb' }
    ],
    search: {
      provider: 'local'
    }
  },
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true // 🏆 必须保留：防止死链阻断构建
})
