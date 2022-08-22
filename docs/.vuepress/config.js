const { defaultTheme } = require('vuepress')
const { path } = require('@vuepress/utils')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')


module.exports = {
    plugins: [
        backToTopPlugin(),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, '../components'),
        })
    ],
    lang: 'zh-CN',
    title: '记录',
    description: '知识点和问题记录',
    theme: defaultTheme({
        home: '/',
        sidebar: {
            '/document/': [
                {
                    text: 'JS',
                    children: [
                        '/document/JS/debounceAndThrottle.md',
                        '/document/JS/closure.md',
                        '/document/JS/applyAndCallAndBind.md'
                    ],
                },
                {
                    text: 'React',
                    children: ['/document/React/Hooks.md'],
                },
                {
                    text: '优化',
                    children: [
                        '/document/optimization/performance.md',
                        '/document/optimization/security.md'
                    ],
                },
            ],
        },
        navbar: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: 'JS',
                children: [
                    {
                        text: '防抖和节流',
                        link: '/document/JS/debounceAndThrottle.md',
                    },
                    {
                        text: '闭包',
                        link: '/document/JS/closure.md',
                    },
                    {
                        text: 'call、apply、bind',
                        link: '/document/JS/applyAndCallAndBind.md',
                    },
                ]
            },
            {
                text: 'React',
                children: [
                    {
                        text: 'Hooks',
                        link: '/document/React/Hooks.md',
                    },
                ]
            },
            {
                text: '优化',
                children: [
                    {
                        text: '性能',
                        link: '/document/optimization/performance.md',
                    },
                    {
                        text: '安全',
                        link: '/document/optimization/security.md',
                    },
                ]
            },
        ],
    },),
    base: '/blog/'
}
