(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{500:function(t,e,r){"use strict";r.r(e);var s=r(30),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"设计-pastebin-com-或者-bit-ly"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计-pastebin-com-或者-bit-ly"}},[t._v("#")]),t._v(" 设计 Pastebin.com (或者 Bit.ly)")]),t._v(" "),r("blockquote",[r("p",[t._v("本文搬运自 "),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README-zh-Hans.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计 Pastebin.com (或者 Bit.ly)"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("注意: 为了避免重复，当前文档会直接链接到"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E4%B8%BB%E9%A2%98%E7%9A%84%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统设计主题"),r("OutboundLink")],1),t._v("的相关区域，请参考链接内容以获得综合的讨论点、权衡和替代方案。")])]),t._v(" "),r("p",[r("strong",[t._v("设计 Bit.ly")]),t._v(" - 是一个类似的问题，区别是 pastebin 需要存储的是 paste 的内容，而不是原始的未短化的 url。")]),t._v(" "),r("h2",{attrs:{id:"步骤一、需求分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤一、需求分析"}},[t._v("#")]),t._v(" 步骤一、需求分析")]),t._v(" "),r("blockquote",[r("p",[t._v("收集这个问题的需求和范畴。\n问相关问题来明确用例和约束。\n讨论一些假设。")])]),t._v(" "),r("h3",{attrs:{id:"用例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用例"}},[t._v("#")]),t._v(" 用例")]),t._v(" "),r("h4",{attrs:{id:"问题范围"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题范围"}},[t._v("#")]),t._v(" 问题范围")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("用户")]),t._v(" 输入一段文本，然后得到一个随机生成的链接\n"),r("ul",[r("li",[t._v("过期设置\n"),r("ul",[r("li",[t._v("默认的设置是不会过期的")]),t._v(" "),r("li",[t._v("可以选择设置一个过期的时间")])])])])]),t._v(" "),r("li",[r("strong",[t._v("用户")]),t._v(" 输入一个 paste 的 url 后，可以看到它存储的内容")]),t._v(" "),r("li",[r("strong",[t._v("用户")]),t._v(" 是匿名的")]),t._v(" "),r("li",[r("strong",[t._v("Service")]),t._v(" 跟踪页面分析\n"),r("ul",[r("li",[t._v("一个月的访问统计")])])]),t._v(" "),r("li",[r("strong",[t._v("Service")]),t._v(" 删除过期的 pastes")]),t._v(" "),r("li",[r("strong",[t._v("Service")]),t._v(" 需要高可用")])]),t._v(" "),r("h4",{attrs:{id:"超出范畴的用例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#超出范畴的用例"}},[t._v("#")]),t._v(" 超出范畴的用例")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("用户")]),t._v(" 可以注册一个账户\n"),r("ul",[r("li",[r("strong",[t._v("用户")]),t._v(" 通过验证邮箱")])])]),t._v(" "),r("li",[r("strong",[t._v("用户")]),t._v(" 可以用注册的账户登录\n"),r("ul",[r("li",[r("strong",[t._v("用户")]),t._v(" 可以编辑文档")])])]),t._v(" "),r("li",[r("strong",[t._v("用户")]),t._v(" 可以设置可见性")]),t._v(" "),r("li",[r("strong",[t._v("用户")]),t._v(" 可以设置短链接")])]),t._v(" "),r("h3",{attrs:{id:"约束和假设"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#约束和假设"}},[t._v("#")]),t._v(" 约束和假设")]),t._v(" "),r("h4",{attrs:{id:"状态假设"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#状态假设"}},[t._v("#")]),t._v(" 状态假设")]),t._v(" "),r("ul",[r("li",[t._v("访问流量不是均匀分布的")]),t._v(" "),r("li",[t._v("打开一个短链接应该是很快的")]),t._v(" "),r("li",[t._v("pastes 只能是文本")]),t._v(" "),r("li",[t._v("页面访问分析数据可以不用实时")]),t._v(" "),r("li",[t._v("一千万的用户量")]),t._v(" "),r("li",[t._v("每个月一千万的 paste 写入量")]),t._v(" "),r("li",[t._v("每个月一亿的 paste 读取量")]),t._v(" "),r("li",[t._v("读写比例在 10:1")])]),t._v(" "),r("h4",{attrs:{id:"性能估算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能估算"}},[t._v("#")]),t._v(" 性能估算")]),t._v(" "),r("ul",[r("li",[t._v("每个 paste 的大小\n"),r("ul",[r("li",[t._v("每一个 paste 1 KB")]),t._v(" "),r("li",[r("code",[t._v("shortlink")]),t._v(" - 7 bytes")]),t._v(" "),r("li",[r("code",[t._v("expiration_length_in_minutes")]),t._v(" - 4 bytes")]),t._v(" "),r("li",[r("code",[t._v("created_at")]),t._v(" - 5 bytes")]),t._v(" "),r("li",[r("code",[t._v("paste_path")]),t._v(" - 255 bytes")]),t._v(" "),r("li",[t._v("总共 = ~1.27 KB")])])]),t._v(" "),r("li",[t._v("每个月新的 paste 内容在 12.7GB\n"),r("ul",[r("li",[t._v("(1.27 * 10000000)KB / 月的 paste")]),t._v(" "),r("li",[t._v("三年内将近 450GB 的新 paste 内容")]),t._v(" "),r("li",[t._v("三年内 3.6 亿短链接")]),t._v(" "),r("li",[t._v("假设大部分都是新的 paste，而不是需要更新已存在的 paste")])])]),t._v(" "),r("li",[t._v("平均 4paste/s 的写入速度")]),t._v(" "),r("li",[t._v("平均 40paste/s 的读取速度")])]),t._v(" "),r("p",[t._v("简单的转换指南:")]),t._v(" "),r("ul",[r("li",[t._v("2.5 百万 req/s")]),t._v(" "),r("li",[t._v("1 req/s = 2.5 百万 req/month")]),t._v(" "),r("li",[t._v("40 req/s = 1 亿 req/month")]),t._v(" "),r("li",[t._v("400 req/s = 10 亿 req/month")])]),t._v(" "),r("h2",{attrs:{id:"步骤二、顶层设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤二、顶层设计"}},[t._v("#")]),t._v(" 步骤二、顶层设计")]),t._v(" "),r("blockquote",[r("p",[t._v("概述一个包括所有重要的组件的高层次设计")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://i.imgur.com/BKsBnmG.png",alt:"Imgur"}})]),t._v(" "),r("h2",{attrs:{id:"步骤三、核心组件设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤三、核心组件设计"}},[t._v("#")]),t._v(" 步骤三、核心组件设计")]),t._v(" "),r("blockquote",[r("p",[t._v("深入每一个核心组件的细节")])]),t._v(" "),r("h3",{attrs:{id:"用例-用户输入一段文本-然后得到一个随机生成的链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用例-用户输入一段文本-然后得到一个随机生成的链接"}},[t._v("#")]),t._v(" 用例：用户输入一段文本，然后得到一个随机生成的链接")]),t._v(" "),r("p",[t._v("我们可以用一个 "),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9Frdbms",target:"_blank",rel:"noopener noreferrer"}},[t._v("关系型数据库"),r("OutboundLink")],1),t._v("作为一个大的哈希表，用来把生成的 url 映射到一个包含 paste 文件的文件服务器和路径上。")]),t._v(" "),r("p",[t._v("为了避免托管一个文件服务器，我们可以用一个托管的"),r("strong",[t._v("对象存储")]),t._v("，比如 Amazon 的 S3 或者"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%96%87%E6%A1%A3%E7%B1%BB%E5%9E%8B%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("NoSQL 文档类型存储"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("作为一个大的哈希表的关系型数据库的替代方案，我们可以用"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E9%94%AE-%E5%80%BC%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("NoSQL 键值存储"),r("OutboundLink")],1),t._v("。我们需要讨论"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-%E8%BF%98%E6%98%AF-nosql",target:"_blank",rel:"noopener noreferrer"}},[t._v("选择 SQL 或 NoSQL 之间的权衡"),r("OutboundLink")],1),t._v("。下面的讨论是使用关系型数据库方法。")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("客户端")]),t._v(" 发送一个创建 paste 的请求到作为一个"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86web-%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("反向代理"),r("OutboundLink")],1),t._v("启动的 "),r("strong",[t._v("Web 服务器")]),t._v("。")]),t._v(" "),r("li",[r("strong",[t._v("Web 服务器")]),t._v(" 转发请求给 "),r("strong",[t._v("写接口")]),t._v(" 服务器")]),t._v(" "),r("li",[r("strong",[t._v("写接口")]),t._v(" 服务器执行如下操作：\n"),r("ul",[r("li",[t._v("生成一个唯一的 url\n"),r("ul",[r("li",[t._v("检查这个 url 在 "),r("strong",[t._v("SQL 数据库")]),t._v(" 里面是否是唯一的")]),t._v(" "),r("li",[t._v("如果这个 url 不是唯一的，生成另外一个 url")]),t._v(" "),r("li",[t._v("如果我们支持自定义 url，我们可以使用用户提供的 url（也需要检查是否重复）")])])]),t._v(" "),r("li",[t._v("把生成的 url 存储到 "),r("strong",[t._v("SQL 数据库")]),t._v(" 的 "),r("code",[t._v("pastes")]),t._v(" 表里面")]),t._v(" "),r("li",[t._v("存储 paste 的内容数据到 "),r("strong",[t._v("对象存储")]),t._v(" 里面")]),t._v(" "),r("li",[t._v("返回生成的 url")])])])]),t._v(" "),r("p",[r("strong",[t._v("向面试官阐明你需要写多少代码")])]),t._v(" "),r("p",[r("code",[t._v("pastes")]),t._v(" 表可以有如下结构：")]),t._v(" "),r("div",{staticClass:"language-sql extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[t._v("shortlink "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\nexpiration_length_in_minutes "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\ncreated_at "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\npaste_path "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shortlink"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("p",[t._v("我们将在 "),r("code",[t._v("shortlink")]),t._v(" 字段和 "),r("code",[t._v("created_at")]),t._v(" 字段上创建一个"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%BD%BF%E7%94%A8%E6%AD%A3%E7%A1%AE%E7%9A%84%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库索引"),r("OutboundLink")],1),t._v("，用来提高查询的速度（避免因为扫描全表导致的长时间查询）并将数据保存在内存中，从内存里面顺序读取 1MB 的数据需要大概 250 微秒，而从 SSD 上读取则需要花费 4 倍的时间，从硬盘上则需要花费 80 倍的时间。"),r("sup",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#每个程序员都应该知道的延迟数"}},[t._v(" 1")])])]),t._v(" "),r("p",[t._v("为了生成唯一的 url，我们可以：")]),t._v(" "),r("ul",[r("li",[t._v("使用 "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/MD5",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("MD5")]),r("OutboundLink")],1),t._v(" 来哈希用户的 IP 地址 + 时间戳\n"),r("ul",[r("li",[t._v("MD5 是一个普遍用来生成一个 128-bit 长度的哈希值的一种哈希方法")]),t._v(" "),r("li",[t._v("MD5 是一致分布的")]),t._v(" "),r("li",[t._v("或者我们也可以用 MD5 哈希一个随机生成的数据")])])]),t._v(" "),r("li",[t._v("用 "),r("a",{attrs:{href:"https://www.kerstner.at/2012/07/shortening-strings-using-base-62-encoding/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("Base 62")]),r("OutboundLink")],1),t._v(" 编码 MD5 哈希值\n"),r("ul",[r("li",[t._v("对于 urls，使用 Base 62 编码 "),r("code",[t._v("[a-zA-Z0-9]")]),t._v(" 是比较合适的")]),t._v(" "),r("li",[t._v("对于每一个原始输入只会有一个 hash 结果，Base 62 是确定的（不涉及随机性）")]),t._v(" "),r("li",[t._v("Base 64 是另外一个流行的编码方案，但是对于 urls，会因为额外的 "),r("code",[t._v("+")]),t._v(" 和 "),r("code",[t._v("-")]),t._v(" 字符串而产生一些问题")]),t._v(" "),r("li",[t._v("以下 "),r("a",{attrs:{href:"http://stackoverflow.com/questions/742013/how-to-code-a-url-shortener",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base 62 伪代码"),r("OutboundLink")],1),t._v(" 执行的时间复杂度是 O(k)，k 是数字的数量 = 7：")])])])]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("base_encode")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("62")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    digits "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" num "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      remainder "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" modulo"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      digits"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("push"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("remainder"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      num "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" divide"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" base"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    digits "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" digits"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reverse\n")])])]),r("ul",[r("li",[t._v("取输出的前 7 个字符，结果会有 62^7 个可能的值，应该足以满足在 3 年内处理 3.6 亿个短链接的约束：")])]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[t._v("url "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" base_encode"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("md5"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ip_address"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("timestamp"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("URL_LENGTH"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),r("p",[t._v("我们将会用一个公开的 "),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%A1%A8%E8%BF%B0%E6%80%A7%E7%8A%B6%E6%80%81%E8%BD%AC%E7%A7%BBrest",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("REST 风格接口")]),r("OutboundLink")],1),t._v("：")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST --data "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"expiration_length_in_minutes":"60", \\"paste_contents":"Hello World!"}\'')]),t._v(" https://pastebin.com/api/v1/paste\n")])])]),r("p",[t._v("Response:")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"shortlink"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foobar"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("p",[t._v("用于内部通信，我们可以用 "),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%BF%9C%E7%A8%8B%E8%BF%87%E7%A8%8B%E8%B0%83%E7%94%A8%E5%8D%8F%E8%AE%AErpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPC"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"用例-用户输入一个-paste-的-url-后可以看到它存储的内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用例-用户输入一个-paste-的-url-后可以看到它存储的内容"}},[t._v("#")]),t._v(" 用例：用户输入一个 paste 的 url 后可以看到它存储的内容")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("客户端")]),t._v(" 发送一个获取 paste 请求到 "),r("strong",[t._v("Web Server")])]),t._v(" "),r("li",[r("strong",[t._v("Web Server")]),t._v(" 转发请求给 "),r("strong",[t._v("读取接口")]),t._v(" 服务器")]),t._v(" "),r("li",[r("strong",[t._v("读取接口")]),t._v(" 服务器执行如下操作：\n"),r("ul",[r("li",[t._v("在 "),r("strong",[t._v("SQL 数据库")]),t._v(" 检查这个生成的 url\n"),r("ul",[r("li",[t._v("如果这个 url 在 "),r("strong",[t._v("SQL 数据库")]),t._v(" 里面，则从 "),r("strong",[t._v("对象存储")]),t._v(" 获取这个 paste 的内容")]),t._v(" "),r("li",[t._v("否则，返回一个错误页面给用户")])])])])])]),t._v(" "),r("p",[t._v("REST API：")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://pastebin.com/api/v1/paste?shortlink"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("foobar\n")])])]),r("p",[t._v("Response:")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"paste_contents"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:MM:SS"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expiration_length_in_minutes"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"60"')]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h3",{attrs:{id:"用例-服务跟踪分析页面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用例-服务跟踪分析页面"}},[t._v("#")]),t._v(" 用例： 服务跟踪分析页面")]),t._v(" "),r("p",[t._v("因为实时分析不是必须的，所以我们可以简单的 "),r("strong",[t._v("MapReduce")]),t._v(" "),r("strong",[t._v("Web Server")]),t._v(" 的日志，用来生成点击次数。")]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HitCounts")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MRJob"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract_url")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Extract the generated url from the log line."""')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract_year_month")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Return the year and month portions of the timestamp."""')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapper")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Parse each log line, extract and transform relevant lines.\n\n        Emit key value pairs of the form:\n\n        (2016-01, url0), 1\n        (2016-01, url0), 1\n        (2016-01, url1), 1\n        """')]),t._v("\n        url "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract_url"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        period "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract_year_month"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("period"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("reducer")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Sum values for each key.\n\n        (2016-01, url0), 2\n        (2016-01, url1), 1\n        """')]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" key"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("values"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),r("h3",{attrs:{id:"用例-服务删除过期的-pastes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用例-服务删除过期的-pastes"}},[t._v("#")]),t._v(" 用例： 服务删除过期的 pastes")]),t._v(" "),r("p",[t._v("为了删除过期的 pastes，我们可以直接搜索 "),r("strong",[t._v("SQL 数据库")]),t._v(" 中所有的过期时间比当前时间更早的记录，\n所有过期的记录将从这张表里面删除（或者将其标记为过期）。")]),t._v(" "),r("h2",{attrs:{id:"步骤四、扩展设计"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤四、扩展设计"}},[t._v("#")]),t._v(" 步骤四、扩展设计")]),t._v(" "),r("blockquote",[r("p",[t._v("给定约束条件，识别和解决瓶颈。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"http://i.imgur.com/4edXG0T.png",alt:"Imgur"}})]),t._v(" "),r("p",[r("strong",[t._v("重要提示: 不要简单的从最初的设计直接跳到最终的设计")])]),t._v(" "),r("p",[t._v("说明您将迭代地执行这样的操作：1)"),r("strong",[t._v("Benchmark/Load 测试")]),t._v("，2)"),r("strong",[t._v("Profile")]),t._v(" 出瓶颈，3)在评估替代方案和权衡时解决瓶颈，4)重复前面，可以参考"),r("RouterLink",{attrs:{to:"/01.架构/scaling_aws/"}},[t._v("在 AWS 上设计一个可以支持百万用户的系统")]),t._v("这个用来解决如何迭代地扩展初始设计的例子。")],1),t._v(" "),r("p",[t._v("重要的是讨论在初始设计中可能遇到的瓶颈，以及如何解决每个瓶颈。比如，在多个 "),r("strong",[t._v("Web 服务器")]),t._v(" 上添加 "),r("strong",[t._v("负载平衡器")]),t._v(" 可以解决哪些问题？ "),r("strong",[t._v("CDN")]),t._v(" 解决哪些问题？"),r("strong",[t._v("Master-Slave Replicas")]),t._v(" 解决哪些问题? 替代方案是什么和怎么对每一个替代方案进行权衡比较？")]),t._v(" "),r("p",[t._v("我们将介绍一些组件来完成设计，并解决可伸缩性问题。内部的负载平衡器并不能减少杂乱。")]),t._v(" "),r("p",[r("strong",[t._v("为了避免重复的讨论")]),t._v("， 参考以下"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E4%B8%BB%E9%A2%98%E7%9A%84%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("系统设计主题"),r("OutboundLink")],1),t._v("获取主要讨论要点、权衡和替代方案：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("DNS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%86%85%E5%AE%B9%E5%88%86%E5%8F%91%E7%BD%91%E7%BB%9Ccdn",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDN"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("负载均衡器"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%B0%B4%E5%B9%B3%E6%89%A9%E5%B1%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("水平扩展"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86web-%E6%9C%8D%E5%8A%A1%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("反向代理（web 服务器）"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%BA%94%E7%94%A8%E5%B1%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用层"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("缓存"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%85%B3%E7%B3%BB%E5%9E%8B%E6%95%B0%E6%8D%AE%E5%BA%93%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9Frdbms",target:"_blank",rel:"noopener noreferrer"}},[t._v("关系型数据库管理系统 (RDBMS)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%95%85%E9%9A%9C%E5%88%87%E6%8D%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL write master-slave failover"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%B8%BB%E4%BB%8E%E5%A4%8D%E5%88%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("主从复制"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%B8%80%E8%87%B4%E6%80%A7%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("一致性模式"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%8F%AF%E7%94%A8%E6%80%A7%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("可用性模式"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("分析存储数据库")]),t._v(" 可以用比如 Amazon Redshift 或者 Google BigQuery 这样的数据仓库解决方案。")]),t._v(" "),r("p",[t._v("一个像 Amazon S3 这样的 "),r("strong",[t._v("对象存储")]),t._v("，可以轻松处理每月 12.7 GB 的新内容约束。")]),t._v(" "),r("p",[t._v("要处理 "),r("em",[t._v("平均")]),t._v(" 每秒 40 读请求(峰值更高)，其中热点内容的流量应该由 "),r("strong",[t._v("内存缓存")]),t._v(" 处理，而不是数据库。"),r("strong",[t._v("内存缓存")]),t._v(" 对于处理分布不均匀的流量和流量峰值也很有用。只要副本没有陷入复制写的泥潭，"),r("strong",[t._v("SQL Read Replicas")]),t._v(" 应该能够处理缓存丢失。")]),t._v(" "),r("p",[t._v("对于单个 "),r("strong",[t._v("SQL Write Master-Slave")]),t._v("，"),r("em",[t._v("平均")]),t._v(" 每秒 4paste 写入 (峰值更高) 应该是可以做到的。否则，我们需要使用额外的 SQL 扩展模式:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%81%94%E5%90%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("联合"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%88%86%E7%89%87",target:"_blank",rel:"noopener noreferrer"}},[t._v("分片"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E9%9D%9E%E8%A7%84%E8%8C%83%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("非规范化"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#SQL%E8%B0%83%E4%BC%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL 调优"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("我们还应该考虑将一些数据移动到 "),r("strong",[t._v("NoSQL 数据库")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"额外的话题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#额外的话题"}},[t._v("#")]),t._v(" 额外的话题")]),t._v(" "),r("blockquote",[r("p",[t._v("是否更深入探讨额外主题，取决于问题的范围和面试剩余的时间。")])]),t._v(" "),r("h3",{attrs:{id:"nosql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nosql"}},[t._v("#")]),t._v(" NoSQL")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E9%94%AE-%E5%80%BC%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("键值存储"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%96%87%E6%A1%A3%E7%B1%BB%E5%9E%8B%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档存储"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%88%97%E5%9E%8B%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("列型存储"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%9B%BE%E6%95%B0%E6%8D%AE%E5%BA%93",target:"_blank",rel:"noopener noreferrer"}},[t._v("图数据库"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#sql-%E8%BF%98%E6%98%AF-nosql",target:"_blank",rel:"noopener noreferrer"}},[t._v("sql 还是 nosql"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),r("ul",[r("li",[t._v("在哪缓存\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("客户端缓存"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#cdn-%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDN 缓存"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#web-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web 服务器缓存"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库缓存"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%BA%94%E7%94%A8%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("应用缓存"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("缓存什么\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%95%B0%E6%8D%AE%E5%BA%93%E6%9F%A5%E8%AF%A2%E7%BA%A7%E5%88%AB%E7%9A%84%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库查询级别的缓存"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%AF%B9%E8%B1%A1%E7%BA%A7%E5%88%AB%E7%9A%84%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象级别的缓存"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[t._v("何时更新缓存\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%BC%93%E5%AD%98%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("缓存模式"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E7%9B%B4%E5%86%99%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("直写模式"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%9B%9E%E5%86%99%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("回写模式"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%88%B7%E6%96%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("刷新"),r("OutboundLink")],1)])])])]),t._v(" "),r("h3",{attrs:{id:"异步和微服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#异步和微服务"}},[t._v("#")]),t._v(" 异步和微服务")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息队列"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E4%BB%BB%E5%8A%A1%E9%98%9F%E5%88%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("任务队列"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%83%8C%E5%8E%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("背压"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%BE%AE%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("微服务"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通信"}},[t._v("#")]),t._v(" 通信")]),t._v(" "),r("ul",[r("li",[t._v("讨论权衡:\n"),r("ul",[r("li",[t._v("跟客户端之间的外部通信 - "),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%A1%A8%E8%BF%B0%E6%80%A7%E7%8A%B6%E6%80%81%E8%BD%AC%E7%A7%BBrest",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP APIs following REST"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("内部通信 - "),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E8%BF%9C%E7%A8%8B%E8%BF%87%E7%A8%8B%E8%B0%83%E7%94%A8%E5%8D%8F%E8%AE%AErpc",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPC"),r("OutboundLink")],1)])])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%9C%8D%E5%8A%A1%E5%8F%91%E7%8E%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务发现"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安全"}},[t._v("#")]),t._v(" 安全")]),t._v(" "),r("p",[t._v("参考"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E5%AE%89%E5%85%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("安全"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"延迟数字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#延迟数字"}},[t._v("#")]),t._v(" 延迟数字")]),t._v(" "),r("p",[t._v("见"),r("a",{attrs:{href:"https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md#%E6%AF%8F%E4%B8%AA%E7%A8%8B%E5%BA%8F%E5%91%98%E9%83%BD%E5%BA%94%E8%AF%A5%E7%9F%A5%E9%81%93%E7%9A%84%E5%BB%B6%E8%BF%9F%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("每个程序员都应该知道的延迟数"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"持续进行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#持续进行"}},[t._v("#")]),t._v(" 持续进行")]),t._v(" "),r("ul",[r("li",[t._v("继续对系统进行基准测试和监控，以在瓶颈出现时解决它们")]),t._v(" "),r("li",[t._v("扩展是一个迭代的过程")])])])}),[],!1,null,null,null);e.default=n.exports}}]);