(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{191:function(_,v,p){"use strict";p.r(v);var e=p(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,p=_._self._c||v;return p("div",{staticClass:"content"},[p("p",[_._v("###"),p("strong",[_._v("汇编学习笔记（3）")])]),_._v(" "),p("hr"),_._v(" "),p("p",[_._v("1.若要同时修改CS、IP的内容，可用指令：")]),_._v(" "),p("pre",[p("code",[_._v("    jmp 段地址：偏移地址\n")])]),_._v(" "),p("p",[_._v("2.若想仅修改IP的内容，可用指令：")]),_._v(" "),p("pre",[p("code",[_._v("    jmp  某一合法寄存器\n")])]),_._v(" "),p("p",[_._v("//该指令的作用为：用寄存器中的值修改IP")]),_._v(" "),p("p",[_._v("3.DEBUG.exe基础命令详解：")]),_._v(" "),p("p",[_._v("(1).")]),_._v(" "),p("pre",[p("code",[_._v("    -r\n")])]),_._v(" "),p("p",[_._v("查看、改变"),p("strong",[_._v("CPU寄存器")]),_._v("的内容：")]),_._v(" "),p("p",[_._v("单独使用，可以查看所有寄存器里的内容")]),_._v(" "),p("p",[_._v("(2).")]),_._v(" "),p("p",[_._v("若要改变某个寄存器里的内容，则使用")]),_._v(" "),p("pre",[p("code",[_._v("    -r 寄存器名称 \n")])]),_._v(" "),p("p",[_._v("回车后，在出现的“：”后面输入想要填入该寄存器的值，回车即可")]),_._v(" "),p("p",[_._v("(3).")]),_._v(" "),p("pre",[p("code",[_._v("    -d\n")])]),_._v(" "),p("p",[_._v("查看"),p("strong",[_._v("内存")]),_._v("中的内容")]),_._v(" "),p("p",[_._v("(4).")]),_._v(" "),p("pre",[p("code",[_._v("    -d 段地址：偏移地址\n")])]),_._v(" "),p("p",[_._v("查看指定内存地址中的内容")]),_._v(" "),p("p",[_._v("(5).")]),_._v(" "),p("pre",[p("code",[_._v("    -d 段地址：起始偏移地址   结尾偏移地址\n")])]),_._v(" "),p("p",[_._v("查看指定范围的内存地址中的内容")]),_._v(" "),p("p",[_._v("(6).")]),_._v(" "),p("pre",[p("code",[_._v("    -e 段地址：偏移地址  数值1 数值2 数值3……\n")])]),_._v(" "),p("p",[_._v("改写"),p("strong",[_._v("内存")]),_._v("中的内容。")]),_._v(" "),p("p",[_._v("(7).")]),_._v(" "),p("pre",[p("code",[_._v("    -e 段地址：偏移地址 机器码1 机器码2 机器码3……\n")])]),_._v(" "),p("p",[_._v("向内存中写入机器码")]),_._v(" "),p("p",[_._v("(8).")]),_._v(" "),p("pre",[p("code",[_._v("    -u 段地址：偏移地址\n")])]),_._v(" "),p("p",[_._v("查看内存中的"),p("strong",[_._v("机器码")])]),_._v(" "),p("p",[_._v("（9）.")]),_._v(" "),p("pre",[p("code",[_._v("    -t\n")])]),_._v(" "),p("p",[_._v("执行内存中的机器码")]),_._v(" "),p("p",[_._v("（10）.")]),_._v(" "),p("pre",[p("code",[_._v("    -a\n")])]),_._v(" "),p("p",[_._v("将汇编指令写入内存")])])}],!1,null,null,null);n.options.__file="2016-05-31-汇编学习笔记3——jmp命令与DEBUG进阶指令.md";v.default=n.exports}}]);