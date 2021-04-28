(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{562:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-云服务器安装图形界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-云服务器安装图形界面"}},[t._v("#")]),t._v(" 1.云服务器安装图形界面")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("服务器操作系统：CentOS 7.5 64 位")])]),t._v(" "),a("p",[t._v("此处使用的是"),a("a",{attrs:{href:"https://baike.baidu.com/item/Gnome/5105879",target:"_blank",rel:"noopener noreferrer"}},[t._v("GNOME"),a("OutboundLink")],1),t._v("极简桌面")]),t._v(" "),a("h3",{attrs:{id:"_1-1-效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-效果"}},[t._v("#")]),t._v(" 1.1 效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/server/linux_01.png",alt:"效果"}})]),t._v(" "),a("h3",{attrs:{id:"_1-2-操作命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-操作命令"}},[t._v("#")]),t._v(" 1.2 操作命令")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1 安装 GNOME 桌面和图形管理工具")]),t._v(" "),a("blockquote",[a("p",[t._v("期间会有一次确认中断，输入 y，回车就好")])])])]),t._v(" "),a("div",{staticClass:"language-Java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("yum groupinstall "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GNOME Desktop"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Graphical Administration Tools"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("2 默认登录模式")])]),t._v(" "),a("div",{staticClass:"language-Java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("systemctl set"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" multi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置成命令模式")]),t._v("\nsystemctl set"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" graphical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置成图形模式")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[t._v("3 重启服务器，使用 VNC 模式登录，即可看到效果 1.1")])]),t._v(" "),a("h2",{attrs:{id:"_2-命令行解压文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令行解压文件"}},[t._v("#")]),t._v(" 2.命令行解压文件")]),t._v(" "),a("h3",{attrs:{id:"_2-1-解压文件到当前目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-解压文件到当前目录"}},[t._v("#")]),t._v(" 2.1 解压文件到当前目录")]),t._v(" "),a("div",{staticClass:"language-Shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" xxx.zip\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-2-解压文件到指定目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-解压文件到指定目录"}},[t._v("#")]),t._v(" 2.2 解压文件到指定目录")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("若文件夹不存在，则会新建该文件夹，并在其内部解压文件")])]),t._v(" "),a("div",{staticClass:"language-Shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" xxx.zip -d /var/vuepress/xxx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3-命令行创建文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令行创建文件"}},[t._v("#")]),t._v(" 3.命令行创建文件")]),t._v(" "),a("div",{staticClass:"language-Shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" xxx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-vim-命令行进入编辑文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vim-命令行进入编辑文件"}},[t._v("#")]),t._v(" 4.vim 命令行进入编辑文件")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("i/insert 键 直接进入编辑模式")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/server/linux_04.png",alt:"进入编辑模式"}})]),t._v(" "),a("ul",[a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("esc 退出编辑模式")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("shift + ：输入保存模式，并退出该文件")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/assets/md-imgs/server/linux_05.png",alt:"进入编辑模式"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("简单说明")])])]),t._v(" "),a("tr",[a("td",[t._v("w")]),t._v(" "),a("td",[t._v("保存编辑后的文件内容，但不退出vim编辑器。这个命令的作用是把内存缓冲区中的数据写到启动vim时指定的文件中。")])]),t._v(" "),a("tr",[a("td",[t._v("w!")]),t._v(" "),a("td",[t._v("强制写文件，即强制覆盖原有文件。如果原有文件的访问权限不允许写入文件，例如，原有的文件为只读文件，则可使用这个命令强制写入。但是，这种命令用法仅当用户是文件的属主时才适用，而超级用户则不受此限制。")])]),t._v(" "),a("tr",[a("td",[t._v("wq")]),t._v(" "),a("td",[t._v("保存文件内容后退出vim编辑器。这个命令的作用是把内存缓冲区中的数据写到启动vim时指定的文件中，然后退出vim编辑器。另外一种替代的方法是用ZZ命令。")])]),t._v(" "),a("tr",[a("td",[t._v("wq!")]),t._v(" "),a("td",[t._v("强制保存文件内容后退出vim编辑器。这个命令的作用是把内存缓冲区中的数据强制写到启动vim时指定的文件中，然后退出vim编辑器。")])]),t._v(" "),a("tr",[a("td",[t._v("q")]),t._v(" "),a("td",[t._v("在未做任何编辑处理而准备退出vim时，可以使用此命令。如果已做过编辑处理，则vim不允许用户使用“:q”命令退出，同时还会输出下列警告信息：")])]),t._v(" "),a("tr",[a("td",[t._v("q!")]),t._v(" "),a("td",[t._v("\n强制退出vim编辑器，放弃编辑处理的结果。如果确实不需要保存修改后的文件内容，可输入“:q!”命令，强行退出vim编辑器。")])]),t._v(" "),a("tr",[a("td",[t._v("w filename")]),t._v(" "),a("td",[t._v("把编辑处理后的结果写到指定的文件中保存")])]),t._v(" "),a("tr",[a("td",[t._v("w! filename")]),t._v(" "),a("td",[t._v("把编辑处理后的结果强制保存到指定的文件中，如果文件已经存在，则覆盖现有的文件。")])]),t._v(" "),a("tr",[a("td",[t._v("wq! filename")]),t._v(" "),a("td",[t._v("\n把编辑处理后的结果强制保存到指定的文件中，如果文件已经存在，则覆盖现有文件，并退出vim编辑器。")])])]),t._v(" "),a("h2",{attrs:{id:"_5-权限切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-权限切换"}},[t._v("#")]),t._v(" 5.权限切换")]),t._v(" "),a("p",[t._v("由普通用户权限切换为 root 权限")]),t._v(" "),a("div",{staticClass:"language-Shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -i\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"/assets/md-imgs/server/linux_06.png",alt:"效果"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);