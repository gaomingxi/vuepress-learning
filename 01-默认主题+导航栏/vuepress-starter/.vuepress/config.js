module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around'
  }


// 导航栏

// 导航栏链接
// .vuepress/config.js
module.exports = {
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: 'Guide', link: '/guide/' },
        { text: '百度', link: 'https://baidu.com' },
        {
            text: '链接',
            ariaLabel: '链接 Menu',
            items: [
              { text: '百度', link: 'https://www.baidu.com/' },
              { text: 'bejson工具', link: 'https://www.bejson.com/' },
              { text: '博客', link: 'https://www.baidu.com/' }
            ]
          },
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          }
      ]
    }
  }
  