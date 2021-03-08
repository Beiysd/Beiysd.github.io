const moment = require("moment");
module.exports = {
  title: "Beiysd · 笔记",
  description: "Live and learn.",
  head: [["link", { rel: "icon", href: "assets/pkp.png" }]],
  base: "/",
  themeConfig: {
    nav: [
      { text: "Github", link: "https://github.com/Beiysd" },
      { text: "Gitee", link: "https://gitee.com/beiysd" },
      { text: "CSDN", link: "https://blog.csdn.net/weixin_40532650" },
    ],
    lastUpdated: "Last Updated",
  },
  plugins: [
    "autobar",
    "@vuepress/back-to-top",
    "@vuepress/active-header-links",
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
};
