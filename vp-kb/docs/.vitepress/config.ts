import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/code-way/', // 只有这个是 GitHub Pages 必须保留的
  title: "VitePress KB",
  description: "高级个人知识库系统",

  themeConfig: {
    nav: [
      { text: '📚 知识体系', link: '/' },
      { text: '🏷️ 标签', link: '/tags/' }
    ],
    sidebar: {
      '/': [
        {
          text: '📂 核心分类',
          items: [
            { text: '☕ Java', link: '/java/' },
            { text: 'JS JavaScript', link: '/javascript/' },
            { text: 'TS TypeScript', link: '/typescript/' },
            { text: '⚛️ React', link: '/react/' },
            { text: '🖖 Vue', link: '/vue/' }
          ]
        }
      ]
    },
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
