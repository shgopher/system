(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{517:function(s,t,a){"use strict";a.r(t);var n=a(36),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"凭证"}},[s._v("凭证")]),s._v(" "),a("ul",[a("li",[s._v("Coookie-Session")]),s._v(" "),a("li",[s._v("JWT")])]),s._v(" "),a("p",[s._v("所谓凭证其实就是在前面章节授权中提到的令牌。")]),s._v(" "),a("p",[s._v("凭证存储在哪里一直都有争议，客户端还是服务端？以 http 协议的 cookie session 机制来说，服务端存储令牌实际的内容，客户端仅仅将存储代表令牌的名字存放在 cookie 中。")]),s._v(" "),a("p",[s._v("不过在分布式架构中，我们采用的 JWT 方案则是存储在了客户端上。")]),s._v(" "),a("h2",{attrs:{id:"cookie-session"}},[s._v("Cookie-Session")]),s._v(" "),a("p",[s._v("一般来说，系统会把状态信息保存在服务端，在 Cookie 里只传输的是一个无字面意义的、不重复的字符串，习惯上以 sessionid 或者 jsessionid 为名")]),s._v(" "),a("p",[s._v("服务器拿这个字符串为 Key，在内存中开辟一块空间，以 Key/Entity 的结构存储每一个在线用户的上下文状态，再辅以一些超时自动清理之类的管理措施。")]),s._v(" "),a("p",[s._v("在单点方案的架构中，cookie session 非常的好用，因为它将最危险的数据都保存在了服务器中，并且依靠客户端的同源策略 (同源策略：同源是指协议、域名、端口号相同) 来保证数据的安全性。）已经 https 加密来保证整个过程的安全，并且，服务端可以主动的控制整个状态的管理，比如可以强制某个用户下线。")]),s._v(" "),a("p",[s._v("但是在分布式架构中，cookie session 就存在问题了。因为它无法进行水平的扩展，如果部署的是一个集群，由于 session 基本上存在于内存中，如果要部署集群它必须经过改造，比如")]),s._v(" "),a("ul",[a("li",[s._v("牺牲集群的一致性，将均衡器采用亲和式 (亲和式：将来自同一个客户端或会话的请求，在一定时间内持续地发送到同一个后端服务器) 的负载均衡算法，每一个节点都保存不同的用户状态，但是一旦某个节点失效，数据状态完全丢失")]),s._v(" "),a("li",[s._v("牺牲集群的可用性，所有节点都保存全部的信息，比如可以使用传播的方案让所有数据都最终一致 (比如 gossip 算法)，但是存储数据很大，同步成本也非常的高")]),s._v(" "),a("li",[s._v("牺牲集群的分区容错性，所有集群共同使用一个单点存储 session，但是一旦该节点失效，数据状态完全丢失，不过倒是可以将这个所谓的单点改成一个集群，这样就可以解决问题了。")])]),s._v(" "),a("h2",{attrs:{id:"jwt"}},[s._v("JWT")]),s._v(" "),a("p",[s._v("cookie -session 无法适配一般的分布式架构，还有，如果是多方系统呢？就更不可能使用 cookie session 了，即便是服务端之间共享了数据，客户端的 cookie 也无法共享跨域，所以当服务器存在多个，但是客户端只有一个的时候，把状态保存在客户端才是唯一的选择，不过信息泄露的问题必须解决，那么就是使用 JWT")]),s._v(" "),a("p",[s._v("JWT (JSON Web Token) 是一种用于在分布式系统中传递和验证身份信息的开放标准，经常跟第二章中的 oauth2 协议一起使用。")]),s._v(" "),a("p",[s._v("一个 jwt 案例")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("GET /restful/products/1 HTTP/1.1\nHost: n.cn\nConnection: keep-alive\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJpY3lmZW5peCIsInNjb3BlIjpbIkFMTCJdLCJleHAiOjE1ODQ5NDg5NDcsImF1dGhvcml0aWVzIjpbIlJPTEVfVVNFUiIsIlJPTEVfQURNSU4iXSwianRpIjoiOWQ3NzU4NmEtM2Y0Zi00Y2JiLTk5MjQtZmUyZjc3ZGZhMzNkIiwiY2xpZW50X2lkIjoiYm9va3N0b3JlX2Zyb250ZW5kIiwidXNlcm5hbWUiOiJpY3lmZW5peCJ9.539WMzbjv63wBtx4ytYYw_Fo1ECG_9vsgAn8bheflL8\n\n")])])]),a("p",[s._v("请注意这里的一大串数据并不是加密，而是转码，base64 转码而已，所以 jwt 是不加密的，它只解决了篡改的问题，至于为什么不加密，主要是加密也没有必要。")]),s._v(" "),a("p",[s._v("那么 jwt 的数据分为三个部分")]),s._v(" "),a("p",[s._v("令牌头：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"alg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HS256"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typ"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JWT"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("主要是描述了令牌的类型 (type：JWT)，以及令牌的算法 (alg：HS256)")]),s._v(" "),a("p",[s._v("负载 payload，这是令牌真正向服务端传递的消息：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用户名")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"authorities"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 权限")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ROLE_USER"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 普通用户")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ROLE_ADMIN"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 管理员")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ALL"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全部权限")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1584948947")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 过期时间")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jti"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9d77586a-3f4f-4cbb-9924-fe2f77dfa33d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 令牌唯一标识")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"client_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bookst-frontend"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 客户端标识")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("iss (Issuer)：签发人。")]),s._v(" "),a("li",[s._v("exp (Expiration Time)：令牌过期时间。")]),s._v(" "),a("li",[s._v("sub (Subject)：主题。")]),s._v(" "),a("li",[s._v("aud (Audience)：令牌受众。")]),s._v(" "),a("li",[s._v("nbf (Not Before)：令牌生效时间。")]),s._v(" "),a("li",[s._v("iat (Issued At)：令牌签发时间。")]),s._v(" "),a("li",[s._v("jti (JWT ID)：令牌编号。")])]),s._v(" "),a("p",[s._v("签名 signature，使用在对象头中公开的特定的签名算法，通过特定的密钥 (服务器保密，不公开) 对前面的 header 和 payload 进行加密计算，比如 sha256：")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("HMACSHA256(base64UrlEncode(header) + "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),s._v(" + base64UrlEncode(payload)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" secret)\n")])])]),a("p",[s._v("其中 HMMC 是散列消息认证码，一种带有密钥的哈希摘要算法，就是把密钥加上盐混合跟内容一起做哈希摘要")]),s._v(" "),a("p",[s._v("HMAC 哈希与普通哈希算法的差别是：普通的哈希算法通过 Hash 函数结果易变性保证了原有内容未被篡改，HMAC "),a("strong",[s._v("不仅保证了内容未被篡改过")]),s._v("，"),a("em",[a("strong",[s._v("还保证了该哈希确实是由密钥的持有人所生成的")])])]),s._v(" "),a("p",[s._v("jwt 默认的签名算法是 HMACSHA256，是一种带有密钥的哈希摘要算法，"),a("strong",[s._v("加解密的过程只能由中心化的授权服务来提供")]),s._v("不过这种算法只能用于授权服务和应用服务处于同一进程的单体服务，如果是分布式甚至是多方系统下，通常要采用"),a("strong",[s._v("非对称加密的算法")]),s._v("，(比如 RSA SHA256) 来完成签名，授权服务端持有签名的私钥，还对其他服务器公开一个公钥，其他服务器可以通过公钥来验签，从而实现跨系统的认证。")]),s._v(" "),a("blockquote",[a("p",[s._v("对称加密：在传输过程中，主要传输的是加密后的消息本身。如果要加密一个文件或者一段长消息，对称加密会将整个内容进行加密后传输。")])]),s._v(" "),a("blockquote",[a("p",[s._v("非对称加密：在实际应用中，非对称加密通常不会直接用于对大量数据，只是传输一些关键的小信息，如对称加密的密钥 (用于后续大量数据的对称加密通信) 或者数字签名等短信息，非对称加密就很合适，")])]),s._v(" "),a("blockquote",[a("p",[s._v("在实际应用中，往往是将非对称加密和对称加密结合使用。例如，在安全的网络通信中，首先使用非对称加密来传输对称加密的密钥，这个密钥长度相对较短。然后使用对称加密来传输大量的实际数据，这样可以充分利用对称加密的高效性和非对称加密的安全性。")])]),s._v(" "),a("h3",{attrs:{id:"jwt-的缺陷"}},[s._v("JWT 的缺陷")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("令牌难以主动失效，理论上令牌一旦签发就跟授权服务器没有关系了，比如要求一个用户只能在一台设备上登录，在 B 设备登录后，之前已经登录过的 A 设备就应该自动退出，如果使用 JWT，那么就必须设置一个黑名单的逻辑，把要主动失效的令牌几种存储")])]),s._v(" "),a("li",[a("p",[s._v("相对更容易遭受重放攻击，建议的解决方案是在信道层次，比如启用 HTTPS")])]),s._v(" "),a("li",[a("p",[s._v("只能携带相当有限的数据")])]),s._v(" "),a("li",[a("p",[s._v("必须考虑令牌在客户端如何存储")])]),s._v(" "),a("li",[a("p",[s._v("无状态也不总是好的")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);