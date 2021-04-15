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
    "revision": "22c73a321581a2e86e5773befd55bb12"
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
    "url": "assets/js/10.a9d4e2dd.js",
    "revision": "cd307dce0e684e4a4d7bd8fc6d7e1035"
  },
  {
    "url": "assets/js/11.3a26a565.js",
    "revision": "39da9bc33b539f2af293caef622695b5"
  },
  {
    "url": "assets/js/12.8f8f7ace.js",
    "revision": "d7266347ee97849cfcd9772d1d3ca922"
  },
  {
    "url": "assets/js/13.2375fe4e.js",
    "revision": "564cda56dc2f31ecda2ec6ba33018ec0"
  },
  {
    "url": "assets/js/14.cf0c67c1.js",
    "revision": "1f7f6aa6bbd24f01c2d323639e462917"
  },
  {
    "url": "assets/js/15.d60151d2.js",
    "revision": "ef04d32bf7ae239bd3afb05bcc966e75"
  },
  {
    "url": "assets/js/16.9b3f57b0.js",
    "revision": "8766e4c1b7dd718d28d89ecfc16b6275"
  },
  {
    "url": "assets/js/17.0153ab5f.js",
    "revision": "1f6da1f63bee5fd2f330cce44209b985"
  },
  {
    "url": "assets/js/18.4658695e.js",
    "revision": "ef21e37a6176cc4e42fc4559a088ab49"
  },
  {
    "url": "assets/js/19.d32d074b.js",
    "revision": "af5da5896a3b5b340e23b5d66b8f75f2"
  },
  {
    "url": "assets/js/2.9cf5eeb4.js",
    "revision": "28e98c386d2c268d4b9a9f188269c0f3"
  },
  {
    "url": "assets/js/20.709bd1b2.js",
    "revision": "2da162feea06fbcea72e4227e1b6f021"
  },
  {
    "url": "assets/js/21.bf5bea70.js",
    "revision": "5d6fe4c1b91ee55b9bb0b562cfecfbb8"
  },
  {
    "url": "assets/js/22.46f984d6.js",
    "revision": "bff0348af62a779eb1cc56de61634077"
  },
  {
    "url": "assets/js/23.69e22fff.js",
    "revision": "9f03386595faa5d9c67f2feea5304749"
  },
  {
    "url": "assets/js/24.50c745cf.js",
    "revision": "90ce3192189e478089afc13897cc9308"
  },
  {
    "url": "assets/js/25.a52132df.js",
    "revision": "8fb6b28a61cff02917834d7edf7e0800"
  },
  {
    "url": "assets/js/26.121513ca.js",
    "revision": "b810bb0faacf04bf2617066ffe5c8214"
  },
  {
    "url": "assets/js/27.72fa718a.js",
    "revision": "334231d67fff2f5e4f102e2b1c9a3f06"
  },
  {
    "url": "assets/js/28.051466d4.js",
    "revision": "06f5118045a9c077f7c86a56acd62283"
  },
  {
    "url": "assets/js/29.60f90230.js",
    "revision": "0c26e815309dd90c3fe75f96dc565846"
  },
  {
    "url": "assets/js/3.443132dc.js",
    "revision": "bbd74e8549c4b4fd54900cd19abe9956"
  },
  {
    "url": "assets/js/30.c2c1bb1e.js",
    "revision": "1943743a58dcd292bdddc72d3328010c"
  },
  {
    "url": "assets/js/31.e5d3ce69.js",
    "revision": "47485f7865000255956d96e8bb4fa2c2"
  },
  {
    "url": "assets/js/32.a511f8b9.js",
    "revision": "58884b5289d384ab7b3ea9cc7d45b99e"
  },
  {
    "url": "assets/js/33.9dd73599.js",
    "revision": "10accabc5dbb8ec5ecb533273027aec2"
  },
  {
    "url": "assets/js/34.fd713755.js",
    "revision": "5fed2bbab1257fcf4cd5dcc40b900bd3"
  },
  {
    "url": "assets/js/35.ef9a1206.js",
    "revision": "5091fbd6968d6449acfe390a9ddaaea8"
  },
  {
    "url": "assets/js/36.c4501898.js",
    "revision": "35f03bbfea83d6bc028bb4ef6dae7665"
  },
  {
    "url": "assets/js/37.7339cae8.js",
    "revision": "bdb7de795e972891476c8323bcc89126"
  },
  {
    "url": "assets/js/38.c09abe7a.js",
    "revision": "59cb04667b50b0238ef2c59795dc7ff9"
  },
  {
    "url": "assets/js/39.0c661001.js",
    "revision": "fdb4d064bf7a4b03c64c6739d4b28dd2"
  },
  {
    "url": "assets/js/4.453f68cb.js",
    "revision": "5e6d2c0c919ef634c57170772a9d41b0"
  },
  {
    "url": "assets/js/40.632041a8.js",
    "revision": "d0ec85b501f36f43111f09b4018e95cd"
  },
  {
    "url": "assets/js/41.eb1450f9.js",
    "revision": "d07b7d9788c4bcef7adf2fc328528ccb"
  },
  {
    "url": "assets/js/42.ced143e9.js",
    "revision": "efe321bc0f3914c7ec96cd229d3b4821"
  },
  {
    "url": "assets/js/43.edd767b9.js",
    "revision": "176d3d6b738ebd7aa322ddaa7a9ad962"
  },
  {
    "url": "assets/js/44.c3cbffe5.js",
    "revision": "3a45156b3981e40b2bc6d06e1da52999"
  },
  {
    "url": "assets/js/45.f0bbc1da.js",
    "revision": "7c76a0505b255c3ffea81cd8d381e611"
  },
  {
    "url": "assets/js/46.9a6074bd.js",
    "revision": "043b750245331b8e1fe6f80fae591dc3"
  },
  {
    "url": "assets/js/47.46d08960.js",
    "revision": "f393ccc0638e4a9f4d2d1693f8aab5aa"
  },
  {
    "url": "assets/js/48.5cd5760f.js",
    "revision": "fdd485403c109be088e1c0740b0d86b9"
  },
  {
    "url": "assets/js/49.1e3e2fbe.js",
    "revision": "2d1cae192cad6b44c72dd715239b49fd"
  },
  {
    "url": "assets/js/5.c4ee1a7a.js",
    "revision": "7e916ea96e5e9bcb40b3ca13726cbfd9"
  },
  {
    "url": "assets/js/50.c6d711a0.js",
    "revision": "2b11818231b9e10dacf808d4d51207eb"
  },
  {
    "url": "assets/js/51.f18e80e0.js",
    "revision": "88b2cb25a65dc818939f001e26f26119"
  },
  {
    "url": "assets/js/52.9daa1294.js",
    "revision": "2446c498fe1a59b172554cf0444f57f7"
  },
  {
    "url": "assets/js/53.0945fc44.js",
    "revision": "e03934b21595c3dd9252321c42a117a9"
  },
  {
    "url": "assets/js/54.5cdfea26.js",
    "revision": "cd9cdb2be9019e69d13a1c7d9602bbd2"
  },
  {
    "url": "assets/js/55.5425a1ca.js",
    "revision": "af83b5800494b9941b8cddef25f5d1bf"
  },
  {
    "url": "assets/js/56.0a0d7c46.js",
    "revision": "49344513d6f22f72753831174337157e"
  },
  {
    "url": "assets/js/57.12f8bceb.js",
    "revision": "b8d72c5e755977658cdce52319b7c8e0"
  },
  {
    "url": "assets/js/6.dbd1d5bb.js",
    "revision": "004e05fcafbc96bab968c8c630d7aef6"
  },
  {
    "url": "assets/js/7.058f4bd5.js",
    "revision": "f1f06db0208c459ee33f569da4a0f801"
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
    "url": "assets/js/app.afbfd5d1.js",
    "revision": "d7c85dcd849de9258ee822e826b43f20"
  },
  {
    "url": "assets/md-imgs/build_date.png",
    "revision": "289cf0e388c8fb5851e18f7f706ad51e"
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
    "url": "assets/md-imgs/num_sound.png",
    "revision": "e4cb18d6014ad9bdab0363a5643d39ff"
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
    "revision": "5d034ddf2140efa0eac28114e307b951"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "de0b5cfc4e4e0e31667d71e0ad43e70c"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "f0c1974881b80d2dda79a368f8b91248"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Input.html",
    "revision": "81a9f0b926d9cbb51131ebab1d969b61"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Modal.html",
    "revision": "aeb1fe78b8f06656a0998f717f312097"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Popover.html",
    "revision": "4c7b8d24fb67746a6c263a2720f4c416"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Progress.html",
    "revision": "f908b66173a27528a2f6dfe22d1ec185"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Select.html",
    "revision": "b49d9353a62a3257f06b3a8cdb1d1089"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Table.html",
    "revision": "76d20ceb0964dc67ae7d2a9076bc7d64"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Upload.html",
    "revision": "3d7e27c681707c220a2b43e57f9d5fad"
  },
  {
    "url": "notes/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "0ed4ba15792fc47818fb7f49510ef1d4"
  },
  {
    "url": "notes/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "44a932311a8df32a0dd46cc618215620"
  },
  {
    "url": "notes/20-常用方法/KB单位转换.html",
    "revision": "d0d64e765bc77c74cfebc60985bdf37d"
  },
  {
    "url": "notes/20-常用方法/Scroll滚动.html",
    "revision": "9dbf3e3fdb3335e6d3b0404c5b81f259"
  },
  {
    "url": "notes/20-常用方法/URL传参.html",
    "revision": "f066719d8a025ba7fd8af040ce32c024"
  },
  {
    "url": "notes/20-常用方法/一键复制.html",
    "revision": "48dda18cffebeb2d3f32381cbb286678"
  },
  {
    "url": "notes/20-常用方法/小数点后X位.html",
    "revision": "3a284426d0f3790347910a91579173db"
  },
  {
    "url": "notes/20-常用方法/常用正则.html",
    "revision": "69f5ccd4a3ad795d5d5c695cdb5b86c4"
  },
  {
    "url": "notes/20-常用方法/数组均分.html",
    "revision": "be754daaee8dff359fd50b5f76dd922c"
  },
  {
    "url": "notes/20-常用方法/时分秒转换.html",
    "revision": "07d56c604711e1b0ff3b1db30f018412"
  },
  {
    "url": "notes/20-常用方法/浏览器缓存取用.html",
    "revision": "6f0a5be7c223198452d44c313051dfee"
  },
  {
    "url": "notes/20-常用方法/防抖函数.html",
    "revision": "7a7d9dc9a31a599de811a5e79b874bca"
  },
  {
    "url": "notes/20-常用方法/随机数生成.html",
    "revision": "cb0e140ae26966db4498a9bb096936d0"
  },
  {
    "url": "notes/30-React/Error Boundaries错误边界.html",
    "revision": "59631dd86612ab4dfe36796843d28b08"
  },
  {
    "url": "notes/40-JavaScript/onFocus.html",
    "revision": "4dce435d7d63d77151f98c64ce5b7496"
  },
  {
    "url": "notes/40-JavaScript/Reduce方法.html",
    "revision": "1c681ebfacee5151943cc9578915550b"
  },
  {
    "url": "notes/40-JavaScript/window常用方法.html",
    "revision": "8683d6ef9c5533df75e22c78e09eeebb"
  },
  {
    "url": "notes/40-JavaScript/在线读音-百度api示例.html",
    "revision": "28dd27365b2cf64259f586c02e6e961a"
  },
  {
    "url": "notes/40-JavaScript/对数组操作.html",
    "revision": "7786551230bcc0c2de19122f54e858e9"
  },
  {
    "url": "notes/40-JavaScript/屏蔽文字选中.html",
    "revision": "1cf57321c47b6595d9d5bf5a40aff153"
  },
  {
    "url": "notes/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "581cc8c6b30b09c050a82af040ee9bec"
  },
  {
    "url": "notes/40-JavaScript/打包时间显示.html",
    "revision": "c7f000126d1c4c498f5a5f8197d5a582"
  },
  {
    "url": "notes/40-JavaScript/时间小记.html",
    "revision": "cec1a7c754422aff6d3c2d0d28761faa"
  },
  {
    "url": "notes/40-JavaScript/浏览器缓存.html",
    "revision": "06000d629c52759af2ea31646f237b5f"
  },
  {
    "url": "notes/40-JavaScript/输入框千分位数字显示.html",
    "revision": "e1e8fb248fe78869f6501cda3a46a3c8"
  },
  {
    "url": "notes/50-Vuepress/10-注意事项.html",
    "revision": "c719f46a3c7d53eadaf0a20ff7940f9f"
  },
  {
    "url": "notes/50-Vuepress/代码块复制.html",
    "revision": "15e5b7f412a1c114a0d5e2516b64cc0e"
  },
  {
    "url": "notes/50-Vuepress/全局搜索.html",
    "revision": "f932b47290b0a2b20437d9ab9168da58"
  },
  {
    "url": "notes/50-Vuepress/图片放大.html",
    "revision": "4bfc352dea98638f539fd56869259d19"
  },
  {
    "url": "notes/50-Vuepress/样式更改.html",
    "revision": "f4649f3e8a6a62e6b2aa1339ee0d0f49"
  },
  {
    "url": "notes/60-Taro/less_sass插件安装报错问题.html",
    "revision": "1224bf1b13467a33a3f39ccf03b29ec9"
  },
  {
    "url": "notes/60-Taro/React模板生命周期.html",
    "revision": "4402c5897c74f863387dc5e025a39a5c"
  },
  {
    "url": "notes/60-Taro/taro_h5并行开发.html",
    "revision": "76a42ebef3ad333b33aae46e26384408"
  },
  {
    "url": "notes/60-Taro/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "625c135908aefdcb9d97972f2d5b3204"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "8b2bc6e44f381f66bcf81365ac22e80c"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "9ea8dd4130e5ecab0a436d695f31fb6e"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "14fb5d38344850b82dd5fa8f19eb5550"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "741a3250a2de6fee8096b015763a8dfc"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "ba21c1d8ca31cad22aa35643f585eba7"
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
