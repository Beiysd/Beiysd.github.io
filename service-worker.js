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
    "revision": "d42ac32f698c5aa2a5cf669797c81285"
  },
  {
    "url": "assets/css/0.styles.d9368b97.css",
    "revision": "7d20ed97a47996cd8ef11fd806f1a415"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.d311881b.js",
    "revision": "4edb84f4176da70af68a1b55e59c814a"
  },
  {
    "url": "assets/js/11.1508d5d9.js",
    "revision": "7f1be044627f39a142dd72676030087b"
  },
  {
    "url": "assets/js/12.886c3243.js",
    "revision": "e3be947eb8e22a9b05fd29526952b699"
  },
  {
    "url": "assets/js/13.c33c3ba9.js",
    "revision": "d4708789352249eb0c6a4f4441e00ce6"
  },
  {
    "url": "assets/js/14.ccd3ae3e.js",
    "revision": "c00b5f89017d9309f351f7024e8ca894"
  },
  {
    "url": "assets/js/15.e605aed2.js",
    "revision": "3d5d51c56a9c92e02d9084f8dcba2063"
  },
  {
    "url": "assets/js/16.78b2d88e.js",
    "revision": "8458f6499a2f5b42f71e1ce2c8e0fdfa"
  },
  {
    "url": "assets/js/17.2938d6ab.js",
    "revision": "51c6e6fb0952a590bfcbfa4aaa723832"
  },
  {
    "url": "assets/js/18.d0be86d0.js",
    "revision": "fb988a1f2bc061863cfbd297f9d88e56"
  },
  {
    "url": "assets/js/19.ecb94d11.js",
    "revision": "34804a5d291ae0f857cc8a0394e1638c"
  },
  {
    "url": "assets/js/2.81463850.js",
    "revision": "55c4917be924fb0edb39acfba82f92fd"
  },
  {
    "url": "assets/js/20.d54af6d3.js",
    "revision": "5a1865b2ebc4c978af53bab6e0622028"
  },
  {
    "url": "assets/js/21.94baac04.js",
    "revision": "7a00bc71ab5e618054c0aa26505e4d69"
  },
  {
    "url": "assets/js/22.00430ee4.js",
    "revision": "1edadb9d6d963f06c6d99d3787294f57"
  },
  {
    "url": "assets/js/23.7765eb1e.js",
    "revision": "c887a1d23bc555e48904f6fc1f655e08"
  },
  {
    "url": "assets/js/24.fc5df387.js",
    "revision": "c842bf33b96d9c491b9928f2339e561b"
  },
  {
    "url": "assets/js/25.7c4c5e50.js",
    "revision": "9ebaa8537de172b6007f5b7cdf845799"
  },
  {
    "url": "assets/js/26.f19cd0a6.js",
    "revision": "d6399869d688cdb77f3e83f70e2c9d6f"
  },
  {
    "url": "assets/js/27.947a1c5f.js",
    "revision": "f2bb77fb937e39216fa8dd297f72d257"
  },
  {
    "url": "assets/js/28.f4fca9e8.js",
    "revision": "d19d2db8a46fd5f724a554c3cdc7864b"
  },
  {
    "url": "assets/js/29.cfe9cd55.js",
    "revision": "a7b2aa392a7be630b6a0b0d579e63cbd"
  },
  {
    "url": "assets/js/3.f034df03.js",
    "revision": "bf8149ae2b90ab31c43e6d422a1a1ed7"
  },
  {
    "url": "assets/js/30.bd227906.js",
    "revision": "920b14a411a8b1964f6c17d4490be470"
  },
  {
    "url": "assets/js/31.2aad3c38.js",
    "revision": "f3ed9e435434cba705dfefc05d22b386"
  },
  {
    "url": "assets/js/32.2e7d2900.js",
    "revision": "f5371c19cf484ae1aba4bf5840591070"
  },
  {
    "url": "assets/js/33.096d75fe.js",
    "revision": "d53ecd65d908e3815fc1e84aae26bfda"
  },
  {
    "url": "assets/js/34.b1f6a805.js",
    "revision": "9f225b8f20e2b1b96c2a3565191200be"
  },
  {
    "url": "assets/js/4.2d7a2363.js",
    "revision": "5b47357d0f728aac5545f7a927656fb4"
  },
  {
    "url": "assets/js/5.1f08a8e6.js",
    "revision": "a666e6aa8286ee1868ac46ebeaeeaf16"
  },
  {
    "url": "assets/js/6.2c283a43.js",
    "revision": "43b35bf71b16472d8b3840af69567e6c"
  },
  {
    "url": "assets/js/7.d0e2c439.js",
    "revision": "c6ffc15f9ee7057181f070269c08400e"
  },
  {
    "url": "assets/js/8.03b9245b.js",
    "revision": "05997233a84abce96f68ef663f310464"
  },
  {
    "url": "assets/js/9.9e39cd90.js",
    "revision": "7d74c5a56887764e00046eae27004911"
  },
  {
    "url": "assets/js/app.8b2018c4.js",
    "revision": "73d5166d88bf65b8a4b0a0a22161e920"
  },
  {
    "url": "assets/pkp.png",
    "revision": "446decb9d6316fcd0439f100d49c86ef"
  },
  {
    "url": "assets/pkq.png",
    "revision": "4f158912c445dbf878d85f9e6746a198"
  },
  {
    "url": "assets/tea.svg",
    "revision": "5da5433c2ee5d3fb76cb97641eb1ca63"
  },
  {
    "url": "index.html",
    "revision": "9018d802e8fc9164d1dc0af74307689a"
  },
  {
    "url": "notes/10-Antd3.x/Checkbox.html",
    "revision": "e33c0838e1405e3aa523bf2110332679"
  },
  {
    "url": "notes/10-Antd3.x/DatePicker.html",
    "revision": "494fef4f68bfef98421c20e1c70c30ae"
  },
  {
    "url": "notes/10-Antd3.x/Input.html",
    "revision": "556e34c398c95914d23028e664ba3baa"
  },
  {
    "url": "notes/10-Antd3.x/Modal.html",
    "revision": "6cacf6021fe19bae71241caca466484b"
  },
  {
    "url": "notes/10-Antd3.x/Popover.html",
    "revision": "2ed7500338c6e3bd15b8439c1edaa14f"
  },
  {
    "url": "notes/10-Antd3.x/Progress.html",
    "revision": "d5fcf80eb4c9891ceda7c6e71f6dd140"
  },
  {
    "url": "notes/10-Antd3.x/Select.html",
    "revision": "e78567e8e9489fb8d8a33cf1085d5818"
  },
  {
    "url": "notes/10-Antd3.x/Table.html",
    "revision": "5bb2a45a95616854825a9cf559ddaec4"
  },
  {
    "url": "notes/20-Antd4.x/DatePicker.html",
    "revision": "a0703ab74206d4875846582adbdd8f1d"
  },
  {
    "url": "notes/30-常用方法/KB单位转换.html",
    "revision": "2172b1413990c5ef8b54fad709e9ef0b"
  },
  {
    "url": "notes/30-常用方法/Scroll滚动.html",
    "revision": "c8ac217775ed968a386cde87fc4b588a"
  },
  {
    "url": "notes/30-常用方法/URL传参.html",
    "revision": "68286b4f8068ecfd745b0c9c1f9bbc93"
  },
  {
    "url": "notes/30-常用方法/一键复制.html",
    "revision": "690c41d862249efadd800a3b371aaacd"
  },
  {
    "url": "notes/30-常用方法/小数点后X位.html",
    "revision": "2f7db2546e9fd5bb2a67c3cd9fa896b5"
  },
  {
    "url": "notes/30-常用方法/常用正则.html",
    "revision": "fc3ee0af849439b68ab76f5593680334"
  },
  {
    "url": "notes/30-常用方法/数组去重.html",
    "revision": "0baa8e32a0637ffcd51b2ab2e0243e66"
  },
  {
    "url": "notes/30-常用方法/数组均分.html",
    "revision": "f73d03e1077ca4ea68c05fa3c8c7915a"
  },
  {
    "url": "notes/30-常用方法/时分秒转换.html",
    "revision": "d0fe3f0719c66e6a47ef609151cabd65"
  },
  {
    "url": "notes/30-常用方法/浏览器缓存取用.html",
    "revision": "354e2195b7602ac05ec7de6b6dc84f73"
  },
  {
    "url": "notes/30-常用方法/防抖函数.html",
    "revision": "d9e5b983824898f70d5a630178b9dbbf"
  },
  {
    "url": "notes/30-常用方法/随机数生成.html",
    "revision": "e4b1c140bf133aecfff495d5de6be338"
  },
  {
    "url": "notes/40-知识点/onFocus.html",
    "revision": "519a2d0f6eb56bfca0c257ff6ba17e1d"
  },
  {
    "url": "notes/40-知识点/Reduce方法.html",
    "revision": "b57cbb7a32095db4668f09d7b051b26d"
  },
  {
    "url": "notes/40-知识点/对数组操作.html",
    "revision": "d3f2d077bf5fc05bb4c20a37e614b262"
  },
  {
    "url": "notes/40-知识点/浏览器缓存.html",
    "revision": "cbd28a641470d8d63f9f4bfff64fa300"
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
