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
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        home: '/',
        navbar: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: 'guide1',
                children: [
                    {
                        text: 'guide111111',
                        link: '/document/guide1/guide1.md',
                    },
                ]
            },
            {
                text: 'guide2',
                children: [
                    {
                        text: 'guide222222',
                        link: '/document/guide2/guide2.md',
                    },
                ]
            },
        ],
        sidebar: {
            '/document/': [
                {
                    text: 'guide1',
                    children: ['/document/guide1/guide1.md'],
                },
                {
                    text: 'guide2',
                    children: ['/document/guide2/guide2.md'],
                },
            ],
        }
    },),
    base: '/blog/'
}
