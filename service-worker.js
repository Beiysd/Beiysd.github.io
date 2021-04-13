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
    "revision": "892332b0a582f813cba8b3d4dd2620ad"
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
    "url": "assets/js/10.f57d8f4a.js",
    "revision": "ae982f94a435b69c6c1059a3b1db15e9"
  },
  {
    "url": "assets/js/11.8cafa128.js",
    "revision": "776cf7538a2f6cfa088c406098a12a15"
  },
  {
    "url": "assets/js/12.8f8f7ace.js",
    "revision": "d7266347ee97849cfcd9772d1d3ca922"
  },
  {
    "url": "assets/js/13.c13bf88f.js",
    "revision": "47110ac39ec0cb48a19550726a21800b"
  },
  {
    "url": "assets/js/14.2ccf7a9d.js",
    "revision": "0532f8600b49ae702757c63747243395"
  },
  {
    "url": "assets/js/15.04285de6.js",
    "revision": "1b575ee8d5e6cc23de43aa8266b028e2"
  },
  {
    "url": "assets/js/16.9b3f57b0.js",
    "revision": "8766e4c1b7dd718d28d89ecfc16b6275"
  },
  {
    "url": "assets/js/17.e826f7fe.js",
    "revision": "13dc8aaffb1be21d1aa2639769a5febd"
  },
  {
    "url": "assets/js/18.4658695e.js",
    "revision": "ef21e37a6176cc4e42fc4559a088ab49"
  },
  {
    "url": "assets/js/19.6fb336f3.js",
    "revision": "57198ae6053c48ee7bd039b579b0f786"
  },
  {
    "url": "assets/js/2.82eba915.js",
    "revision": "e7d71d053b2a51a0ca814035c2e04290"
  },
  {
    "url": "assets/js/20.e912badf.js",
    "revision": "b036641f94c99988694018b49db26e3f"
  },
  {
    "url": "assets/js/21.e3498787.js",
    "revision": "e897f44f65a3829a27f3119f5c3a9582"
  },
  {
    "url": "assets/js/22.a67664b8.js",
    "revision": "dcf156159b6fe3107b51c71a1969f960"
  },
  {
    "url": "assets/js/23.45154d7b.js",
    "revision": "4c0f1b56bef4bc0cabeb948f8fc1be06"
  },
  {
    "url": "assets/js/24.438c5377.js",
    "revision": "8b9d19a5b8c96e6cdc1030231fe95b44"
  },
  {
    "url": "assets/js/25.b2c50b05.js",
    "revision": "9ccd4a3a1693e2b9d634d664947398ae"
  },
  {
    "url": "assets/js/26.733c1b6f.js",
    "revision": "a12cef6398e5897815122ebcfee78764"
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
    "url": "assets/js/29.0b0faf5f.js",
    "revision": "6a5efd3a77a27e5d15024216a6115cc4"
  },
  {
    "url": "assets/js/3.443132dc.js",
    "revision": "bbd74e8549c4b4fd54900cd19abe9956"
  },
  {
    "url": "assets/js/30.2b012730.js",
    "revision": "abb34d250ab8a34d3051d19f281da75d"
  },
  {
    "url": "assets/js/31.39afe6cf.js",
    "revision": "3e1116fa7f685ce20ee5be583dff5e31"
  },
  {
    "url": "assets/js/32.7e24a64e.js",
    "revision": "60a1b5ea9bbd4bdca86946eac52fc1d2"
  },
  {
    "url": "assets/js/33.5fde3ff8.js",
    "revision": "01f0270d10bcc323bc05364997adb553"
  },
  {
    "url": "assets/js/34.99859035.js",
    "revision": "c445bd912f8dd2f1557bafd6730a96b0"
  },
  {
    "url": "assets/js/35.1513b498.js",
    "revision": "4f17dbbe8f704ffbb837cec7ddfb113a"
  },
  {
    "url": "assets/js/36.8e6e07ec.js",
    "revision": "50f589ad07f170ad31a6a9ec511a5683"
  },
  {
    "url": "assets/js/37.ffb0a450.js",
    "revision": "5db0d7f6148cb529d894c52bec4148d0"
  },
  {
    "url": "assets/js/38.b6debe5a.js",
    "revision": "9f979553895936c32f52618ae71ea51b"
  },
  {
    "url": "assets/js/39.d42aa9fa.js",
    "revision": "ee219e62f0a3f5cfe167924b23aeeef0"
  },
  {
    "url": "assets/js/4.5a71dc91.js",
    "revision": "c7ef9619be3d6b13b95a2841c6f4b540"
  },
  {
    "url": "assets/js/40.8d1c06fd.js",
    "revision": "7382ab7d1dd5e7ca6b47be91091e629e"
  },
  {
    "url": "assets/js/41.09120591.js",
    "revision": "32f1c560b88ebdaee0e7b3e253394952"
  },
  {
    "url": "assets/js/42.34191809.js",
    "revision": "6c42b16c2c1f8b96506fe35f4a5fd913"
  },
  {
    "url": "assets/js/43.9fadda5a.js",
    "revision": "3adc0a90ab3ec2fbf3ed8e8aa5eebf33"
  },
  {
    "url": "assets/js/44.3eb5a336.js",
    "revision": "d28c5e85eb79db8ce7ad04a34639bf89"
  },
  {
    "url": "assets/js/45.a84a3459.js",
    "revision": "cc955ffc4e5254eb67a96b6bada8fae3"
  },
  {
    "url": "assets/js/46.4e8777f8.js",
    "revision": "6f3f9dd61e0f2d47c48675a6521908b8"
  },
  {
    "url": "assets/js/47.a0b002dc.js",
    "revision": "6f170c51ae97993d6bf1d151968851b3"
  },
  {
    "url": "assets/js/48.ac84159b.js",
    "revision": "e21dcbd432e9886b1520e87568ea6ce4"
  },
  {
    "url": "assets/js/49.deab2b6f.js",
    "revision": "3973e87198753a074c216f29152a1b9c"
  },
  {
    "url": "assets/js/5.c4ee1a7a.js",
    "revision": "7e916ea96e5e9bcb40b3ca13726cbfd9"
  },
  {
    "url": "assets/js/50.6b9b9d92.js",
    "revision": "c0555096369a51cb9525ede665ab2a2d"
  },
  {
    "url": "assets/js/51.ea70bbe7.js",
    "revision": "98e70b399c8508b587e154856890aa64"
  },
  {
    "url": "assets/js/52.fdd93995.js",
    "revision": "65758bc9e3fce7dc51e021505846151b"
  },
  {
    "url": "assets/js/53.f3449384.js",
    "revision": "8546e8bd7ee8f98198e838507a162bcf"
  },
  {
    "url": "assets/js/54.f8c1ae80.js",
    "revision": "f5742914c3361b5c507df71ccadd726d"
  },
  {
    "url": "assets/js/55.b063724a.js",
    "revision": "6b00710f01278a4b8410c1bfec88ebfa"
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
    "url": "assets/js/8.1ca4c451.js",
    "revision": "b1bd4299ed1d3f5e857258026330ef3a"
  },
  {
    "url": "assets/js/9.1bc76c5c.js",
    "revision": "2a5ab169c8a93aa45066b77db00b379d"
  },
  {
    "url": "assets/js/app.b33a2f83.js",
    "revision": "2e04363a9da0e288cd3365ae0b0fa5d8"
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
    "revision": "eed18cb88cb02d35b39ea3d01b3143b1"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "765ce1b6a7b06e3fc6189d0ade5546d5"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "abfffb1987e74b8eebb0362b370b36fd"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Input.html",
    "revision": "a95606444b85536904f20c004ed6e05c"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Modal.html",
    "revision": "1edf5e14e214227835a2c3ef1b7eca3d"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Popover.html",
    "revision": "1b6fec02c0cb6f70528d7dc1f01b8da3"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Progress.html",
    "revision": "79084fd56406cfe783305f1801c90122"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Select.html",
    "revision": "e37428ba8555da64b447c35a68317ad5"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Table.html",
    "revision": "195e39e274748e020ec6967fe3de3d71"
  },
  {
    "url": "notes/10-CSS/10-Antd3.x/Upload.html",
    "revision": "602212fdf993868363e6439cc093ceda"
  },
  {
    "url": "notes/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "4b8141e5e3bcf410b3de123a9448e8d8"
  },
  {
    "url": "notes/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "e7ec9c04d3bffce8f6bc40aa41fec4db"
  },
  {
    "url": "notes/20-常用方法/KB单位转换.html",
    "revision": "fea285fefbe0aae4ef87f4e5fd2cf31a"
  },
  {
    "url": "notes/20-常用方法/Scroll滚动.html",
    "revision": "3ca730ef8c4a856365bd4b4b085d4ce7"
  },
  {
    "url": "notes/20-常用方法/URL传参.html",
    "revision": "76bf6cb9160c44c02e8e539fe27ca5f5"
  },
  {
    "url": "notes/20-常用方法/一键复制.html",
    "revision": "abbeff7c6130bf314cbf9adb5071c711"
  },
  {
    "url": "notes/20-常用方法/小数点后X位.html",
    "revision": "42f9b78d8ebc7e3bca7edd485beb03a6"
  },
  {
    "url": "notes/20-常用方法/常用正则.html",
    "revision": "65542a3f13126a1ca2449fc204b4de59"
  },
  {
    "url": "notes/20-常用方法/数组均分.html",
    "revision": "02cdbd5177f6fde60053d8b80160490c"
  },
  {
    "url": "notes/20-常用方法/时分秒转换.html",
    "revision": "750f921f9ff3bd29941582a80bf6e9a3"
  },
  {
    "url": "notes/20-常用方法/浏览器缓存取用.html",
    "revision": "e82381320d7c01e0d3bc7ea7f00c98be"
  },
  {
    "url": "notes/20-常用方法/防抖函数.html",
    "revision": "83306429793ce77acc047ca13a622e5a"
  },
  {
    "url": "notes/20-常用方法/随机数生成.html",
    "revision": "4c5d786688b3dc167d14b944f5dac3f8"
  },
  {
    "url": "notes/30-React/Error Boundaries错误边界.html",
    "revision": "8f5e22c303b58d7597139ca5ace565c1"
  },
  {
    "url": "notes/40-JavaScript/onFocus.html",
    "revision": "7e3020bcb560ac64322fac2d13dfc90a"
  },
  {
    "url": "notes/40-JavaScript/Reduce方法.html",
    "revision": "30c0649c8e0d7ff7c56eb4a65f494cb9"
  },
  {
    "url": "notes/40-JavaScript/window常用方法.html",
    "revision": "c61b318e20738eda27fe45736db176e9"
  },
  {
    "url": "notes/40-JavaScript/在线读音-百度api示例.html",
    "revision": "16b934922fac0ca909e71340dca5beb7"
  },
  {
    "url": "notes/40-JavaScript/对数组操作.html",
    "revision": "e5a9db962f09dcf09565b5e43abf879e"
  },
  {
    "url": "notes/40-JavaScript/屏蔽文字选中.html",
    "revision": "afa7a608830797ad1dd6fc53fede1c30"
  },
  {
    "url": "notes/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "b8ca2b25dc9357b65a347f51e0abf34e"
  },
  {
    "url": "notes/40-JavaScript/打包时间显示.html",
    "revision": "ad10dd3f3d21f484245340317313ac41"
  },
  {
    "url": "notes/40-JavaScript/浏览器缓存.html",
    "revision": "102aa5490746dd4e1f74776f7c5b71a2"
  },
  {
    "url": "notes/50-Vuepress/10-注意事项.html",
    "revision": "a8ba72a2a5612d9a6d725512804eb174"
  },
  {
    "url": "notes/50-Vuepress/代码块复制.html",
    "revision": "b627537340d729e2d03f124dd8d382e2"
  },
  {
    "url": "notes/50-Vuepress/全局搜索.html",
    "revision": "0babf771a9c7d9c0c58cebc53c55e960"
  },
  {
    "url": "notes/50-Vuepress/图片放大.html",
    "revision": "764f501b2b99e97a30e339ef760aa520"
  },
  {
    "url": "notes/50-Vuepress/样式更改.html",
    "revision": "e1e5661a976375c76c578f226138b0e0"
  },
  {
    "url": "notes/60-Taro/less_sass插件安装报错问题.html",
    "revision": "6605eb90f200683f4b55c0fe8a8985f6"
  },
  {
    "url": "notes/60-Taro/React模板生命周期.html",
    "revision": "1ab8c456d7f3414f45e16a8d20c93762"
  },
  {
    "url": "notes/60-Taro/taro_h5并行开发.html",
    "revision": "3e831ed35321674ec8862a17c22ffe2a"
  },
  {
    "url": "notes/60-Taro/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "4d7e37aa04786a3d78817224864daee0"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "47b9474a782ef9f61aaa931a14ffa2fd"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "6c6167356ea15b213c90b6c0fef16ffb"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "0d160841c06f71eb171b456268d21277"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "a851c4677eea73254db893d4bc7dbcf7"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "e59ad229a1b1fa35c5b5009576b24aed"
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
