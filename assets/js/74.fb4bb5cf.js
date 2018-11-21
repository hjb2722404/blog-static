(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{238:function(s,t,a){"use strict";a.r(t);var n=a(0),l=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("p",[s._v("标签（空格分隔）： 环境搭建 centos")]),s._v(" "),a("hr"),s._v(" "),a("blockquote",[s._v("\n  引言：本文档是在全新的CentOs系统搭建JAVA工程相关的服务器环境的指导文档\n")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("##步骤索引：")]),s._v(" "),s._m(0),s._v(" "),a("p",[s._v("##正文")]),s._v(" "),a("p",[s._v("一、安装JDK")]),s._v(" "),a("p",[s._v("1.检查CentOs是否默认安装了openjdk软件，可以使用以下命令中的任意命令，最好都试一下：")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("执行命令后,如果没有任何输出，则说明该系统没有安装jdk，直接跳到第2步，相反，如果输出类似下面的结果：")]),s._v(" "),s._m(2),s._v(" "),a("p",[s._v("则说明该系统已经安装了openjdk,我们需要卸载它，然后安装sun公司的jdk.卸载命令：")]),s._v(" "),s._m(3),s._v(" "),a("blockquote",[s._v("\n  注意：这里的jdk相关文件名指的是上个步骤中用查询命令 查出来的jdk的相关文件的文件名。\n")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),s._m(4),s._v(" "),a("p",[s._v("如果无法删除，可以尝试以下命令：")]),s._v(" "),s._m(5),s._v(" "),a("p",[s._v("执行以上命令后，用find命令查看是否还有文件残留：")]),s._v(" "),s._m(6),s._v(" "),a("p",[s._v("查询无果，说明jdk已经删除干净。")]),s._v(" "),a("p",[s._v("若查询出来还有参与目录，可以用# rm -rf 目录，将残余目录一个一个删除掉。")]),s._v(" "),a("p",[s._v("至此jdk的删除工作已完成。")]),s._v(" "),a("p",[s._v("2.下载sun公司的jdk包并安装")]),s._v(" "),a("p",[s._v("首先查询当前系统的位数，以确定要下载什么位数的jdk：")]),s._v(" "),s._m(7),s._v(" "),a("p",[s._v("会看到类似以下输出：")]),s._v(" "),s._m(8),s._v(" "),a("p",[s._v("我们可以看到该系统是64位，那我们就去搜索下载64位的jdk，这里我们选择下载1.6版本的。下载下来的文件名为：")]),s._v(" "),a("p",[s._v("jdk-6u45-linux-x64.bin")]),s._v(" "),a("p",[s._v("我们把下载下来的文件利用ftp工具上传至服务器的usr/java目录中（java目录是新建的）。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase6-419409.html#jdk-6u45-oth-JPR",target:"_blank",rel:"noopener noreferrer"}},[s._v("最新版jdk下载链接"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("然后在终端工具切换到java目录下，修改文件权限：")]),s._v(" "),s._m(9),s._v(" "),a("p",[s._v("执行安装：")]),s._v(" "),s._m(10),s._v(" "),a("p",[s._v("如果可以查看到java版本号，说明安装成功：")]),s._v(" "),s._m(11),s._v(" "),a("p",[s._v("3、配置环境变量")]),s._v(" "),s._m(12),s._v(" "),a("p",[s._v("在最后加上")]),s._v(" "),s._m(13),s._v(" "),a("p",[s._v("执行：wq保存退出，并更新配置文件：")]),s._v(" "),s._m(14),s._v(" "),a("p",[s._v("至此，jdk安装成功。")]),s._v(" "),a("p",[s._v("二、安装Tomcat")]),s._v(" "),a("p",[s._v("1、下载tomcat")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://tomcat.apache.org/download-70.cgi",target:"_blank",rel:"noopener noreferrer"}},[s._v("最新版tomcat下载链接"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("2、将下载的文件（apache-tomcat-7.0.61.tar.gz）用ftp工具上传至服务器usr/local目录下")]),s._v(" "),a("p",[s._v("3、终端切换到local目录下，解压缩tomcat：")]),s._v(" "),s._m(15),s._v(" "),a("p",[s._v("4、将解压出的文件复制到usr/tomcat目录：")]),s._v(" "),s._m(16),s._v(" "),a("p",[s._v("5、启动tomcat")]),s._v(" "),s._m(17),s._v(" "),a("p",[s._v("6、关闭防火墙")]),s._v(" "),s._m(18),s._v(" "),s._m(19),s._v(" "),s._m(20),s._v(" "),a("p",[s._v("保存退出，然后执行"),a("br"),s._v("\n#source ~/.bash_profile， 让环境变量生效"),a("br"),s._v("\n现在开启TOMCAT服务："),a("br"),s._v("\n#/usr/local/tomcat/bin/startup.sh"),a("br"),s._v("\n然后打入"),a("br"),s._v("\n#netstart –tnl"),a("br"),s._v("\n进行监听，如果能看到8080和8009两个，表示tomcat已经正常启动."),a("br"),s._v("\n下面进行访问测试，看能否进入网页;打入："),a("a",{attrs:{href:"http://serverip:8080",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://serverip:8080"),a("OutboundLink")],1),s._v(" ，可以看到网页的话说明tomcat已经安装成功。")]),s._v(" "),a("p",[s._v("三、安装Nginx")]),s._v(" "),a("p",[s._v("1、下载Nginx安装包")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("最新版Nginx下载链接"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("2、在安装nginx前，需要确保系统安装了g++、gcc、openssl-devel、pcre-devel和zlib-devel软件。安装必须软件：")]),s._v(" "),s._m(21),s._v(" "),a("p",[s._v("3、将安装包文件上传到/usr/local中执行以下操作：")]),s._v(" "),s._m(22),s._v(" "),a("p",[s._v("4、启动")]),s._v(" "),s._m(23),s._v(" "),a("p",[s._v("PS:启动时可能会报如下错误：")]),s._v(" "),a("blockquote",[s._v("\n  nginx: [alert] could not open error log file: open() “/usr/local/nginx/logs/error.log” failed (2: No such file or directory)     \n  2015/05/14 15:57:14 [emerg] 16430#0: open() “/usr/local/nginx/logs/access.log” failed (2: No such file or directory)     \n  [root@cloud nginx]# sudo /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf \n")]),s._v(" "),a("p",[s._v("在nginx文件夹下新建logs文件夹，再次启动就可以了。")]),s._v(" "),a("p",[s._v("5、测试")]),s._v(" "),s._m(24)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("一、安装JDK"),t("br"),this._v("\n二、安装Tomcat"),t("br"),this._v("\n三、安装Nginx")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[s._v("    "),a("span",{staticClass:"hljs-variable"},[s._v("#rpm")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("-qa")]),s._v(" "),a("span",{staticClass:"hljs-subst"},[s._v("|")]),s._v("grep java\n\n    "),a("span",{staticClass:"hljs-variable"},[s._v("#rpm")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("-qa")]),s._v(" "),a("span",{staticClass:"hljs-subst"},[s._v("|")]),s._v("grep jdk\n\n    "),a("span",{staticClass:"hljs-variable"},[s._v("#rpm")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("-qa")]),s._v(" "),a("span",{staticClass:"hljs-subst"},[s._v("|")]),s._v("grep gcj")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[s._v("    java-"),a("span",{staticClass:"hljs-number"},[s._v("1.6")]),a("span",{staticClass:"hljs-number"},[s._v(".0")]),s._v("-openjdk-"),a("span",{staticClass:"hljs-number"},[s._v("1.6")]),a("span",{staticClass:"hljs-number"},[s._v(".0")]),a("span",{staticClass:"hljs-number"},[s._v(".35")]),s._v("-"),a("span",{staticClass:"hljs-number"},[s._v("1.13")]),a("span",{staticClass:"hljs-number"},[s._v(".7")]),a("span",{staticClass:"hljs-number"},[s._v(".1")]),a("span",{staticClass:"hljs-preprocessor"},[s._v(".el")]),s._v("6_6"),a("span",{staticClass:"hljs-preprocessor"},[s._v(".x")]),s._v("86_64\n\n    java-"),a("span",{staticClass:"hljs-number"},[s._v("1.6")]),a("span",{staticClass:"hljs-number"},[s._v(".0")]),s._v("-openjdk-"),a("span",{staticClass:"hljs-number"},[s._v("1.7")]),a("span",{staticClass:"hljs-number"},[s._v(".0")]),a("span",{staticClass:"hljs-number"},[s._v(".35")]),s._v("-"),a("span",{staticClass:"hljs-number"},[s._v("2.3")]),a("span",{staticClass:"hljs-number"},[s._v(".7")]),a("span",{staticClass:"hljs-number"},[s._v(".1")]),a("span",{staticClass:"hljs-preprocessor"},[s._v(".el")]),s._v("6_6"),a("span",{staticClass:"hljs-preprocessor"},[s._v(".x")]),s._v("86_64")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[s._v("    "),a("span",{staticClass:"hljs-variable"},[s._v("#rpm")]),s._v(" –e  jdk相关文件名\n    "),a("span",{staticClass:"hljs-comment"},[s._v("//(普通删除命令，删除特定的包，如果遇到依赖，则无法删除)")]),s._v("\n\n    "),a("span",{staticClass:"hljs-variable"},[s._v("#rpm")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("-e")]),s._v(" –nodeps  jdk相关文件名 \n\n    "),a("span",{staticClass:"hljs-comment"},[s._v("//(强制删除命令，忽略依赖，删除特定的包。如果使用上面命令删除时，提示有依赖的其它文件，则用该命令可以对其进行强力删除) ")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[a("span",{staticClass:"hljs-variable"},[s._v("#rpm")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("-e")]),s._v(" java"),a("span",{staticClass:"hljs-subst"},[s._v("-")]),a("span",{staticClass:"hljs-number"},[s._v("1.6")]),a("span",{staticClass:"hljs-number"},[s._v(".0")]),a("span",{staticClass:"hljs-attribute"},[s._v("-openjdk")]),a("span",{staticClass:"hljs-subst"},[s._v("-")]),a("span",{staticClass:"hljs-number"},[s._v("1.6")]),a("span",{staticClass:"hljs-number"},[s._v(".0")]),a("span",{staticClass:"hljs-number"},[s._v(".35")]),a("span",{staticClass:"hljs-subst"},[s._v("-")]),a("span",{staticClass:"hljs-number"},[s._v("1.13")]),a("span",{staticClass:"hljs-number"},[s._v(".7")]),a("span",{staticClass:"hljs-number"},[s._v(".1")]),a("span",{staticClass:"hljs-built_in"},[s._v(".")]),s._v("el6_6"),a("span",{staticClass:"hljs-built_in"},[s._v(".")]),s._v("x86_64")])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("#yum -y remove java jdk相关文件名")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("#find / -name jdk")]),this._v("\n"),t("span",{staticClass:"hljs-preprocessor"},[this._v("#find / -name java")]),this._v("\n"),t("span",{staticClass:"hljs-preprocessor"},[this._v("#find / -name jre")]),this._v("\n"),t("span",{staticClass:"hljs-preprocessor"},[this._v("#find / -name gcj")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("# uname -r")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-number"},[this._v("2.6")]),t("span",{staticClass:"hljs-number"},[this._v(".32")]),this._v("-"),t("span",{staticClass:"hljs-number"},[this._v("358.")]),this._v("el6"),t("span",{staticClass:"hljs-preprocessor"},[this._v(".x")]),this._v("86_64")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[a("span",{staticClass:"hljs-variable"},[s._v("#chmod")]),s._v(" u"),a("span",{staticClass:"hljs-subst"},[s._v("+")]),s._v("x jdk"),a("span",{staticClass:"hljs-subst"},[s._v("-")]),a("span",{staticClass:"hljs-number"},[s._v("6")]),s._v("u45"),a("span",{staticClass:"hljs-attribute"},[s._v("-linux")]),a("span",{staticClass:"hljs-attribute"},[s._v("-x64")]),a("span",{staticClass:"hljs-attribute"},[s._v("-rpm")]),a("span",{staticClass:"hljs-built_in"},[s._v(".")]),s._v("bin ")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[a("span",{staticClass:"hljs-built_in"},[s._v(".")]),s._v("/jdk"),a("span",{staticClass:"hljs-subst"},[s._v("-")]),a("span",{staticClass:"hljs-number"},[s._v("6")]),s._v("u45"),a("span",{staticClass:"hljs-attribute"},[s._v("-linux")]),a("span",{staticClass:"hljs-attribute"},[s._v("-x64")]),a("span",{staticClass:"hljs-attribute"},[s._v("-rpm")]),a("span",{staticClass:"hljs-built_in"},[s._v(".")]),s._v("bin ")])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("#java -version")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("#vi /etc/profile")]),this._v("\n")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[s._v("JAVA_HOME=/usr/local/jdk1."),a("span",{staticClass:"hljs-number"},[s._v("6.0")]),s._v("_45 //注意版本号为你刚安装的\n\nPATH="),a("span",{staticClass:"hljs-variable"},[s._v("$PATH")]),s._v(":"),a("span",{staticClass:"hljs-variable"},[s._v("$JAVA_HOME")]),s._v("/bin\n\nCLASSPATH=.:"),a("span",{staticClass:"hljs-variable"},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),a("span",{staticClass:"hljs-variable"},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar\n\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" JAVA_HOME\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" PATH\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" CLASSPATH")])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("#source /etc/profile")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[a("span",{staticClass:"hljs-variable"},[s._v("#tar")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("-xzvf")]),s._v(" apache"),a("span",{staticClass:"hljs-attribute"},[s._v("-tomcat")]),a("span",{staticClass:"hljs-subst"},[s._v("-")]),a("span",{staticClass:"hljs-number"},[s._v("7.0")]),a("span",{staticClass:"hljs-number"},[s._v(".61")]),a("span",{staticClass:"hljs-built_in"},[s._v(".")]),s._v("tar"),a("span",{staticClass:"hljs-built_in"},[s._v(".")]),s._v("gz")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[a("span",{staticClass:"hljs-variable"},[s._v("#cp")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("-R")]),s._v(" apache"),a("span",{staticClass:"hljs-attribute"},[s._v("-tomcat")]),a("span",{staticClass:"hljs-subst"},[s._v("-")]),a("span",{staticClass:"hljs-number"},[s._v("7.0")]),a("span",{staticClass:"hljs-number"},[s._v(".61")]),s._v(" /usr/"),a("span",{staticClass:"hljs-built_in"},[s._v("local")]),s._v("/tomcat")])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("#/usr/local/tomcat/bin/startup.sh")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("#/etc/init.d/iptables stop")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("至此，tomcat安装配置成功，下面开启apachetomcat及把apache tomcat写入开机运行队列："),a("br"),s._v("\n（1、apache tomcat 的启动命令： #/usr/local/tomcat/bin/startup.sh"),a("br"),s._v("\n（2、apache tomcat的停止命令："),a("br"),s._v("\n#/usr/local/tomcat/bin/shutdown.sh"),a("br"),s._v("\n（3、apache tomcat开机启动设置："),a("br"),s._v('\n#echo "/usr/local/tomcat/bin/startup.sh" >> /etc/rc.local'),a("br"),s._v("\n3、配置TOMCAT的环境变量"),a("br"),s._v("\n编辑"),a("br"),s._v("\n#vi ~/.bash_profile"),a("br"),s._v("\n加入 tomcat 环境参数")])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[this._v("TOMCAT_HOME=/usr/local/tomcat\n"),t("span",{staticClass:"hljs-keyword"},[this._v("export")]),this._v(" PATH JAVA_HOME CLASSPATH TOMCAT_HOME")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[a("span",{staticClass:"hljs-variable"},[s._v("#yum")]),s._v(" install gcc"),a("span",{staticClass:"hljs-attribute"},[s._v("-c")]),a("span",{staticClass:"hljs-subst"},[s._v("++")]),s._v("\n"),a("span",{staticClass:"hljs-variable"},[s._v("#yum")]),s._v(" "),a("span",{staticClass:"hljs-attribute"},[s._v("-y")]),s._v(" install zlib zlib"),a("span",{staticClass:"hljs-attribute"},[s._v("-devel")]),s._v(" openssl openssl"),a("span",{staticClass:"hljs-subst"},[s._v("--")]),s._v("devel pcre pcre"),a("span",{staticClass:"hljs-attribute"},[s._v("-devel")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[s._v("[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("local")]),s._v("]"),a("span",{staticClass:"hljs-comment"},[s._v("# cd /usr/local")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("local")]),s._v("]"),a("span",{staticClass:"hljs-comment"},[s._v("# tar -zxv -f nginx-1.2.6.tar.gz")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("local")]),s._v("]"),a("span",{staticClass:"hljs-comment"},[s._v("# rm -rf nginx-1.2.6.tar.gz")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("local")]),s._v("]"),a("span",{staticClass:"hljs-comment"},[s._v("# mv nginx-1.2.6 nginx")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("local")]),s._v("]"),a("span",{staticClass:"hljs-comment"},[s._v("# cd /usr/local/nginx")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" nginx]"),a("span",{staticClass:"hljs-comment"},[s._v("# ./configure --prefix=/usr/local/nginx")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" nginx]"),a("span",{staticClass:"hljs-comment"},[s._v("# make")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" nginx]"),a("span",{staticClass:"hljs-comment"},[s._v("# make install")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"prettyprint"},[a("span",{staticClass:"hljs-comment"},[s._v("#方法1")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" nginx-"),a("span",{staticClass:"hljs-number"},[s._v("1.2")]),s._v("."),a("span",{staticClass:"hljs-number"},[s._v("6")]),s._v("]"),a("span",{staticClass:"hljs-comment"},[s._v("# /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf")]),s._v("\n"),a("span",{staticClass:"hljs-comment"},[s._v("#方法2")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" nginx-"),a("span",{staticClass:"hljs-number"},[s._v("1.2")]),s._v("."),a("span",{staticClass:"hljs-number"},[s._v("6")]),s._v("]"),a("span",{staticClass:"hljs-comment"},[s._v("# cd /usr/local/nginx/sbin")]),s._v("\n[root"),a("span",{staticClass:"hljs-variable"},[s._v("@admin")]),s._v(" sbin]"),a("span",{staticClass:"hljs-comment"},[s._v("# ./nginx")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{staticClass:"prettyprint"},[t("span",{staticClass:"hljs-preprocessor"},[this._v("#测试端口 ")]),this._v("\nnetstat –na|grep "),t("span",{staticClass:"hljs-number"},[this._v("80")]),this._v("\n"),t("span",{staticClass:"hljs-preprocessor"},[this._v("#浏览器中测试 ")]),this._v("\nhttp:"),t("span",{staticClass:"hljs-comment"},[this._v("//ip:80")])])}],!1,null,null,null);l.options.__file="2016-05-31-CentOs Server环境搭建.md";t.default=l.exports}}]);