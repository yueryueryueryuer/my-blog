(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{273:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker-安装-mysql-5-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装-mysql-5-7"}},[s._v("#")]),s._v(" Docker 安装 MySQL 5.7")]),s._v(" "),t("ol",[t("li",[s._v("查找 Docker Hub 上的 mysql 镜像")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker search mysql\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("这里我们拉取官方的镜像，标签为 5.7")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull mysql:5.7\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("运行容器")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run --restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --name mymysql -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/conf:/etc/mysql/conf.d -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/logs:/logs -v "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/data:/mysql_data -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("OL6qYPfp1P -d mysql:5.7\n")])])]),t("ul",[t("li",[t("code",[s._v("-p 3306:3306")]),s._v("：将容器的 3306 端口映射到主机的 3306 端口")]),s._v(" "),t("li",[t("code",[s._v("-v $PWD/conf:/etc/mysql/conf.d")]),s._v("：将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf")]),s._v(" "),t("li",[t("code",[s._v("-v $PWD/logs:/logs")]),s._v("：将主机当前目录下的 logs 目录挂载到容器的/logs")]),s._v(" "),t("li",[t("code",[s._v("-v $PWD/data:/mysql_data")]),s._v("：将主机当前目录下的 data 目录挂载到容器的 /mysql_data")]),s._v(" "),t("li",[t("code",[s._v("-e MYSQL_ROOT_PASSWORD=OL6qYPfp1P")]),s._v("：初始化 root 用户的密码例")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --name mysql -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("OL6qYPfp1P -d mysql:5.7\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);