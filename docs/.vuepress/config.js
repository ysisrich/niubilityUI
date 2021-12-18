

// .vuepress/config.js
module.exports = {
    title: 'NiubilityUi',
    description: 'Just playing around',
    base:'/niubilityUI/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '指南', link: '/guide/index' },
            { text: '组件', link: '/component/installation' },
            { text: 'Npm', link: 'https://www.npmjs.com/package/niubility-ui' },
            { text: 'Github', link: 'https://github.com/ysisrich/niubilityUI/tree/master' },
        ],
        sidebar: [
            '/component/installation',
            '/component/quickstart',
            '/component/button',
            '/component/dialog',
        ],
        lastUpdated: '上次更新', // string | boolean
    }
  }