(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{445:function(t,s,a){t.exports=a.p+"assets/img/DNS.98f8385d.svg"},524:function(t,s,a){"use strict";a.r(s);var n=a(36),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"dns-域名协议服务"}},[t._v("DNS 域名协议服务")]),t._v(" "),n("p",[t._v("dns 是域名解析协议，它负责将域名解析为具体的 ip 地址，例如 www.example.com 解析为 11.32.33.433")]),t._v(" "),n("h2",{attrs:{id:"dns-的多级寻找机制"}},[t._v("DNS 的多级寻找机制")]),t._v(" "),n("p",[t._v("dns 系统拥有本地缓存，所以它会优先查询本地缓存，这也是我们所谓的 “更改 hosts 就能访问 xx 网站” 的实现原理，因为 "),n("code",[t._v("hosts")]),t._v(" 中保存的就是域名对应的 ip 地址，当本地缓存中存在 URL 对应的 ip 地址时，就不会去请求本地域名服务器，直接返回具体的 ip 即可，当本地缓存失效之后，系统就会委托本地域名服务器 (本地 DNS  --- Local DNS，比如谷歌的 8.8.8.8，阿里的 114.114.114.114 等等) 按照域名的层级来查询")]),t._v(" "),n("blockquote",[n("p",[t._v("hosts 不是本地缓存，系统会查询 hosts 然后再去查询本地缓存，不过 hosts 的优先级大于本地缓存，hosts 存在于 Linux 的 /etc/hosts Windows 的 C:\\Windows\\System32\\drivers\\etc\\hosts 中 macOS 的 /etc/hosts 中")])]),t._v(" "),n("p",[t._v("DNS 缓存存在于浏览器和操作系统中，hosts 也会存在一定的记录，其中优先级是 hosts 最高，浏览器缓存次之，操作系统缓存最低")]),t._v(" "),n("p",[t._v("在上述的描述中，当本地无缓存目标 URL 对应的 ip 时，通常会去使用本地域名服务商去查询，比如谷歌的 8.8.8.8，如果本地域名服务商有 URL 的缓存，返回数据即可，那么，如果本地域名服务商也没有数据，它会替代用户去不断的去请求更高一级的域名服务器，从 com 这个根域名服务器为开始，就开始查询不同层级域名的 ip 地址")]),t._v(" "),n("p",[n("strong",[t._v("这是一个域名解析的步骤图")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(445),alt:"dns"}})]),t._v(" "),n("p",[t._v("需要说明的是，权威服务器返回的不一定就是 ip 地址，也可以有很多"),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/DNS%E8%AE%B0%E5%BD%95%E7%B1%BB%E5%9E%8B%E5%88%97%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("类型"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("这是一个 dns 记录的例子")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Domin（域名）")]),t._v(" "),n("th",[t._v("TTL（生存周期）")]),t._v(" "),n("th",[t._v("Class（协议类型）")]),t._v(" "),n("th",[t._v("Type（记录类型）")]),t._v(" "),n("th",[t._v("Rdata（记录数据）")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("www.example.com")]),t._v(" "),n("td",[t._v("86400")]),t._v(" "),n("td",[t._v("IN")]),t._v(" "),n("td",[t._v("A")]),t._v(" "),n("td",[t._v("2.2.2.2")])])])]),t._v(" "),n("h2",{attrs:{id:"dns-本地缓存及其优先级"}},[t._v("DNS 本地缓存及其优先级")]),t._v(" "),n("p",[t._v("在 DNS 缓存系统中，一般的查询的优先级顺序一般如下：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Hosts 文件：这是最优先的，任何在/etc/hosts 文件中定义的条目都会被直接使用，而不会发送 DNS 请求。")])]),t._v(" "),n("li",[n("p",[t._v("操作系统 DNS 缓存：如果 hosts 文件中没有相应的条目，操作系统会检查其自身的 DNS 缓存。在 macOS 中，这个缓存是由系统服务管理的，对于所有应用程序都是透明的。")])]),t._v(" "),n("li",[n("p",[t._v("浏览器 DNS 缓存：如果操作系统缓存中没有找到相应的记录，浏览器才会检查其自身的 DNS 缓存。浏览器缓存是特定于该浏览器进程的，并且在浏览器关闭后可能会被清除")])])]),t._v(" "),n("p",[t._v("为什么请求发生在浏览器，但是浏览器的缓存优先级不是最高的呢？：")]),t._v(" "),n("p",[t._v("浏览器缓存的优先级通常不会高于操作系统的 DNS 缓存或 hosts 文件中的条目。这是因为 DNS 解析是一个系统层面的操作，它发生在浏览器向 DNS 服务器发起请求之前。")]),t._v(" "),n("h2",{attrs:{id:"dns-预留技术"}},[t._v("DNS 预留技术")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//mail.example.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("dns 预留技术，通过在前端设置标签的方法，让浏览器提前对"),n("strong",[t._v("其他")]),t._v("所需的域名进行预解析，从而减少请求时间")]),t._v(" "),n("h2",{attrs:{id:"dns-的作用"}},[t._v("DNS 的作用")]),t._v(" "),n("p",[t._v("dns 其实就是用户和真实 ip 之间的桥梁，用户使用域名通过 dns 来访问网站。")]),t._v(" "),n("p",[t._v("我们在部署 dns 的时候，可以部署多个入口 ip，这样当某个 ip 挂了，其他 ip 可以继续提供服务，从而保证了服务的可用性，并且实现了负载均衡的功能，如果我们突然要更换 ip，那么就可以通过 dns 服务内部更换 ip 对客户完全无感")]),t._v(" "),n("h2",{attrs:{id:"dns-的安全性"}},[t._v("DNS 的安全性")]),t._v(" "),n("p",[t._v("最后，我们要知道，dns 服务通过多级缓存是，多级访问是有效的减少了不同层级的服务器的压力，但是同时也增加了被中间攻击的比例，分了多少层就会被攻击多少次，记不记得你浏览某个网站的时候你使用宽带上网和手机无线上网获取到的网页不一致的情况，就是因为被 dns 劫持了，某个正确 ip 被换成了广告 ip，广告 ip 将正常的网页 download 下来，然后加入广告发给你 (本来要去喝雪碧呢，tmd 饭店老板把雪碧买回来兑进去了好多白开水)")]),t._v(" "),n("p",[t._v("最近出现的 HTTP DNS 服务将原来的多级缓存多级查询的 DNS 服务给改成了基于一个 https 协议的查询服务器，一次性查询到 ip 地址，虽然增加了服务器开销和容积，但是确实减少了中间商，"),n("RouterLink",{attrs:{to:"/系统设计基础/网络在系统设计中的作用/HTTPDNS/"}},[t._v("下一节")]),t._v("我们重点谈谈 HTTP DNS 服务")],1)])}),[],!1,null,null,null);s.default=v.exports}}]);