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
    "revision": "18fca59d1e9b1f5b467c657ef0776877"
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
    "url": "assets/js/10.581955bb.js",
    "revision": "86d2b553357a7c80f8d082e5e54aa8c7"
  },
  {
    "url": "assets/js/11.d2584318.js",
    "revision": "c4a7edca8dbc7735ad982964404ae07a"
  },
  {
    "url": "assets/js/12.0f8b7e10.js",
    "revision": "a08e86aed40af7c45f8f82bbfdbd8267"
  },
  {
    "url": "assets/js/13.7c2258e4.js",
    "revision": "d1d7c747e76417058eeb363f73366288"
  },
  {
    "url": "assets/js/14.4339b8a7.js",
    "revision": "b613992e9ce14f96bef1d63402e8b657"
  },
  {
    "url": "assets/js/15.a9125e21.js",
    "revision": "94c1475244f282043afa254b27ffc729"
  },
  {
    "url": "assets/js/16.cccdea7f.js",
    "revision": "c9e7ee0c2ae53fdd58624b0001f32f73"
  },
  {
    "url": "assets/js/17.7b0a58d6.js",
    "revision": "c994c9dd7b8ae843963784778a182fca"
  },
  {
    "url": "assets/js/18.eb5cac9b.js",
    "revision": "610d18612ec32de80ac4b6edafaec975"
  },
  {
    "url": "assets/js/19.1a80ca53.js",
    "revision": "5fb60015dcc2b71589b0e3b368a3ca3e"
  },
  {
    "url": "assets/js/2.2d1591f3.js",
    "revision": "e7d71d053b2a51a0ca814035c2e04290"
  },
  {
    "url": "assets/js/20.49b99f9d.js",
    "revision": "121f6a4c23bc523fc1ccf82a7320185c"
  },
  {
    "url": "assets/js/21.e80a4090.js",
    "revision": "ebd1164474142e5c326a12acb516ba0b"
  },
  {
    "url": "assets/js/22.c01d76cc.js",
    "revision": "3d96eacaacbe982c791dbd3f7edeb424"
  },
  {
    "url": "assets/js/23.7270bacb.js",
    "revision": "e9d44199df3826f91e214e3dbc1530ab"
  },
  {
    "url": "assets/js/24.906d1076.js",
    "revision": "c65d8c602c59c87e534b7d716c51735c"
  },
  {
    "url": "assets/js/25.d7fbca59.js",
    "revision": "1f8c9b3e04f581555c416a8cf581902d"
  },
  {
    "url": "assets/js/26.60783f8a.js",
    "revision": "9a972a57d147b5c31f7b0cdda0fed1a3"
  },
  {
    "url": "assets/js/27.547e05ac.js",
    "revision": "b6cac573fece800aa9fcd440c5af57af"
  },
  {
    "url": "assets/js/28.54fec11d.js",
    "revision": "bbb395d54ccf0d7a4327a7751eb71b85"
  },
  {
    "url": "assets/js/29.4140af4c.js",
    "revision": "c7d0dc85e77896fb93f25be8d61aa823"
  },
  {
    "url": "assets/js/3.443132dc.js",
    "revision": "bbd74e8549c4b4fd54900cd19abe9956"
  },
  {
    "url": "assets/js/30.056d33df.js",
    "revision": "697a28e5dfcdae6560cb86255ccc970c"
  },
  {
    "url": "assets/js/31.6acb27e3.js",
    "revision": "5b22abcbd2c94484b3d9ae72e2f37f98"
  },
  {
    "url": "assets/js/32.3f3c6acf.js",
    "revision": "a678558a32c5ed3ca271a1421e11f486"
  },
  {
    "url": "assets/js/33.c9681181.js",
    "revision": "be1bb156a7d966c8452dc4476a06ced2"
  },
  {
    "url": "assets/js/34.bda34281.js",
    "revision": "1710759cdbf317f1d321a867de5d1702"
  },
  {
    "url": "assets/js/35.f8d8d653.js",
    "revision": "9b2a16c63d2c2921abd2bdfe0963a523"
  },
  {
    "url": "assets/js/36.87c25402.js",
    "revision": "9e6e44beaa7ec941ef991054a07ced0c"
  },
  {
    "url": "assets/js/37.39c69069.js",
    "revision": "608e519d132a10931e9345e82db1c440"
  },
  {
    "url": "assets/js/38.9d213bbe.js",
    "revision": "3d8740400f1a032c2e601e553e30e31e"
  },
  {
    "url": "assets/js/39.feb97b0a.js",
    "revision": "058b23eaecce8697e69c2f53387c1403"
  },
  {
    "url": "assets/js/4.edc5357f.js",
    "revision": "16930eda605349ecb1378fb29ee978c9"
  },
  {
    "url": "assets/js/40.8ed79fd1.js",
    "revision": "a15fc7e7afb405f826760f1cd51704f4"
  },
  {
    "url": "assets/js/41.9a4c2b1c.js",
    "revision": "6048742c87a0d3ed2a3e9ab606d5f6ee"
  },
  {
    "url": "assets/js/42.56a3e29d.js",
    "revision": "e3b9c3f8b5490f424e716f6d62484318"
  },
  {
    "url": "assets/js/43.e9602102.js",
    "revision": "eb0986c4c39394527406cff9a57747e7"
  },
  {
    "url": "assets/js/44.a2f9d2d7.js",
    "revision": "98bfda00c6a002b4f8970cafb17e575d"
  },
  {
    "url": "assets/js/45.2d25d0fc.js",
    "revision": "21299161335e4b18c4e6a56d42f64cc8"
  },
  {
    "url": "assets/js/46.1fff8f9e.js",
    "revision": "ee23acd43b962397c1d06aa702756032"
  },
  {
    "url": "assets/js/47.12cebdbe.js",
    "revision": "b8f27123e803f37d4fd095bf3816d899"
  },
  {
    "url": "assets/js/48.25bbb1f6.js",
    "revision": "d8573889274cdc2795794e65ebf3b455"
  },
  {
    "url": "assets/js/5.c4ee1a7a.js",
    "revision": "7e916ea96e5e9bcb40b3ca13726cbfd9"
  },
  {
    "url": "assets/js/6.5c494d3e.js",
    "revision": "3f10550a635cf3733543fe5892c674ee"
  },
  {
    "url": "assets/js/7.058f4bd5.js",
    "revision": "f1f06db0208c459ee33f569da4a0f801"
  },
  {
    "url": "assets/js/8.18c0d862.js",
    "revision": "93c3a821b0526c80fe6e647bfcdb5e7e"
  },
  {
    "url": "assets/js/9.ab259ad9.js",
    "revision": "95b166b52215dc90049cb13cc7d2da5b"
  },
  {
    "url": "assets/js/app.64bae19f.js",
    "revision": "007e5755832e863fd5ff423aa4dc2560"
  },
  {
    "url": "assets/md-imgs/canvas-01.png",
    "revision": "cf34b7d3359b8ccd534ac800f4204238"
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
    "url": "assets/md-imgs/taro-error-01.png",
    "revision": "33d291d665dbf603763a4b5b68d0aa7e"
  },
  {
    "url": "assets/md-imgs/unicode.png",
    "revision": "00166a609207bf360cd42d31f5cba1c2"
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
    "revision": "aeff66066616fdf6302bac1d8b835e6a"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "e8305a3b4e3481db192317e2b50a88c4"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "077977badf50b99f99b38e5ae340e0ef"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Input.html",
    "revision": "58cb3d357db7ee8cbeebea632161e8bd"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Modal.html",
    "revision": "a27a7b59f8b1f0561c82740c0d811bdb"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Popover.html",
    "revision": "17d5b03935f4b85561b730c9fa14be17"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Progress.html",
    "revision": "9f416bb210af3f5e1f64a03d901ed2cf"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Select.html",
    "revision": "87b361fb1530df862617e30d1bfd4024"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Table.html",
    "revision": "8aa6cfb102a038d22b968b5bc88759dd"
  },
  {
    "url": "notes/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "f18c721980f88ee67fb177edf31dbfe2"
  },
  {
    "url": "notes/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "84674d64fb4b05f64c89c1ce764296a0"
  },
  {
    "url": "notes/20-常用方法/KB单位转换.html",
    "revision": "c74256da220a06eb82a0e484c29d6d7f"
  },
  {
    "url": "notes/20-常用方法/Scroll滚动.html",
    "revision": "0d07afcc4e0012b995ba0dec5698b9fe"
  },
  {
    "url": "notes/20-常用方法/URL传参.html",
    "revision": "2c3b941d956a2541b08a73ea769f0ba6"
  },
  {
    "url": "notes/20-常用方法/一键复制.html",
    "revision": "fc02acd97143897deade1de1b9edd137"
  },
  {
    "url": "notes/20-常用方法/小数点后X位.html",
    "revision": "10f80158ed1bd193bbe9ab31a272c9b1"
  },
  {
    "url": "notes/20-常用方法/常用正则.html",
    "revision": "bd69b3eaa33836ece68acf27ccf9cedf"
  },
  {
    "url": "notes/20-常用方法/数组均分.html",
    "revision": "97aef702567c746c6b5d172fafa68390"
  },
  {
    "url": "notes/20-常用方法/时分秒转换.html",
    "revision": "e3045d3dff34bf29c9bb062540e4f5ba"
  },
  {
    "url": "notes/20-常用方法/浏览器缓存取用.html",
    "revision": "d5e998051664d769ed78bc2d037e505c"
  },
  {
    "url": "notes/20-常用方法/防抖函数.html",
    "revision": "d4f87eb9b0e312c6205739d0a1c8cd5c"
  },
  {
    "url": "notes/20-常用方法/随机数生成.html",
    "revision": "894ad792c9d36b50e7ee5503363b9938"
  },
  {
    "url": "notes/40-JavaScript/onFocus.html",
    "revision": "284ae0a0f2e0bd93831509acd94402cc"
  },
  {
    "url": "notes/40-JavaScript/Reduce方法.html",
    "revision": "e2dcf1de60339a83ed9495f0fd1eae62"
  },
  {
    "url": "notes/40-JavaScript/window常用方法.html",
    "revision": "46fc433abeddc262545af2ce74b422c6"
  },
  {
    "url": "notes/40-JavaScript/对数组操作.html",
    "revision": "a3a0ffc66b5519d27368accde7538584"
  },
  {
    "url": "notes/40-JavaScript/屏蔽文字选中.html",
    "revision": "7c0001d1ac3a3427563567d8565d9a89"
  },
  {
    "url": "notes/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "54451e2e57d12f563e4b5b345750f44b"
  },
  {
    "url": "notes/40-JavaScript/浏览器缓存.html",
    "revision": "ad836a5a0c4f03f1c707493ccde2a0be"
  },
  {
    "url": "notes/50-Vuepress/10-注意事项.html",
    "revision": "f7dcf14b370434b0c93fa845f2aa062a"
  },
  {
    "url": "notes/50-Vuepress/代码块复制.html",
    "revision": "35ec07ae69219a14ef8fe79bc5743d81"
  },
  {
    "url": "notes/50-Vuepress/全局搜索.html",
    "revision": "fd48252496c3fcf466c00bbab8535ad1"
  },
  {
    "url": "notes/50-Vuepress/图片放大.html",
    "revision": "04c989530ed374fb36191d9d30f5018e"
  },
  {
    "url": "notes/50-Vuepress/样式更改.html",
    "revision": "86211148aa20e27db3567d5a9849727e"
  },
  {
    "url": "notes/60-Taro/less_sass插件安装报错问题.html",
    "revision": "57ff61cdb50880984b11e7dd26c54053"
  },
  {
    "url": "notes/60-Taro/React模板生命周期.html",
    "revision": "c0e8f2248f7abac9cb546234fb6f9ac5"
  },
  {
    "url": "notes/60-Taro/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "489eb3c657e42901d2ea4d56739d68c1"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "343d7b084912121f1c30b993c325fe47"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "957187e763337e5de8991843bd242ef6"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "55442bb27b72cda69e329b62568e37d4"
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
