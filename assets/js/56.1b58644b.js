(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{559:function(t,a,s){"use strict";s.r(a);var e=s(30),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-场景"}},[t._v("#")]),t._v(" 1.场景：")]),t._v(" "),s("p",[t._v("小程序开发，外层只套了个 taro 外壳，内部所有功能都在 H5 页面实现")]),t._v(" "),s("h2",{attrs:{id:"_2-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录"}},[t._v("#")]),t._v(" 2.目录")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/md-imgs/taro_h5_01.png",alt:"目录"}})]),t._v(" "),s("h2",{attrs:{id:"_3-逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-逻辑"}},[t._v("#")]),t._v(" 3.逻辑")]),t._v(" "),s("p",[t._v("taro 中首页为空页面，指向另一 taro 文件(home)，在 home 中使用 webview 跳转 H5 页面，这样一来，小程序顶部就会出现返回按钮")]),t._v(" "),s("h2",{attrs:{id:"_4-流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-流程"}},[t._v("#")]),t._v(" 4.流程")]),t._v(" "),s("p",[t._v("home/index.jsx 为小程序进入首页，在此处判断 token 是否存在，有则使用 webview，展示 H5 页面， 没有则进入 Login/index.jsx 登录页")]),t._v(" "),s("p",[t._v("登录成功，添加 token 到缓存，则使用 Taro.navigateBack()返回上一页，在 home/index.jsx 页使用 webview，展示 H5 页面")]),t._v(" "),s("p",[s("img",{attrs:{src:"/assets/md-imgs/taro_h5_02.png",alt:"流程图"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);