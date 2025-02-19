(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{499:function(v,_,t){"use strict";t.r(_);var l=t(36),s=Object(l.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"base"}},[v._v("BASE")]),v._v(" "),t("p",[v._v("BASE：basically available eventually consistent，基本可用，最终一致主要追求的是 AP 即：高可用性")]),v._v(" "),t("p",[v._v("在正常的系统中，"),t("strong",[v._v("AP 模型永远是主流")]),v._v("，因为 CP 模型的不可用占比过大是不可接受的行为，比如每个节点的可用性为 99.9%，那么众多集群的可用性因为是乘机就会下降的非常厉害，比如变成了 99.7%，那么一个月就要有 100 多分钟的不可用时间，这对于系统来说非常的灾难")]),v._v(" "),t("p",[t("strong",[v._v("1 基本可用，2 最终一致性是 BASE 的核心思想")])]),v._v(" "),t("h2",{attrs:{id:"基本可用"}},[v._v("基本可用")]),v._v(" "),t("ul",[t("li",[v._v("服务降级，允许损失部分功能的可用性保障核心功能的可用性，服务降级来保证核心体验，比如新闻 App 不能观看视频和照片了，但是能看新闻的文字，文字乃是新闻的核心功能，或者高清图片替换为缩略图，等等方案。")]),v._v(" "),t("li",[v._v("流量削峰，错峰请求，来满足整体可用")]),v._v(" "),t("li",[v._v("延迟响应，先把需求放到消息队列中，后台慢慢处理")]),v._v(" "),t("li",[v._v("过载保护流量限流，如果数据量过大就要开始限流，直接拒绝服务")])]),v._v(" "),t("h2",{attrs:{id:"最终一致"}},[v._v("最终一致")]),v._v(" "),t("p",[v._v("最常见的一个体验，微信更新头像，你的朋友并不会立刻看到，他们甚至需要刻意点开你的头像才能看到你更新了头像")]),v._v(" "),t("p",[v._v("最终一致性的核心问题是"),t("strong",[v._v("以什么数据为准？")])]),v._v(" "),t("ul",[t("li",[v._v("以最新的写入数据为准，哪个节点最新用哪个")]),v._v(" "),t("li",[v._v("以第一次的写入数据为准")])]),v._v(" "),t("p",[v._v("那么我们该如何实现最终一致性呢？")]),v._v(" "),t("ul",[t("li",[v._v("读时修复，在读取数据时，如果数据不一致，进行修复，也就是如果系统在读取的时候检测到数据并不一致，开始自动修复数据")]),v._v(" "),t("li",[v._v("写时修复，在写入数据时，检测到数据不一致，进行修复")]),v._v(" "),t("li",[t("strong",[v._v("异步修复")]),v._v("，这个最常见，经常在后台进行测试数据，通过定时对账来检测数据的一致性，并且修复数据")])]),v._v(" "),t("p",[v._v("写时修复不需要做数据一致性的对比，性能消耗是最低的，写时修复机制通常是在后续发现数据不一致时才采取相应的修复措施，比如通过一定的信息传播机制 (类似 Gossip 协议那种节点间随机传播信息的方式)，当某个节点发现自身数据和其他节点数据不一致时，再去进行调整修复，也就是说，写的时候直接用最新的数据，然后后续在 gossip 扩散结果，用最新的值替换。")]),v._v(" "),t("p",[v._v("这里的 “最新的数据” 往往是基于当前节点所掌握的业务逻辑或应用层面的最新情况来确定的，而不是随意的数据。比如在一个分布式存储系统中，一个节点接收到用户上传的新文件内容，它就按照业务流程将这个新内容作为最新数据写入本地存储区域，而"),t("strong",[v._v("暂不考虑其他节点此刻是否有相同数据的不同版本等情况。")])]),v._v(" "),t("p",[v._v("这种事后修复的方式使得在写操作阶段可以更高效地完成，整体性能消耗相对较低。")]),v._v(" "),t("p",[v._v("在实现最终一致性的时候，同时实现自定义写一致性级别\n(All、Quorum、One、Any)，让用户可以自主选择相应的一致性级别，比如可以通过\n设置一致性级别为 All，来实现强一致性")]),v._v(" "),t("h2",{attrs:{id:"base-的实践"}},[v._v("BASE 的实践")])])}),[],!1,null,null,null);_.default=s.exports}}]);