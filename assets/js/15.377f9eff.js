(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{503:function(t,r,e){"use strict";e.r(r);var a=e(30),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"oauth-2-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth-2-0"}},[t._v("#")]),t._v(" OAuth 2.0")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://en.wikipedia.org/wiki/OAuth",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth"),e("OutboundLink")],1),t._v(" 是一个关于授权（authorization）的开放网络标准，在全世界得到广泛应用，目前的版本是 2.0 版。")])]),t._v(" "),e("p",[t._v("简单来说，"),e("strong",[t._v("OAuth 是一种授权机制。资源的所有者告诉系统，同意授权第三方应用进入系统，访问这些资源。系统从而产生一个短期的进入令牌（token），用来代替密码，供第三方应用使用。")])]),t._v(" "),e("p",[t._v("客户端必须得到用户的授权（authorization grant），才能获得令牌（access token）。")]),t._v(" "),e("p",[t._v("OAuth 2.0 定义了四种授权方式。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("授权码模式（authorization code）")])]),t._v(" "),e("li",[e("strong",[t._v("简化模式（implicit）")])]),t._v(" "),e("li",[e("strong",[t._v("密码模式（resource owner password credentials）")])]),t._v(" "),e("li",[e("strong",[t._v("客户端模式（client credentials）")])])]),t._v(" "),e("h2",{attrs:{id:"授权码模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#授权码模式"}},[t._v("#")]),t._v(" 授权码模式")]),t._v(" "),e("p",[e("strong",[t._v("授权码（authorization code）方式，指的是第三方应用先申请一个授权码，然后再用该授权码获取令牌。")])]),t._v(" "),e("p",[t._v("这种方式是最常用的流程，安全性也最高，它适用于那些有后端的 Web 应用。授权码通过前端传送，令牌则是储存在后端，而且所有与资源服务器的通信都在后端完成。这样的前后端分离，可以避免令牌泄漏。")]),t._v(" "),e("h2",{attrs:{id:"隐藏模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#隐藏模式"}},[t._v("#")]),t._v(" 隐藏模式")]),t._v(" "),e("p",[t._v("有些 Web 应用是纯前端应用，没有后端。这时就不能用上面的方式了，必须将令牌储存在前端。"),e("strong",[t._v('RFC 6749 就规定了第二种方式，允许直接向前端颁发令牌。这种方式没有授权码这个中间步骤，所以称为（授权码）"隐藏式"（implicit）。')])]),t._v(" "),e("h2",{attrs:{id:"密码模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#密码模式"}},[t._v("#")]),t._v(" 密码模式")]),t._v(" "),e("p",[e("strong",[t._v('如果你高度信任某个应用，RFC 6749 也允许用户把用户名和密码，直接告诉该应用。该应用就使用你的密码，申请令牌，这种方式称为"密码式"（password）。')])]),t._v(" "),e("h2",{attrs:{id:"客户端凭证模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端凭证模式"}},[t._v("#")]),t._v(" 客户端凭证模式")]),t._v(" "),e("p",[t._v("适用于没有前端的命令行应用，即在命令行下请求令牌。")]),t._v(" "),e("h2",{attrs:{id:"令牌的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#令牌的使用"}},[t._v("#")]),t._v(" 令牌的使用")]),t._v(" "),e("h2",{attrs:{id:"令牌的更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#令牌的更新"}},[t._v("#")]),t._v(" 令牌的更新")]),t._v(" "),e("p",[t._v('如果用户访问的时候，客户端的"访问令牌"已经过期，则需要使用"更新令牌"申请一个新的访问令牌。')]),t._v(" "),e("p",[t._v("客户端发出更新令牌的 HTTP 请求，包含以下参数：")]),t._v(" "),e("ul",[e("li",[t._v("grant"),e("em",[t._v('type：表示使用的授权模式，此处的值固定为"refresh')]),t._v('token"，必选项。')]),t._v(" "),e("li",[t._v("refresh_token：表示早前收到的更新令牌，必选项。")]),t._v(" "),e("li",[t._v("scope：表示申请的授权范围，不可以超出上一次申请的范围，如果省略该参数，则表示与上一次一致")])]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.rfcreader.com/#rfc6749",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 6749"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/04/oauth_design.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth 2.0 的一个简单解释"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解 OAuth 2.0"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Simplest Guide To OAuth 2.0"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=s.exports}}]);