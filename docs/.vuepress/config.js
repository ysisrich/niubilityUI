

// .vuepress/config.js
module.exports = {
    title: 'NiubilityUi',
    description: '一款牛逼且不粗的UI组件库',
    base:'/niubilityUI/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '指南', link: '/guide/index' },
            { text: '组件', link: '/baseComponent/icon' },
            { text: 'Npm', link: 'https://www.npmjs.com/package/niubility-ui' },
            {
                text: '代码地址',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Github', link: 'https://github.com/ysisrich/niubilityUI/tree/master' },
                    { text: 'Gitee', link: 'https://gitee.com/YSisrich/niubilityUI/tree/master' },
                ]
            }
        ],
        sidebar: [
            '/base/installation',
            '/base/quickstart',
            {
                title: '基础组件',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/baseComponent/icon',
                    '/baseComponent/button',
                    '/baseComponent/input',
                    '/baseComponent/switch',
                    '/baseComponent/dialog',
                ]
            },
            {
                title: '高级组件',   // 必要的
                path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/highComponent/emotion',
                ]
            },
        ],
        lastUpdated: '上次更新', // string | boolean
    },
    plugins: ['@vuepress/nprogress','@vuepress/back-to-top']
  }