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
    "revision": "1bcee989e0905a38627be08cd0e5899d"
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
    "url": "assets/js/10.c6dd0f2b.js",
    "revision": "3cdd16ca38e1b07172a3f584704088c5"
  },
  {
    "url": "assets/js/11.98ad368f.js",
    "revision": "c32456967aacd8c9cf9ab37260c65293"
  },
  {
    "url": "assets/js/12.e78e09bd.js",
    "revision": "c1cf6bc1f792b9115a30a6f5fcdfde31"
  },
  {
    "url": "assets/js/13.9f895288.js",
    "revision": "3e603c2499adadfc9cce2e5b0c21b773"
  },
  {
    "url": "assets/js/14.4339b8a7.js",
    "revision": "b613992e9ce14f96bef1d63402e8b657"
  },
  {
    "url": "assets/js/15.84c2c386.js",
    "revision": "79501afa9e71d92c2a67f0719f4519af"
  },
  {
    "url": "assets/js/16.a901bf79.js",
    "revision": "ead6e9a1c74337d431f8b2cdab72ca5a"
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
    "url": "assets/js/19.c99c8834.js",
    "revision": "b99224856e1378a4a793c62ebac1c272"
  },
  {
    "url": "assets/js/2.2d1591f3.js",
    "revision": "e7d71d053b2a51a0ca814035c2e04290"
  },
  {
    "url": "assets/js/20.a93dcc14.js",
    "revision": "19ebe328c5759b8488df02a8e1e6b2c6"
  },
  {
    "url": "assets/js/21.08513cf1.js",
    "revision": "a6f8183e7bca7276a3d2f4d08e645ac9"
  },
  {
    "url": "assets/js/22.6929a0b5.js",
    "revision": "f31ee9b949ff14789429ad1bd733d011"
  },
  {
    "url": "assets/js/23.c9ebb5ef.js",
    "revision": "447396fa7fcf4a1636c77f5dabea34b2"
  },
  {
    "url": "assets/js/24.6e43117f.js",
    "revision": "f88b93164671b32e8c08d5d4ac4e702d"
  },
  {
    "url": "assets/js/25.3a4e5657.js",
    "revision": "66740d1cacd9e47a2d4bd7a606385f43"
  },
  {
    "url": "assets/js/26.4a75792f.js",
    "revision": "2bae4d1f4810e78804c3cd423f152e81"
  },
  {
    "url": "assets/js/27.af4386bb.js",
    "revision": "1ee5311851d44f6455291684d592e34b"
  },
  {
    "url": "assets/js/28.e8a2e639.js",
    "revision": "5309c9a7918f575bffe0d83f9b2cb60d"
  },
  {
    "url": "assets/js/29.96140ae9.js",
    "revision": "02346132c55ff1af7efd8d84e72e7adc"
  },
  {
    "url": "assets/js/3.443132dc.js",
    "revision": "bbd74e8549c4b4fd54900cd19abe9956"
  },
  {
    "url": "assets/js/30.c6001431.js",
    "revision": "8edf1b2e0e5ab4b662c658f72247f4b8"
  },
  {
    "url": "assets/js/31.f3e7491d.js",
    "revision": "a01d2aedcfec35dacee79a31438ba566"
  },
  {
    "url": "assets/js/32.3f3c6acf.js",
    "revision": "a678558a32c5ed3ca271a1421e11f486"
  },
  {
    "url": "assets/js/33.5bc69525.js",
    "revision": "0337899aef5b81b8f058732144d40946"
  },
  {
    "url": "assets/js/34.253f00fe.js",
    "revision": "197ac6c95fe55ecc73652cb9d1a60bd6"
  },
  {
    "url": "assets/js/35.993145c3.js",
    "revision": "50d750b97588ae2b586825c959d696a9"
  },
  {
    "url": "assets/js/36.8a063d67.js",
    "revision": "9d0c6ba5462768db87c2a2c6e2a46f35"
  },
  {
    "url": "assets/js/37.47438ca9.js",
    "revision": "c4e8667588066ad8615e38744d39e8f3"
  },
  {
    "url": "assets/js/38.9d213bbe.js",
    "revision": "3d8740400f1a032c2e601e553e30e31e"
  },
  {
    "url": "assets/js/39.f1cc9d8d.js",
    "revision": "43d36f23e7ce0246c0d1b3e29f277c5d"
  },
  {
    "url": "assets/js/4.edc5357f.js",
    "revision": "16930eda605349ecb1378fb29ee978c9"
  },
  {
    "url": "assets/js/40.cff77c4e.js",
    "revision": "9cce5df41a53e89e03694cc8b69392b9"
  },
  {
    "url": "assets/js/41.c8e96a62.js",
    "revision": "3bf3dba75171c0757733bd269679dabb"
  },
  {
    "url": "assets/js/42.b2f5f15f.js",
    "revision": "6f8d694567ed0fce0ba641f364706413"
  },
  {
    "url": "assets/js/43.7faff664.js",
    "revision": "39da8134dd9f6b9ec6ae686d5df4afcd"
  },
  {
    "url": "assets/js/44.3a53367a.js",
    "revision": "947206f91b836912969cb8dd2cf16c7d"
  },
  {
    "url": "assets/js/45.2d25d0fc.js",
    "revision": "21299161335e4b18c4e6a56d42f64cc8"
  },
  {
    "url": "assets/js/46.7764f2f9.js",
    "revision": "352568c6f3e786d02a21ef650f35572b"
  },
  {
    "url": "assets/js/47.68fe3e72.js",
    "revision": "f506c94e0b958461c378c1dedd8dc8f8"
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
    "url": "assets/js/9.5582d85c.js",
    "revision": "ead5a9034c0239b15a2c0edba0f00ce6"
  },
  {
    "url": "assets/js/app.457e111e.js",
    "revision": "73551f46781b3befa150fef73412bf38"
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
    "revision": "fddd73ff692e2baf261e586b8b9d5151"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "579b69f721efd57d0f1f184a0deb1a62"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "503eb56f80006bdd6da0d203e6d9df3d"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Input.html",
    "revision": "6964983fbd41e355e28513ab00597639"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Modal.html",
    "revision": "b5171c6dc650a2761d446cbb614dbe36"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Popover.html",
    "revision": "5c2c75042342735a22031f796e43f056"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Progress.html",
    "revision": "983733a41c4f7550d8307ec7e2ca9cf8"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Select.html",
    "revision": "c8c039ef861201caf10b3193781a3d04"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Table.html",
    "revision": "20f30a6eeed43a9f35a5a0667f61f829"
  },
  {
    "url": "notes/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "b37e93086faa8fc1e4909de4f44d9a97"
  },
  {
    "url": "notes/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "acdad983e9a1bcaa5bed3f49db09f1b5"
  },
  {
    "url": "notes/20-常用方法/KB单位转换.html",
    "revision": "05786c657e9f1be03e6b73049cbafbeb"
  },
  {
    "url": "notes/20-常用方法/Scroll滚动.html",
    "revision": "8b370b75067d32bc30999c90021cf4ea"
  },
  {
    "url": "notes/20-常用方法/URL传参.html",
    "revision": "c8a6d59a93da79091930a19d0ebb60a0"
  },
  {
    "url": "notes/20-常用方法/一键复制.html",
    "revision": "3c5845b2dd514ad61d8d02d87bb0c98a"
  },
  {
    "url": "notes/20-常用方法/小数点后X位.html",
    "revision": "2c506134f66853d7b16150d99d7b18a8"
  },
  {
    "url": "notes/20-常用方法/常用正则.html",
    "revision": "24c816b7b585dca5b5beb234d541ae0c"
  },
  {
    "url": "notes/20-常用方法/数组均分.html",
    "revision": "484ee222c57b339f105d78842bd54803"
  },
  {
    "url": "notes/20-常用方法/时分秒转换.html",
    "revision": "922db41b4e0948785656500db7c3951c"
  },
  {
    "url": "notes/20-常用方法/浏览器缓存取用.html",
    "revision": "28f19f49eb9f83e570f046cfa6129f22"
  },
  {
    "url": "notes/20-常用方法/防抖函数.html",
    "revision": "f3e95adcbdc8be2245fb3362dbcac372"
  },
  {
    "url": "notes/20-常用方法/随机数生成.html",
    "revision": "d5fa5e4c5a57abd033b9592b2824e9e7"
  },
  {
    "url": "notes/40-JavaScript/onFocus.html",
    "revision": "5699eaefc6addb9ede12b9e221cad611"
  },
  {
    "url": "notes/40-JavaScript/Reduce方法.html",
    "revision": "e93b538eb1ac2ed018dac4bd632d147b"
  },
  {
    "url": "notes/40-JavaScript/window常用方法.html",
    "revision": "c9a4e9bc7a2bdeb8d8822c8c6a6683c0"
  },
  {
    "url": "notes/40-JavaScript/对数组操作.html",
    "revision": "92a563abe830871cc632f39cc2819481"
  },
  {
    "url": "notes/40-JavaScript/屏蔽文字选中.html",
    "revision": "378d71245e254f95d996c6f8c9fa0275"
  },
  {
    "url": "notes/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "2da7e3cbd7dc446dbf37bf001cdd4938"
  },
  {
    "url": "notes/40-JavaScript/浏览器缓存.html",
    "revision": "ce8884022038efae25eb025237d61c2a"
  },
  {
    "url": "notes/50-Vuepress/10-注意事项.html",
    "revision": "025eb00b8394807103cb35c6dbb13b2c"
  },
  {
    "url": "notes/50-Vuepress/代码块复制.html",
    "revision": "a5de32d56e1ccc6fddb74ad079639e10"
  },
  {
    "url": "notes/50-Vuepress/全局搜索.html",
    "revision": "e7f650ed544122edf1b43624d4d1a6ee"
  },
  {
    "url": "notes/50-Vuepress/图片放大.html",
    "revision": "aefc98ba59cf9e333e86db8a7249c4a0"
  },
  {
    "url": "notes/50-Vuepress/样式更改.html",
    "revision": "03d0f60faac624269b855710bd125606"
  },
  {
    "url": "notes/60-Taro/less_sass插件安装报错问题.html",
    "revision": "83decaa23059235228aa809c91fa66a3"
  },
  {
    "url": "notes/60-Taro/React模板生命周期.html",
    "revision": "95f4757e1c06acd588b0ab8e4d287680"
  },
  {
    "url": "notes/60-Taro/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "5aaf906edfcc6f0db308fb0ad1d18624"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "2b66ba21c625a2f6a604b54cfe6ad3d3"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "50005b2170ea0205dc34046144dfdc67"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "2513b051a8fc8e44244bdeb478b86193"
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
