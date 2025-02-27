# gossip 无主方案最终一致性共识算法

基本原理是这样的：
- 选择一个固定的传播周期，比如一秒钟，随机选择它的相连的 k 个节点来传播消息
- 每一个节点收到信息后，如果是一个新的消息，将在下一个周期内选择除了发送给他的节点之外的相连 k 个节点，知道所有节点都收到了信息

![gossip1](./gossip1.gif)

Gossip 对网络节点的连通性和稳定性几乎没有任何要求

它仅仅要求跟部分节点连通，并没有要求能全连通。

它能容忍节点的随意减少或者增加，随意宕机或者重启，新增的节点会最终和其他的节点保持一致，gossip 是无主方案，人人平等，完全去中心化的集群系统，所以其鲁棒性 (高可用行) 非常的强

gossip 常常用在公众互联网环境中

gossip 的缺陷也很明显，由于消息是多轮次的散播来达成全网，所以它必然会存在全网节点状态不一致的情况，另外它不可避免的会发生多个重复消息发送给同一节点的问题。
## 反熵
其实，在实现反熵的时候，主要有推、拉和推拉三种方式。

- 推方式，就是将自己的所有副本数据，推给对方
- 拉方式，就是拉取对方的所有副本数据，修复自己副本中的熵
- 推拉这个方式就很好理解了，这个方式就是同时修复自己副本和对方副本中的熵

因为反熵需要节点两两交换和比对自己所有的数据，执行反熵时通讯，成本会很高，不建议你在实际场景中频繁执行反熵
## 谣言传播
它指的是当一个节点有了新数据后，这个节点变成活跃状态，并周期性地联系其他节点向其发送新数据，直到所有的节点都存储了该新数据


## 新节点加入时信息传递情况
多个节点共同参与传递：

当一个新节点加入到采用 Gossip 协议的系统中时，并不是由某一个特定节点将所有信息传递给它，而是多个临近节点都会参与这个信息传递的过程。系统中的已有节点会按照各自的 Gossip 周期 (即定期与其他节点交换信息的时间间隔)，在与新节点建立连接通信后，将自身所知晓的部分信息传递过去。例如，在一个分布式集群中，节点 A、B、C 等在自己的下一轮 Gossip 通信轮次中发现了新加入的节点 D，它们就会分别把一些信息发送给节点 D。这些节点可能处于不同的网络位置或者具有不同的 “社交圈” (在 Gossip 协议里就是与之通信的其他节点集合)，所以传递的信息也各有侧重且互为补充。

逐步收敛达成一致认知：

随着时间的推移，新节点 D 会不断接收到来自不同临近节点传来的信息，经过多轮的交互，它会逐渐获取到整个系统比较全面的信息，比如集群中其他节点的存在情况、服务状态、数据版本等相关信息。整个集群中的所有节点也会因为新节点的加入而重新调整信息传播范围，最终各个节点对集群的整体认知 (包括新节点相关信息) 会再次趋向一致，这是一个不断动态调整和收敛的过程。
## 节点传递消息的规则及内容
节点并不会把自己所掌握的所有消息都传递给临近节点。因为如果传递所有消息，一方面会造成极大的网络带宽消耗，尤其是在消息量庞大的系统中；另一方面也会使得信息传播效率低下，大量冗余信息会干扰节点快速获取关键、有用的信息。

**随机抽样策略**：一种常见的方式是采用随机抽样的方法，从自己所拥有的消息集合中按照一定概率抽取部分消息传递给临近节点。比如，节点可能有 100 条不同的数据更新消息，每次与其他节点进行 Gossip 通信时，它会随机选取其中 10 条 (概率为 10%) 发送出去。不同的实现可能会设定不同的概率，这个概率的设定通常要综合考虑系统的规模、消息产生的频率、网络带宽等因素，以达到既能有效传播重要消息，又不会造成网络拥堵的效果。

**基于时间戳或版本的策略**：如果涉及到数据相关的消息，节点往往会优先传递较新的消息，也就是根据消息对应的时间戳或者版本号来筛选。例如，在一个分布式缓存系统中，缓存数据有更新版本，节点会对比自己缓存中各个数据的版本号，将版本号更新的那部分数据对应的消息传递给其他节点，这样可以加速系统内数据更新的传播，更快地达成数据的最终一致性。

**与节点角色或功能相关的策略**：在一些复杂的分布式系统中，不同节点可能承担着不同的角色或功能，消息传递也会有针对性。比如在一个分布式数据库集群里，存储节点可能主要传递数据存储相关的消息 (如某个表数据的新增、修改情况等)，而管理节点则更多传递集群配置、节点状态监控等方面的消息给临近节点，每个节点会根据自身角色和对方节点的需求来筛选要传递的消息。
## gossip 应用案例

- 自身节点状态信息：包括自身的健康状况 (是否正常运行、有无硬件故障隐患等)、当前的负载情况 (如 CPU 使用率、内存占用比例、网络带宽使用情况等)，以便其他节点了解其运行状态，用于故障检测、负载均衡决策等。

- 集群成员信息：知晓的其他节点的存在情况、节点地址、端口等联系方式，帮助新节点融入集群以及维持整个集群成员列表的动态更新。

- 数据更新或变更消息：如果是分布式存储系统或者缓存系统等，会传递数据的更新内容、版本变化等消息，用于维护数据的一致性，像某个文件在存储节点上被修改了，对应的修改信息就会通过 Gossip 协议传播出去。

- 服务相关信息：在微服务架构场景下，会传递自身提供的服务内容 (如服务接口、服务功能描述等)、服务的配置变更情况等，方便其他服务发现并调用，以及确保服务配置的统一管理。