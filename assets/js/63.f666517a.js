(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{551:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"设计模式之单例模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之单例模式"}},[t._v("#")]),t._v(" 设计模式之单例模式")]),t._v(" "),a("h2",{attrs:{id:"_1-意图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-意图"}},[t._v("#")]),t._v(" 1. 意图")]),t._v(" "),a("p",[a("strong",[t._v("单例模式")]),t._v("（Singleton）是一种创建型设计模式， 让你能够保证一个类只有一个实例， 并提供一个访问该实例的全局节点。")]),t._v(" "),a("p",[a("strong",[t._v("单例")]),t._v(" （Singleton） 类声明了一个名为 "),a("code",[t._v("get­Instance")]),t._v(" 获取实例的静态方法来返回其所属类的一个相同实例。")]),t._v(" "),a("p",[t._v("单例的构造函数必须对客户端 （Client） 代码隐藏。 调用 "),a("code",[t._v("get­Instance")]),t._v(" 方法必须是获取单例对象的唯一方式。")]),t._v(" "),a("p",[t._v("所有单例的实现都包含以下两个相同的步骤：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("将默认构造函数设为私有")]),t._v("， 防止其他对象使用单例类的 "),a("code",[t._v("new")]),t._v("运算符。")]),t._v(" "),a("li",[a("strong",[t._v("新建一个静态构建方法作为构造函数")]),t._v("。 该函数会 “偷偷” 调用私有构造函数来创建对象， 并将其保存在一个静态成员变量中。 此后所有对于该函数的调用都将返回这一缓存对象。")])]),t._v(" "),a("p",[t._v("如果你的代码能够访问单例类， 那它就能调用单例类的静态方法。 无论何时调用该方法， 它总是会返回相同的对象。")]),t._v(" "),a("p",[t._v("单例模式的优点：")]),t._v(" "),a("ul",[a("li",[t._v("✔ 你可以保证一个类只有一个实例。")]),t._v(" "),a("li",[t._v("✔ 你获得了一个指向该实例的全局访问节点。")]),t._v(" "),a("li",[t._v("✔ 仅在首次请求单例对象时对其进行初始化。")])]),t._v(" "),a("p",[t._v("单例模式的缺点：")]),t._v(" "),a("ul",[a("li",[t._v("❌ 违反了"),a("em",[t._v("单一职责原则")]),t._v("。 该模式同时解决了两个问题。")]),t._v(" "),a("li",[t._v("❌ 单例模式可能掩盖不良设计， 比如程序各组件之间相互了解过多等。")]),t._v(" "),a("li",[t._v("❌ 该模式在多线程环境下需要进行特殊处理， 避免多个线程多次创建单例对象。")]),t._v(" "),a("li",[t._v("❌ 单例的客户端代码单元测试可能会比较困难， 因为许多测试框架以基于继承的方式创建模拟对象。 由于单例类的构造函数是私有的， 而且绝大部分语言无法重写静态方法， 所以你需要想出仔细考虑模拟单例的方法。 要么干脆不编写测试代码， 或者不使用单例模式。")])]),t._v(" "),a("h2",{attrs:{id:"_2-适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-适用场景"}},[t._v("#")]),t._v(" 2. 适用场景")]),t._v(" "),a("ul",[a("li",[t._v("如果程序中的某个类对于所有客户端只有一个可用的实例， 可以使用单例模式。\n⚡ 单例模式禁止通过除特殊构建方法以外的任何方式来创建自身类的对象。 该方法可以创建一个新对象， 但如果该对象已经被创建， 则返回已有的对象。")]),t._v(" "),a("li",[t._v("如果你需要更加严格地控制全局变量， 可以使用单例模式。\n⚡ 单例模式与全局变量不同， 它保证类只存在一个实例。 除了单例类自己以外， 无法通过任何方式替换缓存的实例。")])]),t._v(" "),a("p",[t._v("请注意， 你可以随时调整限制并设定生成单例实例的数量， 只需修改 "),a("code",[t._v("获取实例")]),t._v(" 方法， 即 "),a("code",[t._v("getInstance")]),t._v(" 中的代码即可实现。")]),t._v(" "),a("p",[t._v("举例来说，一些资源管理器常常设计成单例模式。")]),t._v(" "),a("p",[t._v("在计算机系统中，需要管理的资源包括软件外部资源，譬如每台计算机可以有若干个打印机，但只能有一个 Printer Spooler， 以避免两个打印作业同时输出到打印机中。")]),t._v(" "),a("p",[t._v("每台计算机可以有若干通信端口，系统应当集中管理这些通信端口，以避免一个通信端口同时被两个请求同时调用。任务管理器中难以启动两个相同的 task。")]),t._v(" "),a("h2",{attrs:{id:"_3-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-结构"}},[t._v("#")]),t._v(" 3. 结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210517200626.png",alt:"img"}})]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("单例")]),t._v(" （Singleton） 类声明了一个名为 "),a("code",[t._v("get­Instance")]),t._v("获取实例的静态方法来返回其所属类的一个相同实例。\n"),a("ul",[a("li",[t._v("单例的构造函数必须对客户端 （Client） 代码隐藏。 调用 "),a("code",[t._v("获取实例")]),t._v("方法必须是获取单例对象的唯一方式。")])])])]),t._v(" "),a("h2",{attrs:{id:"_4-伪代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-伪代码"}},[t._v("#")]),t._v(" 4. 伪代码")]),t._v(" "),a("p",[t._v("在本例中， 数据库连接类即是一个"),a("strong",[t._v("单例")]),t._v("。")]),t._v(" "),a("p",[t._v("该类不提供公有构造函数， 因此获取该对象的唯一方式是调用 "),a("code",[t._v("获取实例")]),t._v("方法。 该方法将缓存首次生成的对象， 并为所有后续调用返回该对象。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据库类会对`getInstance（获取实例）`方法进行定义以让客户端在程序各处")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 都能访问相同的数据库连接实例。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),t._v(" is\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存单例实例的成员变量必须被声明为静态类型。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" field instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单例的构造函数必须永远是私有类型，以防止使用`new`运算符直接调用构")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 造方法。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" constructor "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 部分初始化代码（例如到数据库服务器的实际连接）。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于控制对单例实例的访问权限的静态方法。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" then\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("acquireThreadLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and then\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保在该线程等待解锁时，其他线程没有初始化该实例。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" then\n                    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后，任何单例都必须定义一些可在其实例上执行的业务逻辑。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如应用的所有数据库查询请求都需要通过该方法进行。因此，你可以")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里添加限流或缓冲逻辑。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" is\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT ..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT ..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 `bar` 和 `foo` 中将包含同一个对象。")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-案例"}},[t._v("#")]),t._v(" 5. 案例")]),t._v(" "),a("p",[a("strong",[t._v("使用示例：")]),t._v(" 许多开发者将单例模式视为一种反模式。 因此它在 Java 代码中的使用频率正在逐步减少。")]),t._v(" "),a("p",[t._v("尽管如此， Java 核心程序库中仍有相当多的单例示例：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#getRuntime--",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("java.lang.Runtime#getRuntime()")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/awt/Desktop.html#getDesktop--",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("java.awt.Desktop#getDesktop()")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/lang/System.html#getSecurityManager--",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("java.lang.System#getSecurityManager()")]),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("识别方法：")]),t._v(" 单例可以通过返回相同缓存对象的静态构建方法来识别。")]),t._v(" "),a("h3",{attrs:{id:"_5-1-数据库连接类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-数据库连接类"}},[t._v("#")]),t._v(" 5.1. 数据库连接类")]),t._v(" "),a("p",[t._v("数据库连接类即是一个"),a("strong",[t._v("单例")]),t._v("。")]),t._v(" "),a("p",[t._v("该类不提供公有构造函数， 因此获取该对象的唯一方式是调用 "),a("code",[t._v("获取实例")]),t._v("方法。 该方法将缓存首次生成的对象， 并为所有后续调用返回该对象。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据库类会对`getInstance（获取实例）`方法进行定义以让客户端在程序各处")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 都能访问相同的数据库连接实例。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),t._v(" is\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 保存单例实例的成员变量必须被声明为静态类型。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" field instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单例的构造函数必须永远是私有类型，以防止使用`new`运算符直接调用构")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 造方法。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" constructor "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 部分初始化代码（例如到数据库服务器的实际连接）。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于控制对单例实例的访问权限的静态方法。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" then\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("acquireThreadLock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" and then\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保在该线程等待解锁时，其他线程没有初始化该实例。")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" then\n                    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后，任何单例都必须定义一些可在其实例上执行的业务逻辑。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如应用的所有数据库查询请求都需要通过该方法进行。因此，你可以")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里添加限流或缓冲逻辑。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Application")]),t._v(" is\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT ..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT ..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 `bar` 和 `foo` 中将包含同一个对象。")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-2-懒汉式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-懒汉式"}},[t._v("#")]),t._v(" 5.2. 懒汉式")]),t._v(" "),a("p",[t._v("懒汉式的实现思路是：你不找懒汉，懒汉根本就懒得去初始化自己。")]),t._v(" "),a("p",[a("code",[t._v("instance")]),t._v(" 初始时没有初始化，只有当第一次调 "),a("code",[t._v("getInstance()")]),t._v(" 时才创建实例。")]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：当有两个线程调 "),a("code",[t._v("getInstance()")]),t._v(" 方法，当它们同时执行到 "),a("code",[t._v("if (null == instance)")]),t._v(" 这行代码，"),a("code",[t._v("instance")]),t._v(" 为 "),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("p",[t._v("继续向下执行，会生成两个实例，违背了单例模式的初衷。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LazySingleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LazySingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Singleton()"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LazySingleton")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LazySingleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LazySingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-3-饿汉式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-饿汉式"}},[t._v("#")]),t._v(" 5.3. 饿汉式")]),t._v(" "),a("p",[t._v("懒汉式的实现思路是：饿汉根本等不及别人来找他，不管三七二十一先初始化了自身的实例，生怕自己饿着了。")]),t._v(" "),a("p",[t._v("类默认先直接初始化一个实例，以后调用 "),a("code",[t._v("getInstance()")]),t._v(" 总是返回这个已创建好的实例。")]),t._v(" "),a("p",[a("strong",[t._v("缺点")]),t._v("：在没有必要获取实例时，已经预先产生了开销。")]),t._v(" "),a("p",[a("strong",[t._v("优点")]),t._v("：规避了懒汉式方法的线程问题，不用显示编写线程安全代码。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HungerSinleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HungerSinleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Singleton()"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HungerSinleton")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HungerSinleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HungerSinleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-4-双重锁的形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-双重锁的形式"}},[t._v("#")]),t._v(" 5.4. 双重锁的形式")]),t._v(" "),a("p",[t._v("如果既不想在没有调用 "),a("code",[t._v("getInstance(")]),t._v(") 方法时产生开销，又不想发生线程安全问题，就可以采用双重锁的形式。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncSingleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncSingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Singleton()"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncSingleton")]),t._v(" instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncSingleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncSingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SyncSingleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("strong",[t._v("注：在外面判断了 instance 实例是否存在，为什么在锁定后又要在内部又判断一次？")])]),t._v(" "),a("p",[t._v("这是因为，如果 "),a("code",[t._v("instance")]),t._v(" 为 "),a("code",[t._v("null")]),t._v(" 时有两个线程同时调用 "),a("code",[t._v("getInstance()")]),t._v("，由于 "),a("code",[t._v("synchronized")]),t._v(" 机制，只允许一个线程进入，另一个需要等待。")]),t._v(" "),a("p",[t._v("这时如果没有第二道 "),a("code",[t._v("instance")]),t._v(" 是否为 "),a("code",[t._v("null")]),t._v(" 的判断，就可能发生第一个线程创建一个实例，而第二个线程又创建一个实例的情况。")])]),t._v(" "),a("h2",{attrs:{id:"_6-与其他模式的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-与其他模式的关系"}},[t._v("#")]),t._v(" 6. 与其他模式的关系")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/facade",target:"_blank",rel:"noopener noreferrer"}},[t._v("外观模式"),a("OutboundLink")],1),t._v("类通常可以转换为"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"}},[t._v("单例模式"),a("OutboundLink")],1),t._v("类， 因为在大部分情况下一个外观对象就足够了。")]),t._v(" "),a("li",[t._v("如果你能将对象的所有共享状态简化为一个享元对象， 那么"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/flyweight",target:"_blank",rel:"noopener noreferrer"}},[t._v("享元模式"),a("OutboundLink")],1),t._v("就和"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"}},[t._v("单例"),a("OutboundLink")],1),t._v("类似了。 但这两个模式有两个根本性的不同。\n"),a("ol",[a("li",[t._v("只会有一个单例实体， 但是"),a("em",[t._v("享元")]),t._v("类可以有多个实体， 各实体的内在状态也可以不同。")]),t._v(" "),a("li",[a("em",[t._v("单例")]),t._v("对象可以是可变的。 享元对象是不可变的。")])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象工厂模式"),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"}},[t._v("生成器模式"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/prototype",target:"_blank",rel:"noopener noreferrer"}},[t._v("原型模式"),a("OutboundLink")],1),t._v("都可以用"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"}},[t._v("单例"),a("OutboundLink")],1),t._v("来实现。")])]),t._v(" "),a("h2",{attrs:{id:"_7-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-参考资料"}},[t._v("#")]),t._v(" 7. 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Head First 设计模式》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《大话设计模式》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计模式教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);