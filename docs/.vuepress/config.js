module.exports = {
    base: '/my-blog/',
    title: 'Learning',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    description: '个人小站',
    port: '8080',
    themeConfig: {
        sidebarDepth: 2,
        logo: '/img/logo.png',
        lastUpdated: '上次更新',
        nav: [{
                text: 'Java',
                link: '/java/'
            },
            {
                text: 'Golang',
                link: '/golang/'
            },
            {
                text: 'Linux',
                link: '/linux/'
            },
            {
                text: '系统架构设计师',
                link: '/系统架构设计师/'
            },
            {
                text: '网络安全',
                link: '/网络安全/'
            },
            {
                text: '杂项',
                ariaLabel: 'Language Menu',
                items: [{
                        text: 'Emoji',
                        link: '/items/emoji/'
                    },
                    {
                        text: 'Markdown',
                        link: '/items/markdown/'
                    },
                    {
                        text: '常用对照表',
                        items: [{
                            text: 'Html 常用字符转义',
                            link: '/items/compare/compare_html'
                        }, {
                            text: 'Mybatis 转义',
                            link: '/items/compare/compare_mybatis'
                        }, {
                            text: 'RGB 颜色对照',
                            link: '/items/compare/compare_rgb'
                        }]
                    }
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/yueryueryueryuer/my-blog'
            },
        ],
        sidebar: {
            '/java/': [{
                    title: 'Stream',
                    collapsable: false,
                    children: [{
                            title: 'Stream 详解',
                            path: '/java/stream/stream'
                        },
                        {
                            title: '常用 Stream',
                            path: '/java/stream/stream_commonly'
                        }
                    ]
                },
                {
                    title: 'Optional',
                    collapsable: false,
                    children: [{
                            title: 'Optional 详解',
                            path: '/java/optional/optional'
                        },
                        {
                            title: '常用 Optional',
                            path: '/java/optional/optional_commonly'
                        }
                    ]
                }
            ],
            '/golang/': [{
                title: 'Golang 学习路线',
                collapsable: false,
                path: '/golang/learning'
            }],
            '/linux/': [{
                    title: '文件操作',
                    collapsable: false,
                    path: '/linux/disk'
                },
                {
                    title: '常用命令',
                    collapsable: false,
                    path: '/linux/command'
                }
            ],
            '/系统架构设计师/': [{
                title: '操作系统',
                collapsable: false,
                children: [{
                        title: '操作系统的类型与结构',
                        path: '/系统架构设计师/操作系统/操作系统的类型与结构'
                    },
                    {
                        title: '操作系统基本原理',
                        path: '/系统架构设计师/操作系统/操作系统基本原理'
                    }
                ]
            }],
            '/网络安全/': [{
                title: '网络安全',
                collapsable: false,
                children: [{
                    title: '网络安全知识',
                    path: '/网络安全/网络安全知识'
                }, {
                    title: '网络攻击与防御',
                    path: '/网络安全/网络攻击与防御'
                }, {
                    title: '信息安全',
                    path: '/网络安全/信息安全'
                }]
            }],
            '/items/': [{
                title: 'Emoji',
                collapsable: false,
                path: '/items/emoji'
            }, {
                title: 'Markdown',
                collapsable: false,
                path: '/items/markdown'
            }, {
                title: '常用对照表',
                collapsable: false,
                children: [{
                        title: 'Html 常用字符转义',
                        path: '/items/compare/compare_html'
                    }, {
                        title: 'Mybatis 转义',
                        path: '/items/compare/compare_mybatis'
                    }, {
                        title: 'RGB 颜色对照',
                        path: '/items/compare/compare_rgb'
                    },

                ]
            }],
        }
    }
}