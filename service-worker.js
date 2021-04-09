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
    "revision": "758d629551bbba731ade45177fb5ccd3"
  },
  {
    "url": "assets/css/0.styles.e72850ee.css",
    "revision": "2d293e040ba4cc5ff6bc0c9bd0cccbd2"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.43807ae9.js",
    "revision": "e07cd62fa686b8124515c6aceead8b76"
  },
  {
    "url": "assets/js/11.5cff19dd.js",
    "revision": "3bc76aa1933d692957457a76139fe57e"
  },
  {
    "url": "assets/js/12.43df8343.js",
    "revision": "a7dfe2418ac6822624df896c331b9664"
  },
  {
    "url": "assets/js/13.19cd2020.js",
    "revision": "706bd3ab630c6c7c0079b6a160cc5e5b"
  },
  {
    "url": "assets/js/14.c6202452.js",
    "revision": "6f6a43761a9302703661b02b8a9faae7"
  },
  {
    "url": "assets/js/15.51b474d7.js",
    "revision": "993665f83714b30dd102325889acfb41"
  },
  {
    "url": "assets/js/16.c80d4328.js",
    "revision": "3163e0982f9aa161760583a32e4b0d12"
  },
  {
    "url": "assets/js/17.3e874fa4.js",
    "revision": "04037543461601cd844df36a465c0f57"
  },
  {
    "url": "assets/js/18.379a61a5.js",
    "revision": "29a45ea4c552300e05527585603f0d86"
  },
  {
    "url": "assets/js/19.8e798bd6.js",
    "revision": "75c1bda1b70c246416f63ae2eab6faf9"
  },
  {
    "url": "assets/js/2.82eba915.js",
    "revision": "e7d71d053b2a51a0ca814035c2e04290"
  },
  {
    "url": "assets/js/20.4f7ab882.js",
    "revision": "23fda2e80f73d4cd287b8eebe1c835d3"
  },
  {
    "url": "assets/js/21.f924b5ce.js",
    "revision": "8a53ea6388d8911e13e7c4f62f28d267"
  },
  {
    "url": "assets/js/22.41539f26.js",
    "revision": "bb23bae37857149fe648d9ea3ea58e23"
  },
  {
    "url": "assets/js/23.a229e512.js",
    "revision": "91b5ab8b6aff97dc13310e17ac3e4ca7"
  },
  {
    "url": "assets/js/24.9bec2e3b.js",
    "revision": "80a4b548b7298f2cb25f43b58ab24a08"
  },
  {
    "url": "assets/js/25.9cd947ef.js",
    "revision": "5ceaf48ad5adf91669c16d87a8dfbde6"
  },
  {
    "url": "assets/js/26.fdcdc9e1.js",
    "revision": "7862dcbc344bf9fe40d98a88e1ec98b5"
  },
  {
    "url": "assets/js/27.a6a7d7ab.js",
    "revision": "54a08d0c363a13be1ac256cc1bb25647"
  },
  {
    "url": "assets/js/28.9ca3eb75.js",
    "revision": "477a567de051ee3d12acb0932145e6bc"
  },
  {
    "url": "assets/js/29.0b6f8a2b.js",
    "revision": "de0c0e5299da8613c2feb4f4d2af8500"
  },
  {
    "url": "assets/js/3.443132dc.js",
    "revision": "bbd74e8549c4b4fd54900cd19abe9956"
  },
  {
    "url": "assets/js/30.55f4e269.js",
    "revision": "e94acbf1cb2dd6fccbaafa785f2cbc2d"
  },
  {
    "url": "assets/js/31.8482a909.js",
    "revision": "1c8dd478a29fc62a3f7b0aecc4f2e713"
  },
  {
    "url": "assets/js/32.c42125a8.js",
    "revision": "b1db62e042122b0d30bc73de2faebe0e"
  },
  {
    "url": "assets/js/33.51f5dd1a.js",
    "revision": "6bacdbc169a25c91e365b5229f0630f7"
  },
  {
    "url": "assets/js/34.76dba6bf.js",
    "revision": "15582baef21135b1705b1f8af580004b"
  },
  {
    "url": "assets/js/35.5b72b7ba.js",
    "revision": "610efe0b67eb110365e43ecbc59cf071"
  },
  {
    "url": "assets/js/36.112d7f88.js",
    "revision": "3205ddac3ae50cf16e37c00a4c115574"
  },
  {
    "url": "assets/js/37.d041f38b.js",
    "revision": "e9cd920a8ece9ccde8d0536de9a353f2"
  },
  {
    "url": "assets/js/38.232709ce.js",
    "revision": "921166e2c4a87e7ee0aa671d1b2f7bcb"
  },
  {
    "url": "assets/js/39.2fb02141.js",
    "revision": "a3fde28c6dafe98efd0cfab012ebfb7d"
  },
  {
    "url": "assets/js/4.a9367f28.js",
    "revision": "449a5c1981163f2f67ef9baf41da73e3"
  },
  {
    "url": "assets/js/40.8ed305f5.js",
    "revision": "e5ce22fc31ae3d6f690e851bbaf14744"
  },
  {
    "url": "assets/js/41.b681d3ea.js",
    "revision": "9b6e718f9c54626592c93d345c83b17c"
  },
  {
    "url": "assets/js/42.10b27f28.js",
    "revision": "0f95d7b717d20f80dd0bcded729e730f"
  },
  {
    "url": "assets/js/43.bf8bbbb0.js",
    "revision": "5e4d619f71a9cf6daefc556aadd9df82"
  },
  {
    "url": "assets/js/44.bbea097b.js",
    "revision": "4eecd22da7fa72a1a3b09ac5ca6a7207"
  },
  {
    "url": "assets/js/45.60c3260b.js",
    "revision": "c65208d3285aa66e5ccb393cb9c40cae"
  },
  {
    "url": "assets/js/46.c9d69137.js",
    "revision": "b3a7b136a0dc20d467efdcd46d87cb21"
  },
  {
    "url": "assets/js/47.3b2bcea1.js",
    "revision": "a27516da5725871a3af53b1165c56381"
  },
  {
    "url": "assets/js/48.91dfc53b.js",
    "revision": "eb1c0a3eb515a88cfb533001d1c7b82f"
  },
  {
    "url": "assets/js/49.4796d0d7.js",
    "revision": "8afaea5e1e88ab3d253c41cb63d5cb9f"
  },
  {
    "url": "assets/js/5.7d9c211b.js",
    "revision": "13543c982103b79def9592d13da7ab66"
  },
  {
    "url": "assets/js/50.b91de15c.js",
    "revision": "7d85d076cb77db6a00c02e4e6df50cd5"
  },
  {
    "url": "assets/js/51.173b44e2.js",
    "revision": "827f067646c4b57046d5497133fe86fb"
  },
  {
    "url": "assets/js/52.efd74771.js",
    "revision": "7c1a28d1271483034d89d3dbea502d36"
  },
  {
    "url": "assets/js/53.27490ec0.js",
    "revision": "4b7c0b84b2692f5d88b36e085dfdceb7"
  },
  {
    "url": "assets/js/6.6e36409b.js",
    "revision": "80e394f187ed678e0ca7b375adee2b75"
  },
  {
    "url": "assets/js/7.8d1df1e2.js",
    "revision": "b7ab5ad78b8bcd4b712cf5db4e67713e"
  },
  {
    "url": "assets/js/8.1ca4c451.js",
    "revision": "b1bd4299ed1d3f5e857258026330ef3a"
  },
  {
    "url": "assets/js/9.193403ef.js",
    "revision": "197a60636b5127e53fae548aa459ad1e"
  },
  {
    "url": "assets/js/app.74e6bda8.js",
    "revision": "7a97c5b6d4c59924576fd07f20b6c2b3"
  },
  {
    "url": "assets/md-imgs/canvas-01.png",
    "revision": "cf34b7d3359b8ccd534ac800f4204238"
  },
  {
    "url": "assets/md-imgs/error_boundaries_01.png",
    "revision": "8c7d3fb630b6e1d7bec4cb23d3d7b8f3"
  },
  {
    "url": "assets/md-imgs/error_boundaries_02.png",
    "revision": "5489fab8a2189d7a8b43777de261f051"
  },
  {
    "url": "assets/md-imgs/follow.png",
    "revision": "483a0299f1ffeac6e4015a7096a04a39"
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
    "url": "assets/md-imgs/github_slow_01.png",
    "revision": "9834d765e6618c4bf016df202da7c1cb"
  },
  {
    "url": "assets/md-imgs/github_slow_02.png",
    "revision": "df81baaaa4fd0261907be5ca3e0d224c"
  },
  {
    "url": "assets/md-imgs/github_slow_03.png",
    "revision": "0caeda038900daab3c1c76cbaf19ec9a"
  },
  {
    "url": "assets/md-imgs/github_slow_04.png",
    "revision": "b01f9e9687ff5657adadb42ea86ca55c"
  },
  {
    "url": "assets/md-imgs/styles-change-01.png",
    "revision": "0fee56f662f8f8ed6daf72c54206cb46"
  },
  {
    "url": "assets/md-imgs/styles-change-02.png",
    "revision": "309dac2575b6dd73ff1ae635be717061"
  },
  {
    "url": "assets/md-imgs/styles-change-03.png",
    "revision": "5d6c0d875d4d02f9ed2f00902046344e"
  },
  {
    "url": "assets/md-imgs/taro_h5_01.png",
    "revision": "57bc91e3aaf867b127b1a32398d0b0ff"
  },
  {
    "url": "assets/md-imgs/taro_h5_02.png.png",
    "revision": "6888131d91bab378b17196bba8e83dd8"
  },
  {
    "url": "assets/md-imgs/taro-error-01.png",
    "revision": "33d291d665dbf603763a4b5b68d0aa7e"
  },
  {
    "url": "assets/md-imgs/unicode.png",
    "revision": "00166a609207bf360cd42d31f5cba1c2"
  },
  {
    "url": "assets/md-imgs/upload_many.png",
    "revision": "5e78b6f5e8815b8857c05f8bf27ed0b1"
  },
  {
    "url": "assets/md-imgs/upload_one.png",
    "revision": "96bc441f7ecc7f31762bcc721417fcd5"
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
    "revision": "3643f328491dde122cd87b8ed1ec1fa4"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "eeb512b9bdf228cd55fb7c6ad2ba9344"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "3759beb9c940bcd9dc392dea1b43f318"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Input.html",
    "revision": "8f1afe3701e28d992681bec8e91e5d60"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Modal.html",
    "revision": "07202706fba5149b6f8747dc77647bcb"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Popover.html",
    "revision": "b086b09a603017fd0e38d04bc753faa0"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Progress.html",
    "revision": "d792832cb489b0e9800fee82b2f2b459"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Select.html",
    "revision": "96338b8c6a8574146368f1f51f2603a6"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Table.html",
    "revision": "482f9d98992c7646534349ddabd69617"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Upload.html",
    "revision": "349d73e152c16b75c2346259b8b22598"
  },
  {
    "url": "notes/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "37d91b0c0506746372af1c3b94613068"
  },
  {
    "url": "notes/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "e031cf6ca22014dac1ec6be98c99aebb"
  },
  {
    "url": "notes/20-常用方法/KB单位转换.html",
    "revision": "e104964c8b944cd2fb28967e24a8fe72"
  },
  {
    "url": "notes/20-常用方法/Scroll滚动.html",
    "revision": "3392815bce79daceee3dfab66aa63c27"
  },
  {
    "url": "notes/20-常用方法/URL传参.html",
    "revision": "50bf74252fa322850a00d62f21134f84"
  },
  {
    "url": "notes/20-常用方法/一键复制.html",
    "revision": "e13f13f1a47843184706b39207e97ee5"
  },
  {
    "url": "notes/20-常用方法/小数点后X位.html",
    "revision": "1d304ae5d0f02c73005fdc5f83148852"
  },
  {
    "url": "notes/20-常用方法/常用正则.html",
    "revision": "56c3346511a2633fc61a6ccaf66db6c5"
  },
  {
    "url": "notes/20-常用方法/数组均分.html",
    "revision": "8695b85627e0991c73056a3d43739b92"
  },
  {
    "url": "notes/20-常用方法/时分秒转换.html",
    "revision": "8a3f2310156ec267751fc075195d4fdd"
  },
  {
    "url": "notes/20-常用方法/浏览器缓存取用.html",
    "revision": "29b2a1d3eb971e6c398f801c6a9c83a5"
  },
  {
    "url": "notes/20-常用方法/防抖函数.html",
    "revision": "d16fbac90fc817ac25220e5b402e1f7b"
  },
  {
    "url": "notes/20-常用方法/随机数生成.html",
    "revision": "57970571d9f9c4a41f6edaf782c2856a"
  },
  {
    "url": "notes/30-React/Error Boundaries错误边界.html",
    "revision": "2df61034a50099fc2e988187dd7d87ae"
  },
  {
    "url": "notes/40-JavaScript/onFocus.html",
    "revision": "f8b0abac5c4ed1459dfb793e39a4e120"
  },
  {
    "url": "notes/40-JavaScript/Reduce方法.html",
    "revision": "36b968a7d6849d6d835aa5dec24e823e"
  },
  {
    "url": "notes/40-JavaScript/window常用方法.html",
    "revision": "59508a99b6a678651ee23af9c9a55a8f"
  },
  {
    "url": "notes/40-JavaScript/对数组操作.html",
    "revision": "40d9232e6ef309dc0dbd28508bcca9d3"
  },
  {
    "url": "notes/40-JavaScript/屏蔽文字选中.html",
    "revision": "c1ebdae599bc6fcc282e636244f00a9a"
  },
  {
    "url": "notes/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "fc64b81aa539f339e7e82180395ede0d"
  },
  {
    "url": "notes/40-JavaScript/浏览器缓存.html",
    "revision": "0479b6864eb9292b396d66fdfb188a60"
  },
  {
    "url": "notes/50-Vuepress/10-注意事项.html",
    "revision": "fcd76fbd9130e14c52a3a325ff45a5d0"
  },
  {
    "url": "notes/50-Vuepress/代码块复制.html",
    "revision": "1a8ab016cc17b5e68fcbd8c8070a11ed"
  },
  {
    "url": "notes/50-Vuepress/全局搜索.html",
    "revision": "5899784f42e7c438daf672bde2929bed"
  },
  {
    "url": "notes/50-Vuepress/图片放大.html",
    "revision": "b6bb37c30bbadd2b28b4ac2021582865"
  },
  {
    "url": "notes/50-Vuepress/样式更改.html",
    "revision": "e11dd0a3a637b574d513cda077319dba"
  },
  {
    "url": "notes/60-Taro/less_sass插件安装报错问题.html",
    "revision": "9d8a9c14216a56fac555d6fc6b0898d7"
  },
  {
    "url": "notes/60-Taro/React模板生命周期.html",
    "revision": "fc873f40cd78b00b54b8475c1936e06b"
  },
  {
    "url": "notes/60-Taro/taro_h5并行开发.html",
    "revision": "50f286a8ffb109e8a151845595b1dfcd"
  },
  {
    "url": "notes/60-Taro/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "664c870fd0d67b1f7e8642898b1ef06c"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "67c6d5c54076c937f7f148ca55058edd"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "00d7b3fa585951c41e1e540005a150f0"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "e0181de3d4b8c8eb7fb4865fb3b6195c"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "30cf7c5a0dc0c33a179884b33a300e34"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "6d959c97befab433ff916af3486774b8"
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
