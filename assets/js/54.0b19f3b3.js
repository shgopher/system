(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{498:function(t,v,_){"use strict";_.r(v);var n=_(36),r=Object(n.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"acid"}},[t._v("ACID")]),t._v(" "),_("p",[t._v("ACID 的含义是：Atomicity (原子性)、Isolation (隔离性)、Durability (持久性)，Consistency (一致性)，单机模式下，使用 AID 的特性共同构建了 C 的结果。")]),t._v(" "),_("p",[t._v("在分布式的场景下，你可以理解为这个理论就是 CAP 中的 CP 模式")]),t._v(" "),_("p",[t._v("在分布式中如果追求 CP 模式，通常是二阶段提交协议，以及 TCC try-confirm-cancel，以及满足幂等性")]),t._v(" "),_("h2",{attrs:{id:"二阶段提交协议"}},[t._v("二阶段提交协议")]),t._v(" "),_("p",[t._v("通过二阶段协商来完成一个提交操作，当我们要提交某个需求时，首先进入"),_("strong",[t._v("投票环节")]),t._v("，这个时候我们是做的"),_("strong",[t._v("准备工作")]),t._v("，比如执行本地事务但是"),_("strong",[t._v("暂时不提交")]),t._v("，"),_("strong",[t._v("如果此次投票结果不通过，这个本地事务会回滚操作")])]),t._v(" "),_("p",[t._v("当所有人都同意，或者超过某个人数的人同意之后，我们才开始提交最终的结果，这个时候就是执行具体的操作，我们会通过"),_("strong",[t._v("分布式事务")]),t._v("的方式确保所有的节点都能执行最终的决定。")]),t._v(" "),_("p",[t._v("在一个参与者投票要求提交事务之前，它必须保证能执行提交协议中自己的一部分职能，即使这个节点出现故障或者被替换，所以我们必须在代码测基于保证")]),t._v(" "),_("h2",{attrs:{id:"tcc"}},[t._v("TCC")]),t._v(" "),_("p",[t._v("try confirm cancel 尝试-确认-取消，tcc 是对于二阶段提交的具体操作")]),t._v(" "),_("p",[t._v("tcc 的本质是补偿事务，它的核心思想是针对每一个操作都注册一个与其相对应的确认操作和补偿操作 (撤销操作)")]),t._v(" "),_("p",[_("strong",[t._v("TCC 模型是分布式事务的核心思想")])]),t._v(" "),_("h2",{attrs:{id:"幂等性"}},[t._v("幂等性")]),t._v(" "),_("p",[t._v("保证某次操作，不论是多少次都会得到统一的结果，比如扣费，不论我点击了几次按钮，此次订单都必须只能扣费一次，这就是幂等性。")]),t._v(" "),_("h2",{attrs:{id:"分布式事务的局限性"}},[t._v("分布式事务的局限性")]),t._v(" "),_("p",[t._v("建议在开发分布式系统的时候，如果不是必须，尽量不要去实现分布式事务，强一致性 (比如：raft) 和最终一致性 (比如：gossip) 更加合适")])])}),[],!1,null,null,null);v.default=r.exports}}]);