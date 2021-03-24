/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "79949ea026000a95993a12fe1f2a059c"
  },
  {
    "url": "assets/css/0.styles.91573193.css",
    "revision": "37217c6a0e199e5b95682b445940d663"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.046d174b.js",
    "revision": "8d23f93832a2fc2d2d143863c79e61a8"
  },
  {
    "url": "assets/js/11.62f45afc.js",
    "revision": "21687bf523874eccfdacf2d9e1778526"
  },
  {
    "url": "assets/js/12.ed9df96a.js",
    "revision": "ca762c497577b171cae446ded27b6c2c"
  },
  {
    "url": "assets/js/13.9816cfc0.js",
    "revision": "6c9b6e4b2a5d08104028760521bc5cc1"
  },
  {
    "url": "assets/js/14.ece2509b.js",
    "revision": "d9558dc87e5f3ab51fa685c41ada6266"
  },
  {
    "url": "assets/js/15.f0a033ee.js",
    "revision": "86d0e1102ce86192230aa8514ea4a777"
  },
  {
    "url": "assets/js/16.4a2435cd.js",
    "revision": "d424033986b5f99ace2c19244c202073"
  },
  {
    "url": "assets/js/17.b00ae2a7.js",
    "revision": "cc8b8200af95594b15ba5ee6d3c26a6a"
  },
  {
    "url": "assets/js/18.58b51eac.js",
    "revision": "0d5c0bc782f6fd91e8bdfd05924c64ee"
  },
  {
    "url": "assets/js/19.00d1f710.js",
    "revision": "890427e5f658ebdaa42f533bf76a4c8b"
  },
  {
    "url": "assets/js/2.e4401095.js",
    "revision": "6c0f3c7f9b7c503c0a1f2921bcd97862"
  },
  {
    "url": "assets/js/20.e7e892c0.js",
    "revision": "958803770993ce14799e6f290a8f93c2"
  },
  {
    "url": "assets/js/21.7d07d949.js",
    "revision": "c2a74b486ee537dd8de3cff16a67efdc"
  },
  {
    "url": "assets/js/22.7aac7d6e.js",
    "revision": "c5e3ad149baf798adf022ed0e01cbbc2"
  },
  {
    "url": "assets/js/23.6e17c685.js",
    "revision": "2b48ba5b14f1e382331bd9a24e890a8f"
  },
  {
    "url": "assets/js/24.18481f8c.js",
    "revision": "ef8aa464c41184888b5d68611acc74ce"
  },
  {
    "url": "assets/js/25.172ef6da.js",
    "revision": "e261df88d0196ee586a85498ce3b34be"
  },
  {
    "url": "assets/js/26.33d5e637.js",
    "revision": "31abe92b6a5703866e13a86ffab71f2b"
  },
  {
    "url": "assets/js/27.a6fab767.js",
    "revision": "a7fd9e19a7620fc53023796e658cbb0d"
  },
  {
    "url": "assets/js/28.c5d1ee94.js",
    "revision": "ca9e97f72274398c5b41eae748f6177c"
  },
  {
    "url": "assets/js/29.df25bdca.js",
    "revision": "bd8d03ce1e4edc46039cc9cf8451af7c"
  },
  {
    "url": "assets/js/3.f89064c0.js",
    "revision": "1af738efe1fe307d1074bca5fb355142"
  },
  {
    "url": "assets/js/30.3524af98.js",
    "revision": "9f8e8dc7a86c11f142d236717140b7a1"
  },
  {
    "url": "assets/js/31.e27da519.js",
    "revision": "cb018d27dc939740be68b25f01427330"
  },
  {
    "url": "assets/js/32.8b4458ed.js",
    "revision": "0f5d025292fcd1a422b746949a42bfc5"
  },
  {
    "url": "assets/js/33.3bbab9bb.js",
    "revision": "8d2e4387975cb4186e1a3556ec2866e9"
  },
  {
    "url": "assets/js/34.784224a4.js",
    "revision": "49cc5faa30c10a63645fe3dd5698c8b4"
  },
  {
    "url": "assets/js/35.b0f21396.js",
    "revision": "04a1ad5ec689797346d74ae6814047d3"
  },
  {
    "url": "assets/js/36.ff82cc1b.js",
    "revision": "19d9da902bd4564033afbb42f5bab22c"
  },
  {
    "url": "assets/js/37.5b007afa.js",
    "revision": "685eba95b37f94d81d8406b1f2af031c"
  },
  {
    "url": "assets/js/38.8a8f79e2.js",
    "revision": "ceb0c79282f2dbe5c819d7458df8b241"
  },
  {
    "url": "assets/js/4.0bb7683c.js",
    "revision": "700e94571372c6da551a4538f5033190"
  },
  {
    "url": "assets/js/5.2eb253e0.js",
    "revision": "207c24513ed4a8c28cad6d18eff2df75"
  },
  {
    "url": "assets/js/6.3ce66691.js",
    "revision": "f7078a6ec9c88055de3c360bac86fe78"
  },
  {
    "url": "assets/js/7.41ee8a48.js",
    "revision": "006876292b9874345fe6550dcbb45474"
  },
  {
    "url": "assets/js/8.98bd17b4.js",
    "revision": "e6fbaef4f13d5ae61c174e411a63dadd"
  },
  {
    "url": "assets/js/9.6b39e695.js",
    "revision": "31e8563e0f713f850e4f42856b783c26"
  },
  {
    "url": "assets/js/app.e7902102.js",
    "revision": "efd8519fe2f8e7272756c22c8f79c189"
  },
  {
    "url": "assets/md-imgs/fulltext-search-01.png",
    "revision": "866db35f32e0d1a6b66104f818062c24"
  },
  {
    "url": "assets/md-imgs/fulltext-search-02.png",
    "revision": "e79435b9dcfec453130d7467fcebcc74"
  },
  {
    "url": "assets/md-imgs/styles-change-01.png",
    "revision": "0fee56f662f8f8ed6daf72c54206cb46"
  },
  {
    "url": "assets/theme/pkp.png",
    "revision": "446decb9d6316fcd0439f100d49c86ef"
  },
  {
    "url": "assets/theme/pkq.png",
    "revision": "4f158912c445dbf878d85f9e6746a198"
  },
  {
    "url": "index.html",
    "revision": "b6827794b9ea9d81f1cc8579527a8754"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "d071e3964388d836fc64fe951d8fdb2a"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "a4d5832d44ab790a952153a44f2236ae"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Input.html",
    "revision": "62e37c975bee3542877880ebed4480b5"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Modal.html",
    "revision": "1dca5486cede42ce22049afef7d44c67"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Popover.html",
    "revision": "4c6ea66c485f46aa84ccec2012547194"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Progress.html",
    "revision": "ec28d4a171c761d92384a6b276f8fde3"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Select.html",
    "revision": "916a1dd8471e3e9a81cdaaf8db320bd5"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Table.html",
    "revision": "ca202886460440eacbe8b3c1cc1d0e37"
  },
  {
    "url": "notes/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "2ca18ec0b276ab079dc4bba55fd37913"
  },
  {
    "url": "notes/20-常用方法/KB单位转换.html",
    "revision": "e18ff58d1373ea595668394ac0f56988"
  },
  {
    "url": "notes/20-常用方法/Scroll滚动.html",
    "revision": "902002b0c2adbe85317b30296f1d517b"
  },
  {
    "url": "notes/20-常用方法/URL传参.html",
    "revision": "52371b86e8ffa81f00005072cefff663"
  },
  {
    "url": "notes/20-常用方法/一键复制.html",
    "revision": "6e15e088a05505ed7216ad59200a0451"
  },
  {
    "url": "notes/20-常用方法/小数点后X位.html",
    "revision": "6eb246283d1c685056e7ecbe227a6c94"
  },
  {
    "url": "notes/20-常用方法/常用正则.html",
    "revision": "d3c181fe3fa51c18bdd4d86a1a12eb80"
  },
  {
    "url": "notes/20-常用方法/数组均分.html",
    "revision": "c8433368ebbadf271aac4f5e76a89552"
  },
  {
    "url": "notes/20-常用方法/时分秒转换.html",
    "revision": "7431237e0bc17b0982bbffee98a36615"
  },
  {
    "url": "notes/20-常用方法/浏览器缓存取用.html",
    "revision": "6bd29d2479fed1168669777e3e4a2117"
  },
  {
    "url": "notes/20-常用方法/防抖函数.html",
    "revision": "fa6d36409953f743a69731b6c6096069"
  },
  {
    "url": "notes/20-常用方法/随机数生成.html",
    "revision": "c31bf3af3143052a51b7de6bdfd45774"
  },
  {
    "url": "notes/40-JavaScript/onFocus.html",
    "revision": "24d82c0f2312e184a5834c8e60d43ac9"
  },
  {
    "url": "notes/40-JavaScript/Reduce方法.html",
    "revision": "32f8e190e161c1d9c6d5f84142cba312"
  },
  {
    "url": "notes/40-JavaScript/对数组操作.html",
    "revision": "ad5f44de17aea2411c2b983870e68df1"
  },
  {
    "url": "notes/40-JavaScript/浏览器缓存.html",
    "revision": "3afd191869548ee46a5451f84f6fb081"
  },
  {
    "url": "notes/50-Vuepress/10-注意事项.html",
    "revision": "b59987fbc78710032af15d2d0f3f692c"
  },
  {
    "url": "notes/50-Vuepress/代码块复制.html",
    "revision": "c53478007dac702b02927ea703c85124"
  },
  {
    "url": "notes/50-Vuepress/全局搜索.html",
    "revision": "e549c4e7dec315750f88d072ba78b91e"
  },
  {
    "url": "notes/50-Vuepress/样式更改.html",
    "revision": "f6e74523c9f9a75a7e2d02090d7dfd00"
  },
  {
    "url": "notes/99-开发注意事项/颜色规则.html",
    "revision": "c4ee0c9b85c892df78481f539f74bb31"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
