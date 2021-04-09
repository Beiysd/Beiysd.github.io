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
    "revision": "f14c9d9581a5476af38a22a91e6b58cd"
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
    "url": "assets/js/10.90db6c13.js",
    "revision": "bc3b9a62022296c41becd41493718d23"
  },
  {
    "url": "assets/js/11.ec31117a.js",
    "revision": "3296770abb927819ee615497da22dc40"
  },
  {
    "url": "assets/js/12.92cb7ec3.js",
    "revision": "47dbe7bca3115eebde3bc92260664fab"
  },
  {
    "url": "assets/js/13.19cd2020.js",
    "revision": "706bd3ab630c6c7c0079b6a160cc5e5b"
  },
  {
    "url": "assets/js/14.4a190e48.js",
    "revision": "57e1c7277b44f21c1108bb7db02c38f0"
  },
  {
    "url": "assets/js/15.02bf2f67.js",
    "revision": "034dfc53ce31843a54844100605cc00b"
  },
  {
    "url": "assets/js/16.20d9a5e0.js",
    "revision": "7b97168d0771861275e7900aef27b31f"
  },
  {
    "url": "assets/js/17.f721dd05.js",
    "revision": "46962d1a826801978be50995844b41b6"
  },
  {
    "url": "assets/js/18.39f781af.js",
    "revision": "462f383ac9a7ee552f8393ee31439e2a"
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
    "url": "assets/js/27.77f6a26f.js",
    "revision": "211b37b07100a9e239fe3e44bd334816"
  },
  {
    "url": "assets/js/28.f0ecb635.js",
    "revision": "b16cc9ac5b7c360d78a7a7f3d2ada80b"
  },
  {
    "url": "assets/js/29.0b0faf5f.js",
    "revision": "6a5efd3a77a27e5d15024216a6115cc4"
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
    "url": "assets/js/31.ce66d1aa.js",
    "revision": "42d980c466d19440d60d6bf7fa6df04f"
  },
  {
    "url": "assets/js/32.61c0fff7.js",
    "revision": "431deb07e20beed7863d36326a2d002e"
  },
  {
    "url": "assets/js/33.1874b383.js",
    "revision": "4c27bf9205be76b5fdaf290076a1a57e"
  },
  {
    "url": "assets/js/34.3db3cc87.js",
    "revision": "ffd9da5b3360b349ec3ae0b810695d95"
  },
  {
    "url": "assets/js/35.5b72b7ba.js",
    "revision": "610efe0b67eb110365e43ecbc59cf071"
  },
  {
    "url": "assets/js/36.0f61308f.js",
    "revision": "3ecb5703bac59da86e412d5f6561b4aa"
  },
  {
    "url": "assets/js/37.3a4e8e9a.js",
    "revision": "ef1023d24c2726d9a0a50a1a347e2c76"
  },
  {
    "url": "assets/js/38.232709ce.js",
    "revision": "921166e2c4a87e7ee0aa671d1b2f7bcb"
  },
  {
    "url": "assets/js/39.04de6ad7.js",
    "revision": "c4789ea6e75b0053d98db6080479d13e"
  },
  {
    "url": "assets/js/4.a9367f28.js",
    "revision": "449a5c1981163f2f67ef9baf41da73e3"
  },
  {
    "url": "assets/js/40.3a027363.js",
    "revision": "b85bce81868d15dc2df4242780539546"
  },
  {
    "url": "assets/js/41.05eef7a1.js",
    "revision": "27986514cf09f6a5f1b8e64e87ee4ca7"
  },
  {
    "url": "assets/js/42.91a98fcd.js",
    "revision": "ae725c9cd1508572b82034e441180673"
  },
  {
    "url": "assets/js/43.eca75013.js",
    "revision": "69e7478b72af8bb5e0a9fe817c7c9bc2"
  },
  {
    "url": "assets/js/44.5f495287.js",
    "revision": "edf40559f709750b153ea8aea4242ad1"
  },
  {
    "url": "assets/js/45.4a9ae683.js",
    "revision": "29cead3e75ba6377bcffd90b58ae48b8"
  },
  {
    "url": "assets/js/46.f7690528.js",
    "revision": "ec800976a6315030ffc50cc54654a298"
  },
  {
    "url": "assets/js/47.e370ecb4.js",
    "revision": "b84f0ed18ce8e9924e4f045b8ddd0f65"
  },
  {
    "url": "assets/js/48.bc13529e.js",
    "revision": "42ce74c10bd9e057fd64fb732b61d7d0"
  },
  {
    "url": "assets/js/49.a2e28ad8.js",
    "revision": "0939491b39ad50c4e79375391aa5f18c"
  },
  {
    "url": "assets/js/5.c4ee1a7a.js",
    "revision": "7e916ea96e5e9bcb40b3ca13726cbfd9"
  },
  {
    "url": "assets/js/50.270d5122.js",
    "revision": "4adfeded4090e1f3c445a629a1050f6d"
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
    "url": "assets/js/6.37783f1e.js",
    "revision": "b446cef43f59fdd28975c9c96914b9dc"
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
    "url": "assets/js/9.1bc76c5c.js",
    "revision": "2a5ab169c8a93aa45066b77db00b379d"
  },
  {
    "url": "assets/js/app.21215820.js",
    "revision": "55e89735c633b58bd3fbf821635d994e"
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
    "revision": "603ee0d5c34839adfa752cb61cbacf49"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "0749d1edbb679ea0d47787f4f8f2bd6c"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "625da73a39faf8d4d77906f2fe15a2e3"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Input.html",
    "revision": "c27f3f5a7ba30bae83f7608c88a8082c"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Modal.html",
    "revision": "22574e83beca5134c8a216db24f9f322"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Popover.html",
    "revision": "82c4744b1f9b606277438ca3ea80f06b"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Progress.html",
    "revision": "a55567a6bec7c22c2e5b03397c5d3e3e"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Select.html",
    "revision": "f216ed55263981b0f467afc287262b95"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Table.html",
    "revision": "1d92432b588aa8bc7453dc7b21a7d810"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Upload.html",
    "revision": "2a3e2a354439b009b6b08a1948ddcb17"
  },
  {
    "url": "notes/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "84f596dee11a2d718238d82bb21c0e47"
  },
  {
    "url": "notes/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "8579b1db92d17778b864b9414d3d5fbd"
  },
  {
    "url": "notes/20-常用方法/KB单位转换.html",
    "revision": "03019d0f6b523448064e548c8b5fc1c3"
  },
  {
    "url": "notes/20-常用方法/Scroll滚动.html",
    "revision": "3cb0092401162b4061c74d3a59cbc514"
  },
  {
    "url": "notes/20-常用方法/URL传参.html",
    "revision": "4aac86dd4c05462be86db0e4cca3463b"
  },
  {
    "url": "notes/20-常用方法/一键复制.html",
    "revision": "62fd4689880c7a0ef2953264d7e35f6f"
  },
  {
    "url": "notes/20-常用方法/小数点后X位.html",
    "revision": "17ce96628d8d7958a9a16d874399dcbf"
  },
  {
    "url": "notes/20-常用方法/常用正则.html",
    "revision": "dae5e3c1a9c8fe530dac4747f906b79c"
  },
  {
    "url": "notes/20-常用方法/数组均分.html",
    "revision": "3cbda69e1e1b7fbfe27e8485e9a570d3"
  },
  {
    "url": "notes/20-常用方法/时分秒转换.html",
    "revision": "bebef79fd5bc4e70d838060f63695eff"
  },
  {
    "url": "notes/20-常用方法/浏览器缓存取用.html",
    "revision": "b8f8bd174c91a78c8d3934a108131fa2"
  },
  {
    "url": "notes/20-常用方法/防抖函数.html",
    "revision": "4e22fd8387ee003dd1994b64f3063627"
  },
  {
    "url": "notes/20-常用方法/随机数生成.html",
    "revision": "cd9cf421ad646b2af4eb9e175875cf29"
  },
  {
    "url": "notes/30-React/Error Boundaries错误边界.html",
    "revision": "0e2133b6947a4089d8ce223e3437c5a6"
  },
  {
    "url": "notes/40-JavaScript/onFocus.html",
    "revision": "5c20f0c963b41b7617c1b07e4bc686d2"
  },
  {
    "url": "notes/40-JavaScript/Reduce方法.html",
    "revision": "7a8191218c5881ed08b0382baff03cd1"
  },
  {
    "url": "notes/40-JavaScript/window常用方法.html",
    "revision": "dbe8e9f6cbfddaf7f77ed605ef5925a9"
  },
  {
    "url": "notes/40-JavaScript/对数组操作.html",
    "revision": "9c43b7c99757a6f40680c0b6959413af"
  },
  {
    "url": "notes/40-JavaScript/屏蔽文字选中.html",
    "revision": "394852db2211be3820635429415b1165"
  },
  {
    "url": "notes/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "683658dd36c331e06d9d9bae233546bd"
  },
  {
    "url": "notes/40-JavaScript/浏览器缓存.html",
    "revision": "b1e729419f41a03cc1bf5875980e0794"
  },
  {
    "url": "notes/50-Vuepress/10-注意事项.html",
    "revision": "5691023c0287c25dd17e4da3c23c86ef"
  },
  {
    "url": "notes/50-Vuepress/代码块复制.html",
    "revision": "266a7a9f5ce9b9789f4102add60bfed6"
  },
  {
    "url": "notes/50-Vuepress/全局搜索.html",
    "revision": "1b91c9b5dbb9f8527dd77a310003abef"
  },
  {
    "url": "notes/50-Vuepress/图片放大.html",
    "revision": "b31746306db399cde5118a927b8ea5e6"
  },
  {
    "url": "notes/50-Vuepress/样式更改.html",
    "revision": "c18bfd31523e46de70320686f41d1773"
  },
  {
    "url": "notes/60-Taro/less_sass插件安装报错问题.html",
    "revision": "fb6f986590952d9719d9e6ddfbf68486"
  },
  {
    "url": "notes/60-Taro/React模板生命周期.html",
    "revision": "c3df7948546dda96c26f76d12c03bf77"
  },
  {
    "url": "notes/60-Taro/taro_h5并行开发.html",
    "revision": "e242b25ba249d73689cc8b4242d8e6ee"
  },
  {
    "url": "notes/60-Taro/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "9c7042da936d9fc355f688ac88f849e6"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "4f0904538510b71a2f2b96d9ce5e805b"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "2db9e47e8267738123612306e35708ff"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "748e87fb8f3e319294d71f3463e0f7b5"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "bceeb1bb04612a9a4d2f61242a05f195"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "e66cf128896837876951f111394af478"
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
