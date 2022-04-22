(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{557:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"设计模式之享元模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之享元模式"}},[t._v("#")]),t._v(" 设计模式之享元模式")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-%E6%84%8F%E5%9B%BE"}},[t._v("1. 意图")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2-%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF"}},[t._v("2. 适用场景")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3-%E7%BB%93%E6%9E%84"}},[t._v("3. 结构")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#31-%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E"}},[t._v("3.1. 结构说明")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#32-%E7%BB%93%E6%9E%84%E4%BB%A3%E7%A0%81%E8%8C%83%E5%BC%8F"}},[t._v("3.2. 结构代码范式")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#4-%E4%BC%AA%E4%BB%A3%E7%A0%81"}},[t._v("4. 伪代码")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#5-%E6%A1%88%E4%BE%8B"}},[t._v("5. 案例")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#6-%E4%B8%8E%E5%85%B6%E4%BB%96%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%85%B3%E7%B3%BB"}},[t._v("6. 与其他模式的关系")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#7-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("7. 参考资料")])])]),t._v(" "),a("h2",{attrs:{id:"_1-意图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-意图"}},[t._v("#")]),t._v(" 1. 意图")]),t._v(" "),a("p",[a("strong",[t._v("享元模式")]),t._v(" (Flyweight) 是一种结构型设计模式，它摒弃了在每个对象中保存所有数据的方式， 通过共享多个对象所共有的相同状态， 让你能在有限的内存容量中载入更多对象。")]),t._v(" "),a("h2",{attrs:{id:"_2-适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-适用场景"}},[t._v("#")]),t._v(" 2. 适用场景")]),t._v(" "),a("ul",[a("li",[t._v("仅在程序必须支持大量对象且没有足够的内存容量时使用享元模式。")])]),t._v(" "),a("h2",{attrs:{id:"_3-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-结构"}},[t._v("#")]),t._v(" 3. 结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430182947.png",alt:"img"}})]),t._v(" "),a("h3",{attrs:{id:"_3-1-结构说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-结构说明"}},[t._v("#")]),t._v(" 3.1. 结构说明")]),t._v(" "),a("ol",[a("li",[t._v("享元模式只是一种优化。 在应用该模式之前， 你要确定程序中存在与大量类似对象同时占用内存相关的内存消耗问题， 并且确保该问题无法使用其他更好的方式来解决。")]),t._v(" "),a("li",[a("strong",[t._v("享元")]),t._v(" （Flyweight） 类包含原始对象中部分能在多个对象中共享的状态。 同一享元对象可在许多不同情景中使用。 享元中存储的状态被称为 “内在状态”。 传递给享元方法的状态被称为 “外在状态”。")]),t._v(" "),a("li",[a("strong",[t._v("情景")]),t._v(" （Context） 类包含原始对象中各不相同的外在状态。 情景与享元对象组合在一起就能表示原始对象的全部状态。")]),t._v(" "),a("li",[t._v("通常情况下， 原始对象的行为会保留在享元类中。 因此调用享元方法必须提供部分外在状态作为参数。 但你也可将行为移动到情景类中， 然后将连入的享元作为单纯的数据对象。")]),t._v(" "),a("li",[a("strong",[t._v("客户端")]),t._v(" （Client） 负责计算或存储享元的外在状态。 在客户端看来， 享元是一种可在运行时进行配置的模板对象， 具体的配置方式为向其方法中传入一些情景数据参数。")]),t._v(" "),a("li",[a("strong",[t._v("享元工厂")]),t._v(" （Flyweight Factory） 会对已有享元的缓存池进行管理。 有了工厂后， 客户端就无需直接创建享元， 它们只需调用工厂并向其传递目标享元的一些内在状态即可。 工厂会根据参数在之前已创建的享元中进行查找， 如果找到满足条件的享元就将其返回； 如果没有找到就根据参数新建享元。")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-结构代码范式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-结构代码范式"}},[t._v("#")]),t._v(" 3.2. 结构代码范式")]),t._v(" "),a("p",[a("strong",[t._v("Flyweight")]),t._v(" : 它是所有具体享元类的超类或接口，通过这个接口，Flyweight 可以接受并作用于外部状态。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("ConcreteFlyweight")]),t._v(" : 是继承 Flyweight 超类或实现 Flyweight 接口，并为内部状态增加存储空间。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteFlyweight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"共享的Flyweight : "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("UnsharedConcreteFlyweight")]),t._v(" : 指那些不需要共享的 Flyweight 子类，因为 Flyweight 接口共享成为可能，但它并不强制共享。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnsharedConcreteFlyweight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"不共享的Flyweight : "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("FlywightFactory")]),t._v(" :是一个享元工厂，用来创建并管理 Flyweight 对象。它主要是用来确保合理地共享 Flyweight ，当用户请求一个 Flyweight 时， FlyweightFactory 对象提供一个已创建的实例或创建一个（如果对象不存在的话）。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlywightFactory")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hashtable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" flyweights "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hashtable")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlywightFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        flyweights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteFlyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        flyweights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Y"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteFlyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        flyweights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteFlyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFlyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("flyweights"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("客户端")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlyweightPattern")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" extrinsicstates "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlywightFactory")]),t._v(" factory "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlywightFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),t._v(" fx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFlyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"X"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),t._v(" fy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFlyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Y"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),t._v(" fz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFlyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Flyweight")]),t._v(" uf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UnsharedConcreteFlyweight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        uf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("extrinsicstates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("输出")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("共享的Flyweight : 1\n共享的Flyweight : 2\n共享的Flyweight : 3\n不共享的Flyweight : 4\n")])])]),a("h2",{attrs:{id:"_4-伪代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-伪代码"}},[t._v("#")]),t._v(" 4. 伪代码")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430183339.png",alt:"img"}})]),t._v(" "),a("p",[t._v("在本例中， "),a("strong",[t._v("享元")]),t._v("模式能有效减少在画布上渲染数百万个树状对象时所需的内存。")]),t._v(" "),a("p",[t._v("该模式从主要的 "),a("code",[t._v("树")]),t._v("Tree 类中抽取内在状态， 并将其移动到享元类 "),a("code",[t._v("树种类")]),t._v("Tree­Type 之中。")]),t._v(" "),a("p",[t._v("最初程序需要在多个对象中存储相同数据， 而现在仅需在几个享元对象中保存数据， 然后在作为情景的 "),a("code",[t._v("树")]),t._v("对象中连入享元即可。 客户端代码使用享元工厂创建树对象并封装搜索指定对象的复杂行为， 并能在需要时复用对象。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 享元类包含一个树的部分状态。这些成员变量保存的数值对于特定树而言是唯一")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 的。例如，你在这里找不到树的坐标。但这里有很多树木之间所共有的纹理和颜")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 色。由于这些数据的体积通常非常大，所以如果让每棵树都其进行保存的话将耗")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 费大量内存。因此，我们可将纹理、颜色和其他重复数据导出到一个单独的对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中，然后让众多的单个树对象去引用它。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeType")]),t._v(" is\n    field name\n    field color\n    field texture\n    constructor "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" texture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 创建特定类型、颜色和纹理的位图。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 在画布坐标 (X,Y) 处绘制位图。")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 享元工厂决定是否复用已有享元或者创建一个新的对象。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeFactory")]),t._v(" is\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" field treeTypes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" collection of tree types\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTreeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" texture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" treeTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" texture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" texture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            treeTypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" type\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 情景对象包含树状态的外在部分。程序中可以创建数十亿个此类对象，因为它们")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 体积很小：仅有两个整型坐标和一个引用成员变量。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tree")]),t._v(" is\n    field x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y\n    field type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeType")]),t._v("\n    constructor "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 树（Tree）和森林（Forest）类是享元的客户端。如果不打算继续对树类进行开")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发，你可以将它们合并。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Forest")]),t._v(" is\n    field trees"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" collection of "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Trees")]),t._v("\n\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plantTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" texture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTreeType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" texture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        tree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        trees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        foreach "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tree in trees"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n            tree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-案例"}},[t._v("#")]),t._v(" 5. 案例")]),t._v(" "),a("p",[a("strong",[t._v("使用示例：")]),t._v(" 享元模式只有一个目的： 将内存消耗最小化。 如果你的程序没有遇到内存容量不足的问题， 则可以暂时忽略该模式。")]),t._v(" "),a("p",[t._v("享元模式在核心 Java 程序库中的示例：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#valueOf-int-",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("java.lang.Integer#valueOf(int)")]),a("OutboundLink")],1),t._v(" （以及 "),a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html#valueOf-boolean-",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Boolean")]),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Byte.html#valueOf-byte-",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Byte")]),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Character.html#valueOf-char-",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Character")]),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Short.html#valueOf-short-",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Short")]),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Long.html#valueOf-long-",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Long")]),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html#valueOf-long-int-",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Big­Decimal")]),a("OutboundLink")],1),t._v("）")])]),t._v(" "),a("p",[a("strong",[t._v("识别方法")]),t._v("： 享元可以通过构建方法来识别， 它会返回缓存对象而不是创建新的对象。")]),t._v(" "),a("h2",{attrs:{id:"_6-与其他模式的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-与其他模式的关系"}},[t._v("#")]),t._v(" 6. 与其他模式的关系")]),t._v(" "),a("ul",[a("li",[t._v("你可以使用"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"}},[t._v("享元模式"),a("OutboundLink")],1),t._v("实现"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合模式"),a("OutboundLink")],1),t._v("树的共享叶节点以节省内存。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"}},[t._v("享元"),a("OutboundLink")],1),t._v("展示了如何生成大量的小型对象， "),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"}},[t._v("外观模式"),a("OutboundLink")],1),t._v("则展示了如何用一个对象来代表整个子系统。")]),t._v(" "),a("li",[t._v("如果你能将对象的所有共享状态简化为一个享元对象， 那么"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"}},[t._v("享元"),a("OutboundLink")],1),t._v("就和"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"}},[t._v("单例模式"),a("OutboundLink")],1),t._v("类似了。 但这两个模式有两个根本性的不同。\n"),a("ol",[a("li",[t._v("只会有一个单例实体， 但是"),a("em",[t._v("享元")]),t._v("类可以有多个实体， 各实体的内在状态也可以不同。")]),t._v(" "),a("li",[a("em",[t._v("单例")]),t._v("对象可以是可变的。 享元对象是不可变的。")])])])]),t._v(" "),a("h2",{attrs:{id:"_7-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-参考资料"}},[t._v("#")]),t._v(" 7. 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Head First 设计模式》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《大话设计模式》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计模式教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);