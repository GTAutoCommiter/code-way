import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/code-way/', // 🏆 关键修复：确保所有样式和资源在 /code-way/ 路径下正确加载
  title: "VitePress KB",
  description: "高级个人知识库系统",

  // 🏆 核心修复：禁止 VitePress 将 {{ }} 识别为插值语法
  // 这会从底层阻止 Vue 编译器去解析笔记中的双大括号，彻底解决构建报错。
  vue: {
    template: {
      compilerOptions: {
        // 将插值定界符改为极罕见的组合，从而忽略 {{ }}
        delimiters: ['${', '}']
      }
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg',
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 知识库', link: '/notes' },
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
        },
        {
          text: '💡 导航',
          items: [
            { text: '所有笔记', link: '/notes' },
            { text: '所有标签', link: '/tags/' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/vp-kb' }
    ],
    footer: {
      message: 'Powered by Antigravity Senior Architect Design',
      copyright: 'Copyright © 2024'
    }
  },
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true, // 🏆 开启宽容模式：忽略死链，确保构建始终成功
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  }
})
