(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{195:function(s,a,n){"use strict";n.r(a);var t=n(0),v=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("p",[s._v("1、程序取得所需空间的方法有两种，一种是在加载程序的时候为程序分配，再就是程序在执行的过程中向系统申请。")]),s._v(" "),n("p",[s._v("2、我们若要一个程序在被加载的时候取得所需的空间，则必须要在源程序中做出说明。我们通过在源程序中定义段来进行内存空间的获取")]),s._v(" "),n("p",[s._v("3、程序运行的时候，CS寄存器中存放代码段的段地址。")]),s._v(" "),n("p",[s._v("4、在源程序中使用end 标号来指明程序的入口（要执行的第一条指令），所以程序架构就可以如下：")]),s._v(" "),n("pre",[n("code",[s._v("    assume cs:code\n    code segment\n        ……\n        数据\n        ……\n    start:\n        ……\n        代码\n        ……\n    code ends\n    end start\n")])]),s._v(" "),n("p",[s._v("5、通过定义若干个字型数据来开辟一块内存空间")]),s._v(" "),n("p",[s._v("6、由于将数据，代码，栈放入同一个段中会导致程序混乱和段容量限制的问题，所以要将他们分别存放于多个段中。")]),s._v(" "),n("p",[s._v("7、设置多个段的源程序示例：")]),s._v(" "),n("pre",{staticClass:"prettyprint"},[s._v("assume cs:code,ds:data,ss:stack\n\ndata segment\n        dw "),n("span",{staticClass:"hljs-number"},[s._v("0123")]),s._v("h,"),n("span",{staticClass:"hljs-number"},[s._v("0456")]),s._v("h,"),n("span",{staticClass:"hljs-number"},[s._v("0789")]),s._v("h,"),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("abch,"),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("defh,"),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("fedh,"),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("cbah,"),n("span",{staticClass:"hljs-number"},[s._v("0987")]),s._v("h\ndata ends\n\nstack segment\n    dw "),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(","),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\nstack ends\n\ncode segment\n"),n("span",{staticClass:"hljs-label"},[s._v("start:")]),s._v("  "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" ax,stack\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" ss,ax\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" sp,"),n("span",{staticClass:"hljs-number"},[s._v("16")]),s._v("\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" ax,data\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" ds,ax\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" bx,"),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" cx,"),n("span",{staticClass:"hljs-number"},[s._v("8")]),s._v("\n    s:  "),n("span",{staticClass:"hljs-keyword"},[s._v("push")]),s._v(" [bx]\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("add")]),s._v(" bx,"),n("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("\n        loop s\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" bx,"),n("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" cx,"),n("span",{staticClass:"hljs-number"},[s._v("8")]),s._v("\n    s0: "),n("span",{staticClass:"hljs-keyword"},[s._v("pop")]),s._v(" [bx]\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("add")]),s._v(" bx,"),n("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("\n        loop s0\n        "),n("span",{staticClass:"hljs-keyword"},[s._v("mov")]),s._v(" ax,"),n("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("c00h\n        int "),n("span",{staticClass:"hljs-number"},[s._v("21")]),s._v("h\ncode ends\n\nend start   \n")]),s._v(" "),n("p",[s._v("8、80806CPU不允许将一个数值直接送入段寄存器，通常都需要使用通用寄存器来中转。")])])}],!1,null,null,null);v.options.__file="2016-05-31-汇编语言学习笔记（6）——包含多个段的程序.md";a.default=v.exports}}]);