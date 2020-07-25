module.exports = {
  title: 'VuePress 中文文档 | VuePress 中文网', // 网站标题
  description: 'Just playing around', // 网站描述
  // 导航栏
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/foo/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // 
    sidebar: 'auto',
    // sidebarDepth: 2,
    // 侧边栏 https://www.vuepress.cn/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%88%86%E7%BB%84
    sidebar: {
      '/foo/':[         
        {
            title: '测试菜单1',   // 一级菜单名称
            collapsable: false, // false为默认展开菜单, 默认值true是折叠,
            sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
            children: [
                ['', '子菜单1'],  //菜单名称为'子菜单1'，跳转至/foo/README.md
                ['one', '子菜单2'],
                ['a-1备战面试', '备战面试']
            ]
        },
        {
            title: '测试菜单2',
            collapsable: false, 
            children: [
                ['test2.md', '子菜单1']
            ]
        }
    ],
  },

  smoothScroll: true,
    
  }
  
}