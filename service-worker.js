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
    "revision": "a38bb8c3a30a9f204ef78ca69b49d3f7"
  },
  {
    "url": "assets/css/0.styles.5485f58c.css",
    "revision": "97506cca215eec26e3ba92416f17ae4d"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.31e84fcd.js",
    "revision": "252272daf8d9c2c32f56bf9a906fe6ee"
  },
  {
    "url": "assets/js/11.2061e1f1.js",
    "revision": "2d77a9e72ad5b34c5755aaf0ce741edb"
  },
  {
    "url": "assets/js/12.2ea8bdda.js",
    "revision": "1cf4aa11f47178e38dcb24b1c9e4192c"
  },
  {
    "url": "assets/js/13.8a42d98c.js",
    "revision": "f3f5376c996c57f08a5f603bcba434f0"
  },
  {
    "url": "assets/js/14.ecf56570.js",
    "revision": "06aced5839f871493686c86762412ea2"
  },
  {
    "url": "assets/js/15.1d5fc88e.js",
    "revision": "1052976e18205a906d391a4330929e13"
  },
  {
    "url": "assets/js/16.c2521c87.js",
    "revision": "30f81ce3b840427f255344d66b7709c4"
  },
  {
    "url": "assets/js/17.420f055c.js",
    "revision": "a5127d9bacdc206beb65c9189d2fc18c"
  },
  {
    "url": "assets/js/18.d7c1c5c5.js",
    "revision": "a7547a8e1fe7c7b5bf110e6c97deaf2b"
  },
  {
    "url": "assets/js/19.c08ccd96.js",
    "revision": "cba95a2f4e28e73abf07aac61a044848"
  },
  {
    "url": "assets/js/2.cef30ee9.js",
    "revision": "41e1c3a6236876d671a71035f50476be"
  },
  {
    "url": "assets/js/20.c6e0581d.js",
    "revision": "0450935a4cb0e5fe233215be813eca2e"
  },
  {
    "url": "assets/js/21.3f89d4fa.js",
    "revision": "75a06b0055a4750c7127c9167ace0748"
  },
  {
    "url": "assets/js/22.75087a86.js",
    "revision": "dbf9bea00cb1ccaf5489fc31f0b65042"
  },
  {
    "url": "assets/js/23.4e9f1d1f.js",
    "revision": "d3d6204e58882c7eb70b0d7ca8a32e80"
  },
  {
    "url": "assets/js/24.1d60ad32.js",
    "revision": "50a1430a5d25ce5e4f75bf591ede254d"
  },
  {
    "url": "assets/js/25.c6d4bab8.js",
    "revision": "1355a1ed449f325d7c2a0e65d4a98c80"
  },
  {
    "url": "assets/js/26.14abbc50.js",
    "revision": "b9afd6526c4890b17219486e239504e9"
  },
  {
    "url": "assets/js/27.69d2c790.js",
    "revision": "9a12ea55b00d890837b58e5493d51d17"
  },
  {
    "url": "assets/js/28.28c2e8bb.js",
    "revision": "13c3276aae26facc60decf408d06709e"
  },
  {
    "url": "assets/js/29.799c040b.js",
    "revision": "273f7beb7d6e16cb100925906d9a749e"
  },
  {
    "url": "assets/js/3.e01f86bc.js",
    "revision": "f39ff382158db5230221855f5102b02a"
  },
  {
    "url": "assets/js/30.4b04ab52.js",
    "revision": "90faca8feaaee50fdb6b7b827178b173"
  },
  {
    "url": "assets/js/31.76b13060.js",
    "revision": "9aa5b85007482192c93f4f4bdd400826"
  },
  {
    "url": "assets/js/32.98d1ca20.js",
    "revision": "99c601ecd58459a2cebbff0e3e662197"
  },
  {
    "url": "assets/js/33.34d9dfe3.js",
    "revision": "59d8973c199c3c6f879499a76793143c"
  },
  {
    "url": "assets/js/34.73176463.js",
    "revision": "3dc8fb45bd1cf19fae550455b66d3879"
  },
  {
    "url": "assets/js/35.00b1a363.js",
    "revision": "f82113a01dd622a5899cebf35f48a1e0"
  },
  {
    "url": "assets/js/36.e9c8f3d8.js",
    "revision": "d9161b74cde798aa0ade8f1ae9d63ea4"
  },
  {
    "url": "assets/js/37.8074f2f4.js",
    "revision": "282c179450b0314cc4b6c37eaecce05c"
  },
  {
    "url": "assets/js/38.cc4ed37d.js",
    "revision": "4d6195ef8cbb680350586f21f8b306e5"
  },
  {
    "url": "assets/js/39.1dab095b.js",
    "revision": "174a5519e7c27cede63f5678dc1fb8b7"
  },
  {
    "url": "assets/js/4.ce3248de.js",
    "revision": "60642e20362f140bf3d4d1a305d854be"
  },
  {
    "url": "assets/js/40.542873db.js",
    "revision": "ebdf21b37a354466ce08e3a5830ed5d0"
  },
  {
    "url": "assets/js/41.bfb134c3.js",
    "revision": "82808ef2d7f17be9ca08c5293bc9eaf0"
  },
  {
    "url": "assets/js/42.1cebc37a.js",
    "revision": "b3addf0838de6cabbe792e1f525978a5"
  },
  {
    "url": "assets/js/43.51f7951e.js",
    "revision": "0af215668fafcd0f68c62947b77f4535"
  },
  {
    "url": "assets/js/44.396757c2.js",
    "revision": "05cff6a4fb7d625c7639febd6ee746d4"
  },
  {
    "url": "assets/js/45.3d53d051.js",
    "revision": "98fbeb4d7cad83db1b9176fb7a7b4440"
  },
  {
    "url": "assets/js/46.fd6f3720.js",
    "revision": "3dac1bbb75b57f2de29cb4d118949f6f"
  },
  {
    "url": "assets/js/47.bea4d5d5.js",
    "revision": "0f3fcca6ac5fc9e23e96aec9ab42d266"
  },
  {
    "url": "assets/js/48.7138a44f.js",
    "revision": "4bc61037213e7885f8aa67b5d63c7cdc"
  },
  {
    "url": "assets/js/49.6df191f1.js",
    "revision": "1920adbbcd37cb79d01d56a69ca0a655"
  },
  {
    "url": "assets/js/5.ead0f40a.js",
    "revision": "0e4c2938be65aba98cfe0416794bcc92"
  },
  {
    "url": "assets/js/50.786928ef.js",
    "revision": "fbc4b8e4be890e38e5471f928f2c47f6"
  },
  {
    "url": "assets/js/51.ef024b26.js",
    "revision": "f0c8f1efc968ffb5089ca30a092fada9"
  },
  {
    "url": "assets/js/52.55980619.js",
    "revision": "d5ae05937d805a8f38df1eeb4201691a"
  },
  {
    "url": "assets/js/53.4843ae9f.js",
    "revision": "0680ff9c43d473844a14cb88553eef5d"
  },
  {
    "url": "assets/js/54.79d8c3bb.js",
    "revision": "8aeef5b75d86579196fe297571baa967"
  },
  {
    "url": "assets/js/55.3f642a61.js",
    "revision": "972c933cefe32152559e70fb70ad651a"
  },
  {
    "url": "assets/js/56.4a2c49b3.js",
    "revision": "d413b26c0f1079bafd7c7ab256de43b5"
  },
  {
    "url": "assets/js/57.ceb3d7cd.js",
    "revision": "d227e8efcb311e7993cf0866e30b7e66"
  },
  {
    "url": "assets/js/58.4b5ebabc.js",
    "revision": "2bad9b753c96303498b161c3f13a4f5d"
  },
  {
    "url": "assets/js/59.b6d6d3ab.js",
    "revision": "bba48c672d885313dc6de38babe7ca11"
  },
  {
    "url": "assets/js/6.de2a4a9e.js",
    "revision": "188a3ba8083300ab1cb01c67fd3ae6da"
  },
  {
    "url": "assets/js/60.1e833549.js",
    "revision": "1c80c1af1f7388e7a0daf66ef4a373d0"
  },
  {
    "url": "assets/js/61.51642859.js",
    "revision": "9a0f048812816f6f3cd66c4e556f4319"
  },
  {
    "url": "assets/js/62.0834e972.js",
    "revision": "47c8677fa32180e3cc05a1e0b8765c9b"
  },
  {
    "url": "assets/js/63.b1a4f26a.js",
    "revision": "8564fd050fe924507216ae9e19362d00"
  },
  {
    "url": "assets/js/7.05ec2057.js",
    "revision": "dd291180b052356714087865a66b687f"
  },
  {
    "url": "assets/js/8.ede62e57.js",
    "revision": "c0a5b19e6bfef38a36b5ba4803296e62"
  },
  {
    "url": "assets/js/9.4162244c.js",
    "revision": "364f3196fdca691a4d30ffedf2530011"
  },
  {
    "url": "assets/js/app.d24de398.js",
    "revision": "2056d5e2fa771422a2c32df1d86d2e61"
  },
  {
    "url": "assets/logo/pkp.png",
    "revision": "446decb9d6316fcd0439f100d49c86ef"
  },
  {
    "url": "assets/logo/pkq.png",
    "revision": "4f158912c445dbf878d85f9e6746a198"
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
    "url": "assets/md-imgs/svg/a-link.svg",
    "revision": "d5285c6ce16aa5c736585b2a38dc5b53"
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
    "url": "index.html",
    "revision": "754f322fec8ce7bca30e374e022ec67b"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "ee68046c3665f592286388c2943f4aa8"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "1443d6d107f0a3c56dbccdedc7d4f247"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Input.html",
    "revision": "c55dac31e7b7564031a000d9feba96ad"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Modal.html",
    "revision": "e9423631c49d49c21dbd3e96fd16cd52"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Popover.html",
    "revision": "8c6cc987b3eda4023aaedeac036d4a57"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Progress.html",
    "revision": "af818065c8022cadfaf911bd21013a27"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Select.html",
    "revision": "a1c0470b2b00ae220fd801279a923a89"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Table.html",
    "revision": "dcd6103d5080bd804032d4b5b1b808c0"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Upload.html",
    "revision": "5d5d86f5e35556b1104c57bc94415929"
  },
  {
    "url": "notes/10-前端/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "4df7986314c6f7f558666ad717b72c17"
  },
  {
    "url": "notes/10-前端/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "c14bd5bae1652250895cc222e75992a7"
  },
  {
    "url": "notes/10-前端/20-常用方法/KB单位转换.html",
    "revision": "044c0b9041410d467cd626cdae9e3838"
  },
  {
    "url": "notes/10-前端/20-常用方法/Scroll滚动.html",
    "revision": "41013372b96f7356755d198561e5909b"
  },
  {
    "url": "notes/10-前端/20-常用方法/URL传参.html",
    "revision": "fe86c68263ce9ab506465f7edb3d7ccd"
  },
  {
    "url": "notes/10-前端/20-常用方法/一键复制.html",
    "revision": "48626b44d0cd8c17e3f221724041b9dd"
  },
  {
    "url": "notes/10-前端/20-常用方法/小数点后X位.html",
    "revision": "206cf3a707145674b3691646dcfcbab9"
  },
  {
    "url": "notes/10-前端/20-常用方法/常用正则.html",
    "revision": "baee5ad89b1e4c4468c117f34135fab7"
  },
  {
    "url": "notes/10-前端/20-常用方法/数组均分.html",
    "revision": "fdbcd6e6b8fdfdcfff4411ab5906bbfc"
  },
  {
    "url": "notes/10-前端/20-常用方法/时分秒转换.html",
    "revision": "1eb3689cf375c149f8996f821bf378fc"
  },
  {
    "url": "notes/10-前端/20-常用方法/浏览器缓存取用.html",
    "revision": "9ab3797379ca561c7179e7496d7e4997"
  },
  {
    "url": "notes/10-前端/20-常用方法/防抖函数.html",
    "revision": "64a7ffa97b8e3bb24f258e81d498005c"
  },
  {
    "url": "notes/10-前端/20-常用方法/随机数生成.html",
    "revision": "a9fe1f7627e95572f0577a81196ceae2"
  },
  {
    "url": "notes/10-前端/30-React/Error Boundaries错误边界.html",
    "revision": "c4c7c935b35d9affec918713ae42e084"
  },
  {
    "url": "notes/10-前端/40-JavaScript/onFocus.html",
    "revision": "b906da2d8bf9433bebad743d7fe2e13c"
  },
  {
    "url": "notes/10-前端/40-JavaScript/Reduce方法.html",
    "revision": "e211b3e5290f1f6aa675f0f4182c911a"
  },
  {
    "url": "notes/10-前端/40-JavaScript/window常用方法.html",
    "revision": "2919c4dd53025258df38f9d3faa15941"
  },
  {
    "url": "notes/10-前端/40-JavaScript/在线读音-百度api示例.html",
    "revision": "0ceab96730f81bb4973dcefe0f83bd60"
  },
  {
    "url": "notes/10-前端/40-JavaScript/对数组操作.html",
    "revision": "e0cb7dcf5b698f211887e772975dfc49"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽文字选中.html",
    "revision": "8e97fee954314b14b189c19aed970fe8"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "f6b0a000d4b635d9c9e535bd8c583f2d"
  },
  {
    "url": "notes/10-前端/40-JavaScript/打包时间显示.html",
    "revision": "04ced803dcad8409375357d470b4c166"
  },
  {
    "url": "notes/10-前端/40-JavaScript/时间小记.html",
    "revision": "a5107073ed8813874f408bf071be5fe3"
  },
  {
    "url": "notes/10-前端/40-JavaScript/浏览器缓存.html",
    "revision": "ab5134220072702474a9aa060bbe9db2"
  },
  {
    "url": "notes/10-前端/40-JavaScript/输入框千分位数字显示.html",
    "revision": "f569b402a4dd6014427037837dbb3031"
  },
  {
    "url": "notes/10-前端/50-Vuepress/10-注意事项.html",
    "revision": "833c1f1faea42b48cf7d8fcfde2f89a8"
  },
  {
    "url": "notes/10-前端/50-Vuepress/代码块复制.html",
    "revision": "1279c6c9901a60710268bd871c91439e"
  },
  {
    "url": "notes/10-前端/50-Vuepress/全局搜索.html",
    "revision": "cf6d9cefc37e886b410e20207ffba0db"
  },
  {
    "url": "notes/10-前端/50-Vuepress/图片放大.html",
    "revision": "5c2d53de9ecde743afaab8190384eacf"
  },
  {
    "url": "notes/10-前端/50-Vuepress/样式更改.html",
    "revision": "4ed847e8b2955d0e91b7f2107f16f994"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/less_sass插件安装报错问题.html",
    "revision": "e3d262e639ec8dedd7bc1f303aaf5444"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/React模板生命周期.html",
    "revision": "0e7d34651bba2e97d7ffe762a22ca0b0"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro_h5并行开发.html",
    "revision": "b7eeecef07f26a410da9276904b03744"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "e9cdf6711e6db56b6e4cfed9519658a3"
  },
  {
    "url": "notes/20-后端/10-Nginx/1-Nginx跨域处理.html",
    "revision": "13bb97992d2e8838e91fa6a897ca0a11"
  },
  {
    "url": "notes/66-随笔/10-阿雅/001-森林.html",
    "revision": "e8184bbe6571720950344fa58e37b89d"
  },
  {
    "url": "notes/66-随笔/10-阿雅/002-村庄.html",
    "revision": "86d604717df9c7d0eea4d6233e6a0351"
  },
  {
    "url": "notes/66-随笔/20-百里/001-深坑.html",
    "revision": "23a5447d33366b0b8566755d336f65c5"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "41df937e6c39da7a5fb09947b7f66eec"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "13053518b6718ef5374e350775a55d2d"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "dd51925a58299a8266b4527748662a2b"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "5a1268bd08532c4d74e4d27709c746d0"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "566ec0115a69b2de6e7b4c4e52afdcb3"
  },
  {
    "url": "notes/test.html",
    "revision": "a79c6a66e0917c7b5d77204fc376eca2"
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
