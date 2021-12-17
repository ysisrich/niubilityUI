

// .vuepress/config.js
module.exports = {
    title: 'NiubilityUi',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '指南', link: '/guide/index' },
            { text: '组件', link: '/component/installation' },
            { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: [
            '/component/installation',
            '/component/quickstart',
            '/component/button',
            '/component/dialog',
        ],
        lastUpdated: 'Last Updated', // string | boolean
    }
  }