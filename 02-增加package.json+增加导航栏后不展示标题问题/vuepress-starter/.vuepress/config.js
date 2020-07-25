
// 导航栏
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}

// 这个要放到导航栏的后面
module.exports = {
  title: 'VuePress 中文文档 | VuePress 中文网', // 网站标题
  description: 'Just playing around' // 网站描述
}