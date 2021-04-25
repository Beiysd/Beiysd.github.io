(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{555:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tongji.baidu.com/web/welcome/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度统计"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tongji.baidu.com/api/manual/",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度统计-用户手册"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这里有各式各样的请求参数和示例，总能找到你想要的返回数据")])]),t._v(" "),a("h2",{attrs:{id:"_1-注册并登录百度统计账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-注册并登录百度统计账号"}},[t._v("#")]),t._v(" 1.注册并登录百度统计账号")]),t._v(" "),a("blockquote",[a("p",[t._v("注意 这里有两种账号，本文介绍的是百度普通版统计，而非商用版")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/baidu/baidu_tongji_01.png",alt:"登录"}})]),t._v(" "),a("h2",{attrs:{id:"_2-新增网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-新增网站"}},[t._v("#")]),t._v(" 2.新增网站")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/baidu/baidu_tongji_02.png",alt:"新增网站01"}})]),t._v(" "),a("blockquote",[a("p",[t._v("通常情况下网站域名和网站首页一致\n网站类型根据自己情况填写")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/baidu/baidu_tongji_03.png",alt:"新增网站02"}})]),t._v(" "),a("h2",{attrs:{id:"_3-复制代码到-config-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-复制代码到-config-配置文件"}},[t._v("#")]),t._v(" 3.复制代码到 config 配置文件")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("如图所示，复制统计代码")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/baidu/baidu_tongji_04_1.png",alt:"复制代码"}})]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("配置 config 文件")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("因为 vuepress 是静态渲染服务，所以更换路由不会刷新页面，所以要进行第三步配置，监听路由变化，反馈到百度统计")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/baidu/baidu_tongji_04_2.png",alt:"复制代码"}})]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("添加 config 同级文件：enhanceApp.js，添加如下代码")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由切换事件处理")]),t._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// console.log("切换路由", to.fullPath, from.fullPath);')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//触发百度的pv统计")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" _hmt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        _hmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_trackPageview"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// console.log("上报百度统计", to.fullPath);')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[a("img",{attrs:{src:"/assets/md-imgs/baidu/baidu_tongji_04_3.png",alt:"复制代码"}})]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"4"}},[a("li",[t._v("效果")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/baidu/baidu_tongji_04.png",alt:"复制代码"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);