---
layout: post
title:  neo4j图算法库（Graph Algorithms）的安装与使用
categories: neo4j
tags: [NoSQL, neo4j]
---

**注意：Neo4j已经弃用Graph Algorithms，相关算法已经整合到Graph Data Science Library中，下载和使用方法类似，本文不再修改。**
算法的官方参考文档：[Chapter 6. Algorithms](https://neo4j.com/docs/graph-data-science/current/algorithms/)

_________________
# 1 支持算法

## 1.1 中心度算法（Centralities）

PageRank 

ArticleRank 

Betweenness Centrality 

Closeness Centrality

Harmonic Centrality 

Eigenvector Centrality 

Degree Centrality 

## 1.2 社区发现算法（Community detection）

Louvain 

Label Propagation 

Connected Components

Strongly Connected Components 

Triangle Counting / Clustering Coefficient 

Balanced Triads 

## 1.3 路径分析算法（Path finding）

Minimum Weight Spanning Tree 

Shortest Path 

Single Source Shortest Path 

All Pairs Shortest Path 

A* 

Yen’s K-shortest paths 

Random Walk 

## 1.4 相似度算法（Similarity）

Jaccard Similarity 

Cosine Similarity

Pearson Similarity 

Euclidean Distance 

Overlap Similarity 

## 1.5 链接预测算法（Link Prediction）

Adamic Adar 

Common Neighbors 

Preferential Attachment 

Resource Allocation 

Same Community 

Total Neighbors 

## 1.6 预处理算法（Preprocessing）

One Hot Encoding (algo.ml.oneHotEncoding)


# 2 开始使用
## 2.1 快捷安装
neo4j desktop可以自动完成下载安装和配置。
1、首先建好数据库后选择右上角的Manage选项：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200405110219642.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5OTE4Njc3,size_16,color_FFFFFF,t_70)
2、切换到plugins：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200405110534739.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5OTE4Njc3,size_16,color_FFFFFF,t_70)
3、找到Graph Algorithms并Install and Restart就可以了（图为已经安装成功）：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200405110724284.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5OTE4Njc3,size_16,color_FFFFFF,t_70)
## 2.2 手动安装
### 2.2.1参考
GitHub：[neo4j-graph-算法
](https://github.com/neo4j-contrib/neo4j-graph-algorithms).
### 2.2.2下载
下载地址 :  [Neo4j Download Center](https://neo4j.com/download-center/).

![下载](https://img-blog.csdnimg.cn/2020031320090214.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5OTE4Njc3,size_16,color_FFFFFF,t_70)
选择Neo4j Graph Algorithms 3.5.14.0，解压后是一个jar包
### 2.2.3安装

注：Neo4j Server等非桌面版本请参考：[neo4j-graph-算法
](https://github.com/neo4j-contrib/neo4j-graph-algorithms)
1.打开Neo4j Desktop
2.在创建的图中打开所在文件夹
![打开文件夹](https://img-blog.csdnimg.cn/20200313201955233.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5OTE4Njc3,size_16,color_FFFFFF,t_70)
3.把下载的jar包放到plugins文件夹
4.打开conf文件夹中的neo4j.conf，在最后加上：

> dbms.security.procedures.unrestricted=algo.*

![配置](https://img-blog.csdnimg.cn/2020031320294884.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5OTE4Njc3,size_16,color_FFFFFF,t_70)
### 2.2.4验证
在Neo4j Desktop运行下面的代码：

```sql
return algo.version()
```
返回版本号说明安装成功：
![验证](https://img-blog.csdnimg.cn/20200313203354489.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5OTE4Njc3,size_16,color_FFFFFF,t_70)
### 2.2.5例子
参考下面链接的Algorithms部分：
[neo4j-graph-算法
](https://github.com/neo4j-contrib/neo4j-graph-algorithms)
### 2.2.6可能出现的问题

未进行conf配置或者配置有问题：

> algo.degree.stream is unavailable because it is sandboxed and has dependencies outside of the sandbox. Sandboxing is controlled by the dbms.security.procedures.unrestricted setting. Only unrestrict procedures you can trust with access to database internals

检查文件neo4j.conf：

1.如果未配置请参考上面的步骤
2.如果之前有安装apoc的jar包，配置需修改

`dbms.security.procedures.unrestricted=algo.*`
 `dbms.security.procedures.unrestricted=apoc.*`

改为

`dbms.security.procedures.unrestricted=algo.*,apoc.*`

并重启neo4j

参考：[Neo4j安装APOC和图算法Neo.ClientError.Procedure.ProcedureRegistrationFailed？](https://cloud.tencent.com/developer/ask/129792).