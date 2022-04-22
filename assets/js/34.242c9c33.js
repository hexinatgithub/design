(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{522:function(t,a,s){"use strict";s.r(a);var n=s(30),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"服务路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务路由"}},[t._v("#")]),t._v(" 服务路由")]),t._v(" "),s("h2",{attrs:{id:"_1-服务路由简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务路由简介"}},[t._v("#")]),t._v(" 1. 服务路由简介")]),t._v(" "),s("h3",{attrs:{id:"_1-1-什么是服务路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是服务路由"}},[t._v("#")]),t._v(" 1.1. 什么是服务路由")]),t._v(" "),s("p",[t._v("服务消费者在发起服务调用时，如果面对多个服务提供者，需要通过一定的规则来选择调用哪个服务提供者，这就是"),s("strong",[t._v("服务路由")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_1-2-为什么需要服务路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-为什么需要服务路由"}},[t._v("#")]),t._v(" 1.2. 为什么需要服务路由")]),t._v(" "),s("p",[t._v("负载均衡的作用和服务路由的功能看上去很近似，二者有什么区别呢？")]),t._v(" "),s("p",[t._v("负载均衡的目标是提供服务分发而不是解决路由问题，常见的静态、动态负载均衡算法也无法实现精细化的路由管理，但是负载均衡也可以简单看做是路由方案的一种。")]),t._v(" "),s("p",[t._v("服务路由通常用于以下场景，目的在于实现流量隔离：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("分组调用")]),t._v("：一般来讲，为了保证服务的高可用性，实现异地多活的需求，一个服务往往不止部署在一个数据中心，而且出于节省成本等考虑，有些业务可能不仅在私有机房部署，还会采用公有云部署，甚至采用多家公有云部署。服务节点也会按照不同的数据中心分成不同的分组，这时对于服务消费者来说，选择哪一个分组调用，就必须有相应的路由规则。")]),t._v(" "),s("li",[s("strong",[t._v("蓝绿发布")]),t._v("：蓝绿发布场景中，一共有两套服务群组：一套是提供旧版功能的服务群组，标记为"),s("strong",[t._v("绿色")]),t._v("；另一套是提供新版功能的服务群组，标记为"),s("strong",[t._v("蓝色")]),t._v("。两套服务群组都是功能完善的，并且正在运行的系统，只是服务版本和访问流量不同。新版群组（蓝色）通常是为了做内部测试、验收，不对外部用户暴露。\n"),s("ul",[s("li",[t._v("如果新版群组（蓝色）运行稳定，并测试、验收通过后，则通过服务路由、负载均衡等手段逐步将外部用户流量导向新版群组（蓝色）。")]),t._v(" "),s("li",[t._v("如果新版群组（蓝色）运行不稳定，或测试、验收不通过，则排查、解决问题后，再继续测试、验收。")])])]),t._v(" "),s("li",[s("strong",[t._v("灰度发布")]),t._v("：灰度发布（又名金丝雀发布）是指在黑与白之间，能够平滑过渡的一种发布方式。在其上可以进行 A/B 测试，即让一部分用户使用特性 A，一部分用户使用特性 B：如果用户对 B 没有什么反对意见，那么逐步扩大发布范围，直到把所有用户都迁移到 B 上面来。灰度发布可以保证整体系统的稳定，在初始灰度的时候就可以发现、调整问题，以保证其影响度。要支持灰度发布，就要求服务能够根据一定的规则，将流量隔离。")]),t._v(" "),s("li",[s("strong",[t._v("流量切换")]),t._v("：在业务线上运行过程中，经常会遇到一些不可抗力因素导致业务故障，比如某个机房的光缆被挖断，或者发生着火等事故导致整个机房的服务都不可用。这个时候就需要按照某个指令，能够把原来调用这个机房服务的流量切换到其他正常的机房。")]),t._v(" "),s("li",[s("strong",[t._v("线下测试联调")]),t._v("：线下测试时，可能会缺少相应环境。可以将测试应用注册到线上，然后开启路由规则，在本地进行测试。")]),t._v(" "),s("li",[s("strong",[t._v("读写分离")]),t._v("。对于大多数互联网业务来说都是读多写少，所以在进行服务部署的时候，可以把读写分开部署，所有写接口可以部署在一起，而读接口部署在另外的节点上。")])]),t._v(" "),s("h2",{attrs:{id:"_2-服务路由的规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务路由的规则"}},[t._v("#")]),t._v(" 2. 服务路由的规则")]),t._v(" "),s("p",[t._v("服务路由主要有两种规则：一种是条件路由，一种是脚本路由。")]),t._v(" "),s("h3",{attrs:{id:"_2-1-条件路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-条件路由"}},[t._v("#")]),t._v(" 2.1. 条件路由")]),t._v(" "),s("p",[s("strong",[t._v("条件路由是基于条件表达式的路由规则")]),t._v("。各个 RPC 框架的条件路由表达式各不相同。")]),t._v(" "),s("p",[t._v("我们不妨参考一下 Dubbo 的条件路由。Dubbo 的条件路由有两种配置粒度，如下：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("应用粒度")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app1的消费者只能消费所有端口为20880的服务实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app2的消费者只能消费所有端口为20881的服务实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("force")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" governance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("conditionrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("consumer\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" application=app1 ="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" address="),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*:")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20880")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" application=app2 ="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" address="),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*:")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20881")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("服务粒度")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DemoService的sayHello方法只能消费所有端口为20880的服务实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DemoService的sayHi方法只能消费所有端口为20881的服务实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scope")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("force")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.apache.dubbo.samples.governance.api.DemoService\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" method=sayHello ="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" address="),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*:")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20880")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" method=sayHi ="),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" address="),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("*:")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20881")]),t._v("\n")])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("其中，"),s("code",[t._v("conditions")]),t._v(" 定义具体的路由规则内容。"),s("code",[t._v("conditions")]),t._v(" 部分是规则的主体，由 1 到任意多条规则组成。详见："),s("a",{attrs:{href:"https://dubbo.apache.org/zh/docs/v2.7/user/examples/routing-rule/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dubbo 路由规则"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Dubbo 的条件路由规则由两个条件组成，分别用于对服务消费者和提供者进行匹配。条件路由规则的格式如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[服务消费者匹配条件] => [服务提供者匹配条件]\n")])])]),s("ul",[s("li",[t._v("服务消费者匹配条件：所有参数和消费者的 URL 进行对比，当消费者满足匹配条件时，对该消费者执行后面的过滤规则。")]),t._v(" "),s("li",[t._v("服务提供者匹配条件：所有参数和提供者的 URL 进行对比，消费者最终只拿到过滤后的地址列表。")])]),t._v(" "),s("p",[s("code",[t._v("condition://")]),t._v(" 代表了这是一段用条件表达式编写的路由规则，下面是一个条件路由规则示例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("host = 10.20.153.10 => host = 10.20.153.11\n")])])]),s("p",[t._v("该条规则表示 IP 为 "),s("code",[t._v("10.20.153.10")]),t._v(" 的服务消费者"),s("strong",[t._v("只可")]),t._v("调用 IP 为 "),s("code",[t._v("10.20.153.11")]),t._v(" 机器上的服务，不可调用其他机器上的服务。")]),t._v(" "),s("p",[t._v("下面列举一些 Dubbo 条件路由的典型应用场景：")]),t._v(" "),s("ul",[s("li",[t._v("如果服务消费者的匹配条件为空，就表示"),s("strong",[t._v("所有的服务消费者都可以访问")]),t._v("，就像下面的表达式一样。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("=> host != 10.20.153.11\n")])])]),s("ul",[s("li",[t._v("如果服务提供者的过滤条件为空，就表示"),s("strong",[t._v("禁止所有的服务消费者访问")]),t._v("，就像下面的表达式一样。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("host = 10.20.153.10 =>\n")])])]),s("ul",[s("li",[s("strong",[t._v("排除某个服务节点")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("=> host != 172.22.3.91\n")])])]),s("ul",[s("li",[s("strong",[t._v("白名单")])])]),t._v(" "),s("div",{staticClass:"language-fallback extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("register.ip != 10.20.153.10,10.20.153.11 =>\n")])])]),s("ul",[s("li",[s("strong",[t._v("黑名单")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("register.ip = 10.20.153.10,10.20.153.11 =>\n")])])]),s("ul",[s("li",[s("strong",[t._v("只暴露部分机器节点")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("=> host = 172.22.3.1*,172.22.3.2*\n")])])]),s("ul",[s("li",[s("strong",[t._v("为重要应用提供额外的机器节点")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("application != kylin => host != 172.22.3.95,172.22.3.96\n")])])]),s("ul",[s("li",[s("strong",[t._v("读写分离")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("method = find*,list*,get*,is* => host = 172.22.3.94,172.22.3.95,172.22.3.96\nmethod != find*,list*,get*,is* => host = 172.22.3.97,172.22.3.98\n")])])]),s("ul",[s("li",[s("strong",[t._v("前后台分离")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("application = bops => host = 172.22.3.91,172.22.3.92,172.22.3.93\napplication != bops => host = 172.22.3.94,172.22.3.95,172.22.3.96\n")])])]),s("ul",[s("li",[s("strong",[t._v("隔离不同机房网段")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("host != 172.22.3.* => host != 172.22.3.*\n")])])]),s("ul",[s("li",[t._v("提供者与消费者部署在同集群内，"),s("strong",[t._v("本机只访问本机的服务")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("=> host = $host\n")])])]),s("h3",{attrs:{id:"_2-2-脚本路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-脚本路由"}},[t._v("#")]),t._v(" 2.2. 脚本路由")]),t._v(" "),s("p",[t._v("脚本路由是基于脚本语言的路由规则，常用的脚本语言比如 JavaScript、Groovy、JRuby 等。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"script://0.0.0.0/com.foo.BarService?category=routers&dynamic=false&rule=" + URL.encode("（function route(invokers) { ... } (invokers)）")\n')])])]),s("p",[t._v("这里面 "),s("code",[t._v("script://")]),t._v(" 就代表了这是一段脚本语言编写的路由规则，具体规则定义在脚本语言的 route 方法实现里，比如下面这段用 JavaScript 编写的 route() 方法表达的意思是，只有 IP 为 "),s("code",[t._v("10.20.153.10")]),t._v(" 的服务消费者可以发起服务调用。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("route")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("invokers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("invokers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" invokers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.20.153.10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("invokers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("invokers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("invokers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("）"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-3-标签路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-标签路由"}},[t._v("#")]),t._v(" 2.3. 标签路由")]),t._v(" "),s("p",[t._v("标签路由通过将某一个或多个服务的提供者划分到同一个分组，约束流量只在指定分组中流转，从而实现流量隔离的目的，可以作为蓝绿发布、灰度发布等场景的能力基础。")]),t._v(" "),s("p",[t._v("标签主要是指对服务提供者的分组，目前有两种方式可以完成实例分组，分别是"),s("strong",[t._v("动态规则打标")]),t._v("和"),s("strong",[t._v("静态规则打标")]),t._v("。一般，动态规则优先级比静态规则更高，当两种规则同时存在且出现冲突时，将以动态规则为准。")]),t._v(" "),s("p",[t._v("以 Dubbo 的标签路由用法为例")]),t._v(" "),s("p",[t._v("（1）"),s("strong",[t._v("动态规则打标")]),t._v("，可随时在"),s("strong",[t._v("服务治理控制台")]),t._v("下发标签归组规则")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# governance-tagrouter-provider应用增加了两个标签分组tag1和tag2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tag1包含一个实例 127.0.0.1:20880")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tag2包含一个实例 127.0.0.1:20881")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("force")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" governance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tagrouter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("provider\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tag1\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:20880"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tag2\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addresses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:20881"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n")])])]),s("p",[t._v("（2）"),s("strong",[t._v("静态规则打标")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("dubbo:")]),t._v("provider")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tag1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("dubbo:")]),t._v("service")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tag1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-fallback extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("java -jar xxx-provider.jar -Ddubbo.provider.tag={the tag you want, may come from OS ENV}\n")])])]),s("p",[t._v("（3）"),s("strong",[t._v("服务消费者指定标签路由")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RpcContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttachment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Constants")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REQUEST_TAG_KEY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("请求标签的作用域为每一次 invocation，使用 "),s("code",[t._v("attachment")]),t._v(" 来传递请求标签，注意保存在 "),s("code",[t._v("attachment")]),t._v(" 中的值将会在一次完整的远程调用中持续传递，得益于这样的特性，我们只需要在起始调用时，通过一行代码的设置，达到标签的持续传递。")]),t._v(" "),s("h3",{attrs:{id:"_2-4-路由规则获取方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-路由规则获取方式"}},[t._v("#")]),t._v(" 2.4. 路由规则获取方式")]),t._v(" "),s("p",[t._v("路由规则的获取方式主要有三种：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("本地静态配置")]),t._v("：顾名思义就是路由规则存储在服务消费者本地上。服务消费者发起调用时，从本地固定位置读取路由规则，然后按照路由规则选取一个服务节点发起调用。")]),t._v(" "),s("li",[s("strong",[t._v("配置中心管理")]),t._v("：这种方式下，所有的服务消费者都从配置中心获取路由规则，由配置中心来统一管理。")]),t._v(" "),s("li",[s("strong",[t._v("注册中心动态下发")]),t._v("：这种方式下，一般是运维人员或者开发人员，通过服务治理平台修改路由规则，服务治理平台调用配置中心接口，把修改后的路由规则持久化到配置中心。因为服务消费者订阅了路由规则的变更，于是就会从配置中心获取最新的路由规则，按照最新的路由规则来执行。")])]),t._v(" "),s("p",[t._v("一般来讲，"),s("strong",[t._v("服务路由最好是存储在配置中心")]),t._v("，由配置中心来统一管理。这样的话，所有的服务消费者就不需要在本地管理服务路由，因为大部分的服务消费者并不关心服务路由的问题，或者说也不需要去了解其中的细节。通过配置中心，统一给各个服务消费者下发统一的服务路由，节省了沟通和管理成本。")]),t._v(" "),s("p",[t._v("但也不排除某些服务消费者有特定的需求，需要定制自己的路由规则，这个时候就适合通过本地配置来定制。")]),t._v(" "),s("p",[t._v("而动态下发可以理解为一种高级功能，它能够动态地修改路由规则，在某些业务场景下十分有用。比如某个数据中心存在问题，需要把调用这个数据中心的服务消费者都切换到其他数据中心，这时就可以通过动态下发的方式，向配置中心下发一条路由规则，将所有调用这个数据中心的请求都迁移到别的地方。")]),t._v(" "),s("h2",{attrs:{id:"_3-参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考资料"}},[t._v("#")]),t._v(" 3. 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/intro/100014401",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 0 开始学微服务"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://time.geekbang.org/column/intro/100046201",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPC 实战与核心原理"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://time.geekbang.org/course/intro/100003901",target:"_blank",rel:"noopener noreferrer"}},[t._v("微服务架构核心 20 讲"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);