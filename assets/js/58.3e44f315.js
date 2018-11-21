(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{222:function(s,a,t){"use strict";t.r(a);var l=t(0),v=Object(l.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("p",[s._v("之前，我们分三次完成了我们第一个H5应用的三个迭代版本：")]),s._v(" "),t("p",[t("a",{attrs:{href:"http://blog.csdn.net/hjb2722404/article/details/46363367",target:"_blank",rel:"noopener noreferrer"}},[s._v("V1.0——简单页面滑动切换"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://blog.csdn.net/hjb2722404/article/details/46380421",target:"_blank",rel:"noopener noreferrer"}},[s._v("V2.0——多页切换，透明过渡及交互指示"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"http://blog.csdn.net/hjb2722404/article/details/46412329",target:"_blank",rel:"noopener noreferrer"}},[s._v("V3.0——加入loading,music及自动切换"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("这已经是一个具有基本表达能力的版本了，但是，远远不够！因为，用户体验永远是第一位的，单纯的图片无法准确调动用户情绪，当然，除非是那些特别牛逼的照片，但那时不可多得的，所以我们必须配以适当的文案来对图片内容进行说明或者升华。并且，如果文字也有一些简单的特效而动起来，它们会更有生命力！")]),s._v(" "),s._m(0),s._v(" "),t("blockquote",[s._v("\n  在V3.0版的基础上给每张图片加入文字，并赋予不同的特效和动感。\n")]),s._v(" "),s._m(1),s._v(" "),t("p",[s._v("1、从布局来看，现在每一页已经被一张图片铺满了，前面我们说过，其实可以将图片在CSS里设置为每一页的背景图片，这样既可以消除因同时设置图片宽和高都是100%带来的图片变形问题，也可以更好地在每一个页面中布局文字。")]),s._v(" "),t("p",[s._v("2、另一方面，我不打算将设置背景图片的样式放入主样式表，因为后面我要将我们的应用改造为一个模板，将图片置入外部样式表中，将不利于我们的模板化制作，所以，这里，我选择将样式置入页面的头部中的<style></style>标签对里，这样以后可以方便地将图片路径作为变量输出到模板中。")]),s._v(" "),t("p",[s._v("3、在页面中加入文字，如果是项目时间有限，追求速度的话，最直接的办法是使用作图软件将文字添加图片上，目前确实也有很多媒体和H5公司在这样做，但这样做的缺点也显而易见——无法给文字加动态效果并且不利于SEO，所以我们还是将文字独立出来放置在页面中单独制作。")]),s._v(" "),s._m(2),s._v(" "),t("p",[s._v("####改造页面，将图片作为图层背景")]),s._v(" "),t("p",[s._v("index.html")]),s._v(" "),s._m(3),s._v(" "),t("p",[s._v("####第二步，为每张页面加入文案")]),s._v(" "),t("p",[s._v("我们在每一个页面中放置一个容器来放置文本内容，并通过容器样式来控制文本的基本布局和格式，同样，为了方便模板化，我们将容器样式写在页面头部<style></style> 标签对内：")]),s._v(" "),t("p",[s._v("index.html")]),s._v(" "),s._m(4),s._v(" "),t("blockquote",[s._v("\n  这里需要注意的是，出于模板化的需要，我将.textbox（n）的所有样式都设置为同样的格式，样式的最后三条语句用来控制文字的流动方向（火狐不支持，慎用，这里瑾做演示），效果如下图所示：\n")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),t("p",[s._v("这一页使用了文字垂直排版，由于火狐不支持该CSS特性，故用chrome演示。")]),s._v(" "),t("p",[s._v("这里限于篇幅，只展示前两张，其余的格式都相同，根据图片和自己的需要可以调整相关参数。")]),s._v(" "),t("p",[s._v("####第三步，文字增加特效")]),s._v(" "),t("p",[s._v("加特效，我们依然使用animation.css插件里的动画，现在，我们先给textbox01加上pt-page-rotateCubeTopIn动画，")]),s._v(" "),t("p",[s._v("index.html")]),s._v(" "),s._m(7),s._v(" "),t("p",[s._v("看看效果：")]),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),t("p",[s._v("我们看到页面加载时文字确实应用了动画特效，以立体翻转并逐渐淡入的方式显示了出来。")]),s._v(" "),t("p",[s._v("但是当我们把相同的样式应用到其他textbox上时，页面切换时却没有出现预期的动画效果。")]),s._v(" "),t("p",[s._v("这是为什么呢？")]),s._v(" "),t("p",[s._v("原来，添加到这些 textbox上的动画都是在页面加载时应用的而不是页面切换时，而页面加载时，其所在页面处于不可见状态，所以我们看不到它的动画。")]),s._v(" "),t("p",[s._v("那么，解决这个问题的思路就是在页面切换时再让textbox显示，并给它添加相应动画。")]),s._v(" "),t("p",[s._v("我们在myfn.js里添加以下代码：")]),s._v(" "),t("p",[s._v("myfn.js")]),s._v(" "),s._m(11),s._v(" "),t("p",[s._v("再次刷新浏览器，就可以看到文字成功应用了随机从inClassArray数组里选择的动画特效。")]),s._v(" "),t("blockquote",[s._v("\n  至此，我们的第一个H5应用的V4.0版也完成了。\n")])])},[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("###"),a("strong",[this._v("任务")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("###"),a("strong",[this._v("分析")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("###"),a("strong",[this._v("实现")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-doctype"},[s._v("<!DOCTYPE html>")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("html")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("head")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("lang")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"en"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("meta")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("charset")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"UTF-8"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("meta")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("http-equiv")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"X-UA-Compatible"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"IE=edge"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("meta")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("name")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"viewport"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("meta")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("name")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"renderer"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"webkit"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("title")]),s._v(">")]),s._v("H5场景应用1.0——实现页面滑动效果"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("title")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("link")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("rel")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"stylesheet"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("href")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"animate.css"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"text/css"')]),s._v("/>")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("link")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("rel")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"stylesheet"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("href")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"animations.css"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"text/css"')]),s._v("/>")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("link")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("rel")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"stylesheet"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("href")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"loading.css"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"text/css"')]),s._v("/>")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("link")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("rel")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"stylesheet"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("href")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"style.css"')]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"text/css"')]),s._v("/>")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"http://apps.bdimg.com/libs/zepto/1.1.4/zepto.min.js"')]),s._v(">")]),t("span",{staticClass:"javascript"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("script")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"touch.js"')]),s._v(">")]),t("span",{staticClass:"javascript"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("script")]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("script")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"myfn.js"')]),s._v(">")]),t("span",{staticClass:"javascript"}),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("script")]),s._v(">")]),s._v("\n\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page1")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/001.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page2")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/002.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page3")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/003.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page4")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/004.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page5")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/005.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page6")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/006.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page7")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/007.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page8")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/008.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n        "),t("span",{staticClass:"hljs-class"},[s._v(".page9")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-image")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-function"},[s._v("url("),t("span",{staticClass:"hljs-string"},[s._v('"imgs/009.jpg"')]),s._v(")")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-repeat")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" no-repeat")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" cover")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n    ")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("style")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("head")]),s._v(">")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n\n……\n"),t("span",{staticClass:"hljs-class"},[s._v(".textbox1")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(":"),t("span",{staticClass:"hljs-value"},[t("span",{staticClass:"hljs-number"},[s._v("300")]),s._v("px")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v("px")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" absolute")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("top")]),s._v(":"),t("span",{staticClass:"hljs-value"},[t("span",{staticClass:"hljs-number"},[s._v("50")]),s._v("px")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("50")]),s._v("px")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("margin-left")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("0")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("margin-top")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("0")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v("red")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("-webkit-writing-mode")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v("horizontal-tb")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("writing-mode")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v("lr-tb")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("writing-mode")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v("horizontal-tb")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n\n"),t("span",{staticClass:"hljs-class"},[s._v(".textbox2")]),t("span",{staticClass:"hljs-rules"},[s._v("{"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(":"),t("span",{staticClass:"hljs-value"},[t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v("px")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("300")]),s._v("px")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" absolute")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("top")]),s._v(":"),t("span",{staticClass:"hljs-value"},[t("span",{staticClass:"hljs-number"},[s._v("50")]),s._v("px")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("right")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("50")]),s._v("px")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("margin-left")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("0")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("margin-top")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("0")])])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v("yellow")])]),s._v("; "),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("-webkit-writing-mode")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v("vertical-rl")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("writing-mode")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v("tb-rl")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[t("span",{staticClass:"hljs-attribute"},[s._v("writing-mode")]),s._v(":"),t("span",{staticClass:"hljs-value"},[s._v("vertical-rl")])]),s._v(";"),t("span",{staticClass:"hljs-rule"},[s._v("}")])]),s._v("\n\n……\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("style")]),s._v(">")]),s._v("\n\n……\n "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"page page1"')]),s._v(">")]),s._v("\n            "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"textbox1"')]),s._v(">")]),s._v("\n                "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("岁月如花般绽放"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n                "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("你的微笑"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n                "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("融化在咖啡里"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n            "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"page page2"')]),s._v(">")]),s._v("\n            "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"textbox2"')]),s._v(">")]),s._v("\n                "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("不知你是否记得"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n                "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("下雨那天"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n                "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("你我初遇"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n                "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("你恰好穿着白色短衫"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n            "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(">")]),s._v("\n        "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(">")]),s._v("\n\n……\n")])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("img",{attrs:{src:"http://img.blog.csdn.net/20150609111739635",alt:"这里写图片描述"}})])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("img",{attrs:{src:"http://img.blog.csdn.net/20150609111830678",alt:"这里写图片描述"}})])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attribute"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-value"},[s._v('"textbox1 pt-page-rotateCubeTopIn"')]),s._v(">")]),s._v("\n   "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("岁月如花般绽放"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n   "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("你的微笑"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n   "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("融化在咖啡里"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("h5")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-title"},[s._v("div")]),s._v(">")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("img",{attrs:{src:"http://img.blog.csdn.net/20150609115618339",alt:"这里写图片描述"}})])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("img",{attrs:{src:"http://img.blog.csdn.net/20150609115632785",alt:"这里写图片描述"}})])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("img",{attrs:{src:"http://img.blog.csdn.net/20150609115533495",alt:"这里写图片描述"}})])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{staticClass:"prettyprint"},[s._v("……\n $("),t("span",{staticClass:"hljs-string"},[s._v('"#audioPlay"')]),s._v(").on("),t("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(","),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("{")]),s._v("\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(audio.paused){\n            audio.play();\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".style.backgroundImage="),t("span",{staticClass:"hljs-string"},[s._v('"url(imgs/music_play.png)"')]),s._v(";\n        }"),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v("{\n            audio.pause();\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".style.backgroundImage="),t("span",{staticClass:"hljs-string"},[s._v('"url(imgs/music_pause.png)"')]),s._v(";\n        }\n    });\n"),t("span",{staticClass:"hljs-comment"},[s._v("//生成随机整数函数")]),s._v("\n    "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("rnd")]),t("span",{staticClass:"hljs-params"},[s._v("(start, end)")]),s._v("{")]),s._v("\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".floor("),t("span",{staticClass:"hljs-built_in"},[s._v("Math")]),s._v(".random() * (end - start) + start);\n    }\n"),t("span",{staticClass:"hljs-comment"},[s._v("//文字进入特效数组")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" inClassArray = ["),t("span",{staticClass:"hljs-string"},[s._v("'pt-page-flipInLeft'")]),s._v(","),t("span",{staticClass:"hljs-string"},[s._v("'pt-page-rotatePullLeft'")]),s._v(","),t("span",{staticClass:"hljs-string"},[s._v("'pt-page-rotateCubeTopIn'")]),s._v("];\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" temLength = inClassArray.length;\n\n\n    "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("swichpage")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" {")]),s._v("\n\n……\n\n     $("),t("span",{staticClass:"hljs-string"},[s._v('".page"')]),s._v(" + nextpage).addClass("),t("span",{staticClass:"hljs-string"},[s._v('"show"')]),s._v(");\n            $("),t("span",{staticClass:"hljs-string"},[s._v('".page"')]),s._v(" + nextpage).addClass("),t("span",{staticClass:"hljs-string"},[s._v('"pt-page-moveFromBottomFade"')]),s._v(");\n\n            "),t("span",{staticClass:"hljs-comment"},[s._v("//为文字添加随机特效")]),s._v("\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" randomNum = rnd("),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",temLength);\n            setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("{")]),s._v("\n                $("),t("span",{staticClass:"hljs-string"},[s._v('".textbox"')]),s._v("+nextpage).css("),t("span",{staticClass:"hljs-string"},[s._v("'display'")]),s._v(","),t("span",{staticClass:"hljs-string"},[s._v("'block'")]),s._v(");\n                $("),t("span",{staticClass:"hljs-string"},[s._v('".textbox"')]),s._v("+nextpage).addClass(inClassArray[randomNum]);\n            },"),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v(");\n\n            $("),t("span",{staticClass:"hljs-string"},[s._v('".page"')]),s._v(" + lastpage).removeClass("),t("span",{staticClass:"hljs-string"},[s._v('"pt-page-moveToTopFade"')]),s._v(");\n            curpage = nextpage;\n        }\n    }\n    ……")])}],!1,null,null,null);v.options.__file="2016-05-31-从零开始制作H5应用（4）——V4.0，加入文字并给文字加特效.md";a.default=v.exports}}]);