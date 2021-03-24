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
    "revision": "c7aab629fab8bdf5c96d49bc18972d4c"
  },
  {
    "url": "assets/css/0.styles.dbdcd9ab.css",
    "revision": "c97825be6323ce7106f2cd658f28c1b2"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.54efb622.js",
    "revision": "643d6a1835f3d0d74552aa87bfaf46cf"
  },
  {
    "url": "assets/js/11.cd61ae52.js",
    "revision": "104b3448a1adeae6a1d03f736cc060d3"
  },
  {
    "url": "assets/js/12.9e33f55f.js",
    "revision": "d5d3c7bb5666bb8ddea5a7f2161dbb1d"
  },
  {
    "url": "assets/js/13.7b588017.js",
    "revision": "c0c828947418fb634c6bd0a781e85ecd"
  },
  {
    "url": "assets/js/14.36c6bc92.js",
    "revision": "02085641c9536db0b7a4be520334126f"
  },
  {
    "url": "assets/js/15.4dd583e3.js",
    "revision": "f2501ea0174788a0859fa9b998bfa283"
  },
  {
    "url": "assets/js/16.683c79e3.js",
    "revision": "5a8307c1f5d67617ee3a04473794f4d5"
  },
  {
    "url": "assets/js/17.b1df90c0.js",
    "revision": "be081dd602dc57e9b4e3d14a839a00be"
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
    "url": "assets/js/2.82eba915.js",
    "revision": "e7d71d053b2a51a0ca814035c2e04290"
  },
  {
    "url": "assets/js/20.79be5ed6.js",
    "revision": "53577712f04f82054a0a7189d51dbd51"
  },
  {
    "url": "assets/js/21.7d07d949.js",
    "revision": "c2a74b486ee537dd8de3cff16a67efdc"
  },
  {
    "url": "assets/js/22.888c8e56.js",
    "revision": "451e09b6784cdb327c0a20f93406e318"
  },
  {
    "url": "assets/js/23.db62fb16.js",
    "revision": "23208cd5d87dfabbce0f512c774f7854"
  },
  {
    "url": "assets/js/24.cf9360b7.js",
    "revision": "03627652d5142fde6eb29847190500bb"
  },
  {
    "url": "assets/js/25.2a58becd.js",
    "revision": "bd432b73c108bc096cdc25e71d68939c"
  },
  {
    "url": "assets/js/26.a196edbd.js",
    "revision": "fbbb88d83d642cc238687b136f8128e5"
  },
  {
    "url": "assets/js/27.4abc03ac.js",
    "revision": "d480b4bb4a7f1bad1c66d064155080c5"
  },
  {
    "url": "assets/js/28.a861c664.js",
    "revision": "19780526c929e18396a86c3b12971154"
  },
  {
    "url": "assets/js/29.a6d14b88.js",
    "revision": "c818f88ece10d8a6ee20c526852768ab"
  },
  {
    "url": "assets/js/3.443132dc.js",
    "revision": "bbd74e8549c4b4fd54900cd19abe9956"
  },
  {
    "url": "assets/js/30.3524af98.js",
    "revision": "9f8e8dc7a86c11f142d236717140b7a1"
  },
  {
    "url": "assets/js/31.6f56d918.js",
    "revision": "8deda67d20f4c28eff1d5a19d94630f6"
  },
  {
    "url": "assets/js/32.c79d62f8.js",
    "revision": "b3266d3db1fc764c35bc9e90ba6ddf7a"
  },
  {
    "url": "assets/js/33.1fac133b.js",
    "revision": "858e56ee91e40aca0f4196148f5c4807"
  },
  {
    "url": "assets/js/34.57b0962f.js",
    "revision": "f94973dc60f7441f3242a826c21d7cbe"
  },
  {
    "url": "assets/js/35.fe3f2df6.js",
    "revision": "940f12810ef8192118d22790e5872953"
  },
  {
    "url": "assets/js/36.24090127.js",
    "revision": "2908f30330a4fae0c2410250ad6e09ae"
  },
  {
    "url": "assets/js/37.d7442a40.js",
    "revision": "43827e89104efec14590b2c9eba80e3c"
  },
  {
    "url": "assets/js/38.bce30d2e.js",
    "revision": "6d43e10d61f017160e0b83dcd42f5ea0"
  },
  {
    "url": "assets/js/39.eec54e3c.js",
    "revision": "0acb0fcbe986ec330e8d562bb3893cc3"
  },
  {
    "url": "assets/js/4.8f4fb678.js",
    "revision": "51c000e37078eb528657793af815dd75"
  },
  {
    "url": "assets/js/5.2eb253e0.js",
    "revision": "207c24513ed4a8c28cad6d18eff2df75"
  },
  {
    "url": "assets/js/6.0143b527.js",
    "revision": "badc7b9335bc7192e81cafa55a93e882"
  },
  {
    "url": "assets/js/7.058f4bd5.js",
    "revision": "f1f06db0208c459ee33f569da4a0f801"
  },
  {
    "url": "assets/js/8.a108e232.js",
    "revision": "08b93f0f2595003f5444a2e333ec14bf"
  },
  {
    "url": "assets/js/9.c52fe66d.js",
    "revision": "b29dd00000537dce87f6228433c88785"
  },
  {
    "url": "assets/js/app.3aa3c2bf.js",
    "revision": "db85e2c3b422a6993b67b1f3e9eba1da"
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
    "revision": "06b304289a8502c5eb6211cd011b169c"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "9c6696eb3a7cfd8b6fa39f5dbc641443"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "2b8f3104a4fc9ba44a5b21b06e3c67f6"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Input.html",
    "revision": "35b3de80af757504ec9bdaadbc4b9611"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Modal.html",
    "revision": "aadb8e285418829615cc2e2a4a630166"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Popover.html",
    "revision": "506d27428308b131a04666ef5cbc34fa"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Progress.html",
    "revision": "79b1c38f45d243eebad968f2d178ea64"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Select.html",
    "revision": "c98221c1ab8fc4bf29006b4f682d7363"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Table.html",
    "revision": "fa7c67c8dfd5eacac4153a7d07fd264f"
  },
  {
    "url": "notes/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "1683883654bfecb3ba516f91681ca480"
  },
  {
    "url": "notes/20-常用方法/KB单位转换.html",
    "revision": "c133bb0eaf1bfc60176c2138d9dc38a1"
  },
  {
    "url": "notes/20-常用方法/Scroll滚动.html",
    "revision": "f2e98da1776b2e83a01ea45b16b32731"
  },
  {
    "url": "notes/20-常用方法/URL传参.html",
    "revision": "b6e5e619908c16c78f26559efea06d49"
  },
  {
    "url": "notes/20-常用方法/一键复制.html",
    "revision": "6bc473bcf509147afdb118602d127f23"
  },
  {
    "url": "notes/20-常用方法/小数点后X位.html",
    "revision": "8168926247c3ef9892736038a1403a50"
  },
  {
    "url": "notes/20-常用方法/常用正则.html",
    "revision": "08eb1190c7ae2c9d187fbb2a6c3c2d8e"
  },
  {
    "url": "notes/20-常用方法/数组均分.html",
    "revision": "72028baeba44ebe269fe45947328aa2a"
  },
  {
    "url": "notes/20-常用方法/时分秒转换.html",
    "revision": "0f41d0c5f0a1bd2d4e82aa4375763740"
  },
  {
    "url": "notes/20-常用方法/浏览器缓存取用.html",
    "revision": "733145b4f892399904d1ec5ad0ffcbf9"
  },
  {
    "url": "notes/20-常用方法/防抖函数.html",
    "revision": "fc6e2d88b5b9ae717ca40d1105d33cce"
  },
  {
    "url": "notes/20-常用方法/随机数生成.html",
    "revision": "ee8dedbbe4656c3deca712c2bb5a5021"
  },
  {
    "url": "notes/40-JavaScript/onFocus.html",
    "revision": "eb01d196e83371b6b555064d732310d2"
  },
  {
    "url": "notes/40-JavaScript/Reduce方法.html",
    "revision": "bbc0bd2e6341e14a3bde0a8c48f5003d"
  },
  {
    "url": "notes/40-JavaScript/对数组操作.html",
    "revision": "6630afe289beb31ffe8b11b0657edece"
  },
  {
    "url": "notes/40-JavaScript/浏览器缓存.html",
    "revision": "b015bc7a45ad5669a05d4a45486f205c"
  },
  {
    "url": "notes/50-Vuepress/10-注意事项.html",
    "revision": "e0f039b42e658008c68d8ea52e2e7e89"
  },
  {
    "url": "notes/50-Vuepress/代码块复制.html",
    "revision": "0b6fd1cd96878eeab6b64cf056bfb164"
  },
  {
    "url": "notes/50-Vuepress/全局搜索.html",
    "revision": "162147af8977e371890abfc0f6818233"
  },
  {
    "url": "notes/50-Vuepress/图片放大.html",
    "revision": "6e4654c38c40612dc23f2abb1b0baa1d"
  },
  {
    "url": "notes/50-Vuepress/样式更改.html",
    "revision": "052affb0ec9d3d4aeb37ce687517f64b"
  },
  {
    "url": "notes/99-开发注意事项.html",
    "revision": "98f9d99b4b9b0a2229bc1e9a4651e279"
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
