const chart = echarts.init(document.getElementById('wordCloud'));

const maskImage = new Image();
maskImage.src = 'images/cloud4.png';

maskImage.onload = function () {
    chart.setOption({
        series: [{
            type: 'wordCloud',

            // shape: 'circle',

            maskImage: maskImage,

            left: 'center',
            top: 'center',
            width: '100%',
            height: '100%',
            right: null,
            bottom: null,

            sizeRange: [12, 60],

            rotationRange: [-90, 90],
            rotationStep: 45,

            gridSize: 8,

            drawOutOfBound: false,

            layoutAnimation: true,

            textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                focus: 'self',

                textStyle: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },

            data: [
                {
                    name: '、',
                    value: 13,
                },

                {
                    name: '态',
                    value: 1,
                },

                {
                    name: '码',
                    value: 2,
                },

                {
                    name: '。',
                    value: 56,
                },

                {
                    name: '移动',
                    value: 1,
                },

                {
                    name: '译码器',
                    value: 1,
                },

                {
                    name: '调',
                    value: 1,
                },

                {
                    name: '域名',
                    value: 2,
                },

                {
                    name: '硬件',
                    value: 1,
                },

                {
                    name: '奇偶',
                    value: 1,
                },

                {
                    name: '12分',
                    value: 2,
                },

                {
                    name: '各',
                    value: 1,
                },

                {
                    name: '状态',
                    value: 1,
                },

                {
                    name: '草稿',
                    value: 1,
                },

                {
                    name: '堆',
                    value: 1,
                },

                {
                    name: '将',
                    value: 1,
                },

                {
                    name: '栈',
                    value: 4,
                },

                {
                    name: '互联',
                    value: 1,
                },

                {
                    name: '添加',
                    value: 1,
                },

                {
                    name: '而',
                    value: 2,
                },

                {
                    name: '广度',
                    value: 1,
                },

                {
                    name: '后',
                    value: 3,
                },

                {
                    name: '小',
                    value: 4,
                },

                {
                    name: '并发',
                    value: 2,
                },

                {
                    name: '向',
                    value: 2,
                },

                {
                    name: '算法',
                    value: 7,
                },

                {
                    name: '选择',
                    value: 3,
                },

                {
                    name: '少',
                    value: 1,
                },

                {
                    name: '树',
                    value: 1,
                },

                {
                    name: '2分',
                    value: 1,
                },

                {
                    name: '利用',
                    value: 1,
                },

                {
                    name: '0000',
                    value: 1,
                },

                {
                    name: '相同',
                    value: 1,
                },

                {
                    name: '913',
                    value: 1,
                },

                {
                    name: '“',
                    value: 5,
                },

                {
                    name: '”',
                    value: 5,
                },

                {
                    name: '解决',
                    value: 2,
                },

                {
                    name: '考试',
                    value: 2,
                },

                {
                    name: '一个',
                    value: 15,
                },

                {
                    name: '操作',
                    value: 2,
                },

                {
                    name: '窗口',
                    value: 2,
                },

                {
                    name: '…',
                    value: 1,
                },

                {
                    name: '正在',
                    value: 1,
                },

                {
                    name: '含',
                    value: 1,
                },

                {
                    name: '1470',
                    value: 1,
                },

                {
                    name: '环路',
                    value: 1,
                },

                {
                    name: 'ipv',
                    value: 1,
                },

                {
                    name: '33.3',
                    value: 1,
                },

                {
                    name: '创建',
                    value: 3,
                },

                {
                    name: '每个',
                    value: 4,
                },

                {
                    name: '元素',
                    value: 3,
                },

                {
                    name: '128个字',
                    value: 1,
                },

                {
                    name: '2个',
                    value: 2,
                },

                {
                    name: '假定',
                    value: 2,
                },

                {
                    name: 'dacefbg',
                    value: 1,
                },

                {
                    name: '数计',
                    value: 1,
                },

                {
                    name: '以太网',
                    value: 1,
                },

                {
                    name: '范围',
                    value: 1,
                },

                {
                    name: 'llink',
                    value: 3,
                },

                {
                    name: '求',
                    value: 3,
                },

                {
                    name: '1000',
                    value: 1,
                },

                {
                    name: '行',
                    value: 3,
                },

                {
                    name: '遍',
                    value: 7,
                },

                {
                    name: '决定',
                    value: 1,
                },

                {
                    name: '传输率',
                    value: 1,
                },

                {
                    name: '串行',
                    value: 1,
                },

                {
                    name: '相联',
                    value: 3,
                },

                {
                    name: '采用',
                    value: 4,
                },

                {
                    name: '启动',
                    value: 1,
                },

                {
                    name: '道',
                    value: 1,
                },

                {
                    name: '高速',
                    value: 1,
                },

                {
                    name: '只有',
                    value: 1,
                },

                {
                    name: '主机',
                    value: 1,
                },

                {
                    name: '3个',
                    value: 1,
                },

                {
                    name: '存储',
                    value: 11,
                },

                {
                    name: '第一',
                    value: 1,
                },

                {
                    name: '假设',
                    value: 2,
                },

                {
                    name: 'a',
                    value: 55,
                },

                {
                    name: 'cd',
                    value: 1,
                },

                {
                    name: 'b',
                    value: 49,
                },

                {
                    name: 'c',
                    value: 51,
                },

                {
                    name: '4列',
                    value: 1,
                },

                {
                    name: 'd',
                    value: 47,
                },

                {
                    name: 'e',
                    value: 10,
                },

                {
                    name: '桥',
                    value: 1,
                },

                {
                    name: 'f',
                    value: 8,
                },

                {
                    name: 'g',
                    value: 2,
                },

                {
                    name: '表',
                    value: 7,
                },

                {
                    name: 'h',
                    value: 2,
                },

                {
                    name: 'i',
                    value: 7,
                },

                {
                    name: 'j',
                    value: 6,
                },

                {
                    name: 'k',
                    value: 3,
                },

                {
                    name: 'm',
                    value: 1,
                },

                {
                    name: 'n',
                    value: 24,
                },

                {
                    name: 'p',
                    value: 19,
                },

                {
                    name: 'q',
                    value: 5,
                },

                {
                    name: '同一个',
                    value: 1,
                },

                {
                    name: '许多',
                    value: 1,
                },

                {
                    name: 't',
                    value: 2,
                },

                {
                    name: '主存',
                    value: 3,
                },

                {
                    name: '页',
                    value: 16,
                },

                {
                    name: 'v',
                    value: 7,
                },

                {
                    name: '顶',
                    value: 1,
                },

                {
                    name: '4个',
                    value: 1,
                },

                {
                    name: 'x',
                    value: 8,
                },

                {
                    name: '问题',
                    value: 5,
                },

                {
                    name: '传输',
                    value: 4,
                },

                {
                    name: '方式',
                    value: 6,
                },

                {
                    name: '两列',
                    value: 1,
                },

                {
                    name: '{',
                    value: 3,
                },

                {
                    name: '11101111',
                    value: 1,
                },

                {
                    name: 'abcdefg',
                    value: 2,
                },

                {
                    name: '4999',
                    value: 1,
                },

                {
                    name: '948',
                    value: 1,
                },

                {
                    name: '命',
                    value: 1,
                },

                {
                    name: '二进制',
                    value: 2,
                },

                {
                    name: '最佳',
                    value: 1,
                },

                {
                    name: '5列',
                    value: 1,
                },

                {
                    name: '综合',
                    value: 10,
                },

                {
                    name: '单元',
                    value: 1,
                },

                {
                    name: '检测',
                    value: 2,
                },

                {
                    name: '1022',
                    value: 1,
                },

                {
                    name: '全部',
                    value: 1,
                },

                {
                    name: '管理',
                    value: 5,
                },

                {
                    name: '说明',
                    value: 1,
                },

                {
                    name: '和',
                    value: 18,
                },

                {
                    name: '包括',
                    value: 1,
                },

                {
                    name: '交换机',
                    value: 3,
                },

                {
                    name: '两个',
                    value: 2,
                },

                {
                    name: '题',
                    value: 4,
                },

                {
                    name: '不能',
                    value: 1,
                },

                {
                    name: '并行',
                    value: 1,
                },

                {
                    name: '磁头',
                    value: 2,
                },

                {
                    name: '技术',
                    value: 4,
                },

                {
                    name: '信息',
                    value: 3,
                },

                {
                    name: '释放',
                    value: 2,
                },

                {
                    name: '冗余',
                    value: 1,
                },

                {
                    name: '其余',
                    value: 1,
                },

                {
                    name: '饥饿',
                    value: 1,
                },

                {
                    name: '被',
                    value: 1,
                },

                {
                    name: '学位',
                    value: 1,
                },

                {
                    name: '7分',
                    value: 2,
                },

                {
                    name: '指令',
                    value: 5,
                },

                {
                    name: '1026',
                    value: 1,
                },

                {
                    name: '点',
                    value: 6,
                },

                {
                    name: '分时',
                    value: 1,
                },

                {
                    name: '图可',
                    value: 1,
                },

                {
                    name: '基数',
                    value: 1,
                },

                {
                    name: '驱动器',
                    value: 2,
                },

                {
                    name: '数值',
                    value: 2,
                },

                {
                    name: '特性',
                    value: 1,
                },

                {
                    name: '如下',
                    value: 1,
                },

                {
                    name: '所有',
                    value: 3,
                },

                {
                    name: '要为',
                    value: 1,
                },

                {
                    name: '1042',
                    value: 1,
                },

                {
                    name: '所指',
                    value: 2,
                },

                {
                    name: '1040',
                    value: 1,
                },

                {
                    name: '所需',
                    value: 2,
                },

                {
                    name: '纠正',
                    value: 1,
                },

                {
                    name: '8分',
                    value: 4,
                },

                {
                    name: '32位',
                    value: 1,
                },

                {
                    name: '同步',
                    value: 2,
                },

                {
                    name: '消费者',
                    value: 1,
                },

                {
                    name: '可以',
                    value: 3,
                },

                {
                    name: '生成',
                    value: 1,
                },

                {
                    name: '三角',
                    value: 2,
                },

                {
                    name: '交换网',
                    value: 1,
                },

                {
                    name: '差错',
                    value: 1,
                },

                {
                    name: '16384',
                    value: 1,
                },

                {
                    name: '确定',
                    value: 2,
                },

                {
                    name: 'fifo',
                    value: 1,
                },

                {
                    name: '10次',
                    value: 2,
                },

                {
                    name: '注',
                    value: 1,
                },

                {
                    name: 'spooling',
                    value: 1,
                },

                {
                    name: '做出',
                    value: 1,
                },

                {
                    name: '传送',
                    value: 3,
                },

                {
                    name: '150分',
                    value: 1,
                },

                {
                    name: '分别',
                    value: 3,
                },

                {
                    name: '抢占',
                    value: 2,
                },

                {
                    name: '2015',
                    value: 1,
                },

                {
                    name: '多任务',
                    value: 3,
                },

                {
                    name: 'dma',
                    value: 1,
                },

                {
                    name: '都',
                    value: 2,
                },

                {
                    name: '一维',
                    value: 1,
                },

                {
                    name: '能',
                    value: 1,
                },

                {
                    name: '链',
                    value: 3,
                },

                {
                    name: '锁',
                    value: 2,
                },

                {
                    name: '最后',
                    value: 2,
                },

                {
                    name: '之间',
                    value: 2,
                },

                {
                    name: '最小',
                    value: 3,
                },

                {
                    name: 'preemptive',
                    value: 1,
                },

                {
                    name: 'rlink',
                    value: 8,
                },

                {
                    name: 'dram',
                    value: 1,
                },

                {
                    name: '设备',
                    value: 2,
                },

                {
                    name: '多',
                    value: 6,
                },

                {
                    name: '对称',
                    value: 1,
                },

                {
                    name: '出发',
                    value: 2,
                },

                {
                    name: '后面',
                    value: 1,
                },

                {
                    name: '携带',
                    value: 1,
                },

                {
                    name: '优先权',
                    value: 1,
                },

                {
                    name: 'ip',
                    value: 5,
                },

                {
                    name: '因而',
                    value: 1,
                },

                {
                    name: '三列',
                    value: 1,
                },

                {
                    name: '用',
                    value: 2,
                },

                {
                    name: '不再',
                    value: 1,
                },

                {
                    name: '中断',
                    value: 1,
                },

                {
                    name: '更新',
                    value: 1,
                },

                {
                    name: '由',
                    value: 2,
                },

                {
                    name: '排序',
                    value: 3,
                },

                {
                    name: '多项式',
                    value: 1,
                },

                {
                    name: '变成',
                    value: 2,
                },

                {
                    name: '路由',
                    value: 5,
                },

                {
                    name: '交换',
                    value: 3,
                },

                {
                    name: '服务',
                    value: 4,
                },

                {
                    name: '优先',
                    value: 4,
                },

                {
                    name: '改',
                    value: 1,
                },

                {
                    name: '示',
                    value: 1,
                },

                {
                    name: '画',
                    value: 1,
                },

                {
                    name: '容量',
                    value: 2,
                },

                {
                    name: '余数',
                    value: 1,
                },

                {
                    name: '每次',
                    value: 1,
                },

                {
                    name: '元',
                    value: 1,
                },

                {
                    name: '经常',
                    value: 1,
                },

                {
                    name: '顺序',
                    value: 5,
                },

                {
                    name: '上下文',
                    value: 1,
                },

                {
                    name: '先',
                    value: 3,
                },

                {
                    name: '三个',
                    value: 1,
                },

                {
                    name: '循环',
                    value: 6,
                },

                {
                    name: '系统',
                    value: 2,
                },

                {
                    name: '之中',
                    value: 1,
                },

                {
                    name: '公用电话',
                    value: 1,
                },

                {
                    name: '通常',
                    value: 1,
                },

                {
                    name: '等待',
                    value: 2,
                },

                {
                    name: '依赖',
                    value: 1,
                },

                {
                    name: 'top',
                    value: 13,
                },

                {
                    name: 'kb',
                    value: 1,
                },

                {
                    name: '目的',
                    value: 2,
                },

                {
                    name: '总是',
                    value: 1,
                },

                {
                    name: '控制器',
                    value: 2,
                },

                {
                    name: '必须',
                    value: 1,
                },

                {
                    name: '互斥',
                    value: 2,
                },

                {
                    name: '所得',
                    value: 1,
                },

                {
                    name: '序列',
                    value: 6,
                },

                {
                    name: '下列',
                    value: 3,
                },

                {
                    name: '入',
                    value: 1,
                },

                {
                    name: '时钟',
                    value: 1,
                },

                {
                    name: '正确',
                    value: 4,
                },

                {
                    name: '转换',
                    value: 1,
                },

                {
                    name: '芯片',
                    value: 1,
                },

                {
                    name: '全',
                    value: 1,
                },

                {
                    name: '特点',
                    value: 1,
                },

                {
                    name: '信号量',
                    value: 1,
                },

                {
                    name: '数',
                    value: 1,
                },

                {
                    name: '命中率',
                    value: 1,
                },

                {
                    name: '共',
                    value: 10,
                },

                {
                    name: '得到',
                    value: 3,
                },

                {
                    name: '考生',
                    value: 1,
                },

                {
                    name: '300',
                    value: 1,
                },

                {
                    name: '分组',
                    value: 5,
                },

                {
                    name: '两次',
                    value: 1,
                },

                {
                    name: '302',
                    value: 1,
                },

                {
                    name: '其',
                    value: 1,
                },

                {
                    name: '现在',
                    value: 2,
                },

                {
                    name: 'nonpreemptive',
                    value: 1,
                },

                {
                    name: '海',
                    value: 1,
                },

                {
                    name: '存储器',
                    value: 12,
                },

                {
                    name: '子集',
                    value: 1,
                },

                {
                    name: '长',
                    value: 2,
                },

                {
                    name: '进程',
                    value: 20,
                },

                {
                    name: '要',
                    value: 3,
                },

                {
                    name: '一律',
                    value: 1,
                },

                {
                    name: '选项',
                    value: 2,
                },

                {
                    name: '如',
                    value: 1,
                },

                {
                    name: '项目',
                    value: 1,
                },

                {
                    name: '越',
                    value: 1,
                },

                {
                    name: '对角线',
                    value: 1,
                },

                {
                    name: '再',
                    value: 1,
                },

                {
                    name: '阻塞',
                    value: 2,
                },

                {
                    name: '调用',
                    value: 1,
                },

                {
                    name: '快速',
                    value: 2,
                },

                {
                    name: '写',
                    value: 2,
                },

                {
                    name: '符号',
                    value: 1,
                },

                {
                    name: '趟',
                    value: 1,
                },

                {
                    name: 'mm',
                    value: 1,
                },

                {
                    name: '网络',
                    value: 7,
                },

                {
                    name: '总的',
                    value: 1,
                },

                {
                    name: 'ms',
                    value: 3,
                },

                {
                    name: 'spf',
                    value: 1,
                },

                {
                    name: 'cpu',
                    value: 7,
                },

                {
                    name: '交叉',
                    value: 1,
                },

                {
                    name: '符合',
                    value: 1,
                },

                {
                    name: 'fffh',
                    value: 2,
                },

                {
                    name: '研究生',
                    value: 1,
                },

                {
                    name: '轮转',
                    value: 2,
                },

                {
                    name: '对应',
                    value: 1,
                },

                {
                    name: '新',
                    value: 2,
                },

                {
                    name: '200',
                    value: 1,
                },

                {
                    name: '记录',
                    value: 2,
                },

                {
                    name: '隔离',
                    value: 1,
                },

                {
                    name: '招收',
                    value: 1,
                },

                {
                    name: '编程',
                    value: 2,
                },

                {
                    name: '主频',
                    value: 1,
                },

                {
                    name: '对于',
                    value: 1,
                },

                {
                    name: '发来',
                    value: 1,
                },

                {
                    name: '表示',
                    value: 3,
                },

                {
                    name: '二叉树',
                    value: 4,
                },

                {
                    name: 'ns',
                    value: 3,
                },

                {
                    name: '提供',
                    value: 3,
                },

                {
                    name: '不是',
                    value: 2,
                },

                {
                    name: '位置',
                    value: 2,
                },

                {
                    name: '包含',
                    value: 1,
                },

                {
                    name: '种',
                    value: 1,
                },

                {
                    name: '双向',
                    value: 1,
                },

                {
                    name: 'rom',
                    value: 1,
                },

                {
                    name: '210',
                    value: 1,
                },

                {
                    name: '拓扑',
                    value: 1,
                },

                {
                    name: '秒',
                    value: 1,
                },

                {
                    name: 'crc',
                    value: 1,
                },

                {
                    name: '关键字',
                    value: 1,
                },

                {
                    name: '资源',
                    value: 1,
                },

                {
                    name: '足够',
                    value: 1,
                },

                {
                    name: '无',
                    value: 3,
                },

                {
                    name: '错误',
                    value: 3,
                },

                {
                    name: '512道',
                    value: 1,
                },

                {
                    name: '定义',
                    value: 1,
                },

                {
                    name: '探测',
                    value: 1,
                },

                {
                    name: '毫米',
                    value: 1,
                },

                {
                    name: '总线',
                    value: 1,
                },

                {
                    name: '映射',
                    value: 3,
                },

                {
                    name: '程序',
                    value: 3,
                },

                {
                    name: '问',
                    value: 2,
                },

                {
                    name: '积',
                    value: 1,
                },

                {
                    name: '100',
                    value: 2,
                },

                {
                    name: '间',
                    value: 4,
                },

                {
                    name: '转发',
                    value: 3,
                },

                {
                    name: '发现',
                    value: 2,
                },

                {
                    name: '时',
                    value: 3,
                },

                {
                    name: '十进制',
                    value: 1,
                },

                {
                    name: '滑动',
                    value: 1,
                },

                {
                    name: '出',
                    value: 2,
                },

                {
                    name: 'adcfegb',
                    value: 1,
                },

                {
                    name: '一',
                    value: 1,
                },

                {
                    name: '处于',
                    value: 1,
                },

                {
                    name: '05',
                    value: 5,
                },

                {
                    name: '上',
                    value: 7,
                },

                {
                    name: '下',
                    value: 3,
                },

                {
                    name: '不',
                    value: 2,
                },

                {
                    name: '描述',
                    value: 1,
                },

                {
                    name: '与',
                    value: 2,
                },

                {
                    name: '80分',
                    value: 1,
                },

                {
                    name: '自身',
                    value: 1,
                },

                {
                    name: '且',
                    value: 1,
                },

                {
                    name: '10道',
                    value: 1,
                },

                {
                    name: '或',
                    value: 1,
                },

                {
                    name: '列',
                    value: 1,
                },

                {
                    name: '则',
                    value: 6,
                },

                {
                    name: '地址',
                    value: 16,
                },

                {
                    name: '网络层',
                    value: 1,
                },

                {
                    name: '0行',
                    value: 1,
                },

                {
                    name: '二次',
                    value: 1,
                },

                {
                    name: '解析',
                    value: 4,
                },

                {
                    name: '访问',
                    value: 8,
                },

                {
                    name: '10',
                    value: 4,
                },

                {
                    name: '五个',
                    value: 3,
                },

                {
                    name: '11',
                    value: 5,
                },

                {
                    name: '12',
                    value: 1,
                },

                {
                    name: '13',
                    value: 6,
                },

                {
                    name: 'cache',
                    value: 7,
                },

                {
                    name: '转速',
                    value: 1,
                },

                {
                    name: '14',
                    value: 2,
                },

                {
                    name: '15',
                    value: 2,
                },

                {
                    name: '16',
                    value: 4,
                },

                {
                    name: '17',
                    value: 6,
                },

                {
                    name: '18',
                    value: 5,
                },

                {
                    name: '19',
                    value: 1,
                },

                {
                    name: '目录',
                    value: 1,
                },

                {
                    name: '个',
                    value: 7,
                },

                {
                    name: 'csma',
                    value: 1,
                },

                {
                    name: '最大',
                    value: 1,
                },

                {
                    name: '攻读',
                    value: 1,
                },

                {
                    name: '中',
                    value: 30,
                },

                {
                    name: '是',
                    value: 39,
                },

                {
                    name: '到',
                    value: 7,
                },

                {
                    name: '方法',
                    value: 5,
                },

                {
                    name: '切换',
                    value: 1,
                },

                {
                    name: '填充',
                    value: 1,
                },

                {
                    name: '稳',
                    value: 1,
                },

                {
                    name: '功能',
                    value: 2,
                },

                {
                    name: '协议',
                    value: 4,
                },

                {
                    name: '作业',
                    value: 1,
                },

                {
                    name: '128',
                    value: 2,
                },

                {
                    name: '磁盘',
                    value: 8,
                },

                {
                    name: '为',
                    value: 16,
                },

                {
                    name: '多少',
                    value: 4,
                },

                {
                    name: '单独',
                    value: 1,
                },

                {
                    name: '接收',
                    value: 2,
                },

                {
                    name: '20',
                    value: 1,
                },

                {
                    name: 'mhz',
                    value: 1,
                },

                {
                    name: '21',
                    value: 1,
                },

                {
                    name: '22',
                    value: 1,
                },

                {
                    name: '分析',
                    value: 1,
                },

                {
                    name: 'rr',
                    value: 1,
                },

                {
                    name: '23',
                    value: 5,
                },

                {
                    name: '24',
                    value: 1,
                },

                {
                    name: '文件',
                    value: 2,
                },

                {
                    name: '25',
                    value: 1,
                },

                {
                    name: '优先级',
                    value: 6,
                },

                {
                    name: '26',
                    value: 1,
                },

                {
                    name: '27',
                    value: 1,
                },

                {
                    name: '称为',
                    value: 2,
                },

                {
                    name: '28',
                    value: 1,
                },

                {
                    name: '片',
                    value: 3,
                },

                {
                    name: '29',
                    value: 1,
                },

                {
                    name: '内在',
                    value: 1,
                },

                {
                    name: '70分',
                    value: 1,
                },

                {
                    name: '前',
                    value: 1,
                },

                {
                    name: '给出',
                    value: 5,
                },

                {
                    name: '哈希',
                    value: 3,
                },

                {
                    name: '130',
                    value: 1,
                },

                {
                    name: '如果',
                    value: 1,
                },

                {
                    name: '试卷',
                    value: 1,
                },

                {
                    name: '动态',
                    value: 1,
                },

                {
                    name: '刷新',
                    value: 1,
                },

                {
                    name: '根据',
                    value: 4,
                },

                {
                    name: '只能',
                    value: 1,
                },

                {
                    name: '发送',
                    value: 2,
                },

                {
                    name: '虚',
                    value: 1,
                },

                {
                    name: '哈希法',
                    value: 1,
                },

                {
                    name: '生产者',
                    value: 1,
                },

                {
                    name: '30',
                    value: 2,
                },

                {
                    name: 'key',
                    value: 2,
                },

                {
                    name: 'arp',
                    value: 1,
                },

                {
                    name: '31',
                    value: 1,
                },

                {
                    name: '也',
                    value: 1,
                },

                {
                    name: '32',
                    value: 2,
                },

                {
                    name: '格式',
                    value: 1,
                },

                {
                    name: '33',
                    value: 1,
                },

                {
                    name: 'arq',
                    value: 1,
                },

                {
                    name: '34',
                    value: 1,
                },

                {
                    name: '35',
                    value: 1,
                },

                {
                    name: '机器',
                    value: 2,
                },

                {
                    name: '36',
                    value: 1,
                },

                {
                    name: '37',
                    value: 1,
                },

                {
                    name: '38',
                    value: 2,
                },

                {
                    name: 'fcfs',
                    value: 2,
                },

                {
                    name: '39',
                    value: 1,
                },

                {
                    name: '节点',
                    value: 1,
                },

                {
                    name: '执',
                    value: 1,
                },

                {
                    name: '用于',
                    value: 2,
                },

                {
                    name: '任一',
                    value: 1,
                },

                {
                    name: '指针',
                    value: 1,
                },

                {
                    name: '保护',
                    value: 1,
                },

                {
                    name: '运行',
                    value: 3,
                },

                {
                    name: '专业',
                    value: 9,
                },

                {
                    name: '差不多',
                    value: 1,
                },

                {
                    name: '年',
                    value: 1,
                },

                {
                    name: '速度',
                    value: 1,
                },

                {
                    name: '并',
                    value: 2,
                },

                {
                    name: '3行',
                    value: 1,
                },

                {
                    name: '内存',
                    value: 3,
                },

                {
                    name: '空',
                    value: 3,
                },

                {
                    name: '40',
                    value: 2,
                },

                {
                    name: '基地',
                    value: 1,
                },

                {
                    name: '41',
                    value: 2,
                },

                {
                    name: '42',
                    value: 6,
                },

                {
                    name: '43',
                    value: 1,
                },

                {
                    name: '44',
                    value: 1,
                },

                {
                    name: '45',
                    value: 2,
                },

                {
                    name: '46',
                    value: 7,
                },

                {
                    name: '47',
                    value: 2,
                },

                {
                    name: '的',
                    value: 97,
                },

                {
                    name: '48',
                    value: 2,
                },

                {
                    name: '了',
                    value: 4,
                },

                {
                    name: '校验',
                    value: 1,
                },

                {
                    name: '必要条件',
                    value: 1,
                },

                {
                    name: '哪个',
                    value: 1,
                },

                {
                    name: '集线器',
                    value: 1,
                },

                {
                    name: '二',
                    value: 1,
                },

                {
                    name: '150',
                    value: 1,
                },

                {
                    name: '序',
                    value: 6,
                },

                {
                    name: '153',
                    value: 1,
                },

                {
                    name: '需要',
                    value: 2,
                },

                {
                    name: '应',
                    value: 1,
                },

                {
                    name: '随机',
                    value: 1,
                },

                {
                    name: '越高',
                    value: 1,
                },

                {
                    name: '55',
                    value: 5,
                },

                {
                    name: '逻辑',
                    value: 1,
                },

                {
                    name: '四个',
                    value: 2,
                },

                {
                    name: '报',
                    value: 1,
                },

                {
                    name: '相加',
                    value: 1,
                },

                {
                    name: '度',
                    value: 1,
                },

                {
                    name: '缓存',
                    value: 1,
                },

                {
                    name: '入学',
                    value: 1,
                },

                {
                    name: '主要',
                    value: 1,
                },

                {
                    name: '选择题',
                    value: 1,
                },

                {
                    name: 'vg',
                    value: 1,
                },

                {
                    name: '时间',
                    value: 17,
                },

                {
                    name: '物理',
                    value: 3,
                },

                {
                    name: '空间',
                    value: 2,
                },

                {
                    name: '字母表',
                    value: 2,
                },

                {
                    name: '纸',
                    value: 3,
                },

                {
                    name: '操作系统',
                    value: 4,
                },

                {
                    name: '期间',
                    value: 1,
                },

                {
                    name: '61',
                    value: 1,
                },

                {
                    name: '下面',
                    value: 4,
                },

                {
                    name: '64',
                    value: 1,
                },

                {
                    name: '开始',
                    value: 1,
                },

                {
                    name: '68',
                    value: 5,
                },

                {
                    name: '69',
                    value: 4,
                },

                {
                    name: '组',
                    value: 1,
                },

                {
                    name: '左右',
                    value: 1,
                },

                {
                    name: '能否',
                    value: 2,
                },

                {
                    name: '执行',
                    value: 5,
                },

                {
                    name: '总计',
                    value: 1,
                },

                {
                    name: '保持',
                    value: 1,
                },

                {
                    name: '从',
                    value: 7,
                },

                {
                    name: '不但',
                    value: 1,
                },

                {
                    name: '结',
                    value: 6,
                },

                {
                    name: '拓',
                    value: 1,
                },

                {
                    name: '180分钟',
                    value: 1,
                },

                {
                    name: '6行',
                    value: 1,
                },

                {
                    name: '目标',
                    value: 1,
                },

                {
                    name: '须知',
                    value: 1,
                },

                {
                    name: '深度',
                    value: 3,
                },

                {
                    name: '高',
                    value: 1,
                },

                {
                    name: '端口',
                    value: 1,
                },

                {
                    name: '存在',
                    value: 2,
                },

                {
                    name: '73',
                    value: 4,
                },

                {
                    name: '连续',
                    value: 2,
                },

                {
                    name: '内容',
                    value: 1,
                },

                {
                    name: '满',
                    value: 1,
                },

                {
                    name: '可能',
                    value: 1,
                },

                {
                    name: 'cabdefg',
                    value: 1,
                },

                {
                    name: '若',
                    value: 3,
                },

                {
                    name: '以',
                    value: 5,
                },

                {
                    name: '目',
                    value: 1,
                },

                {
                    name: '端',
                    value: 3,
                },

                {
                    name: '要求',
                    value: 1,
                },

                {
                    name: '尺寸',
                    value: 1,
                },

                {
                    name: '局域网',
                    value: 1,
                },

                {
                    name: '无法',
                    value: 1,
                },

                {
                    name: '即将',
                    value: 2,
                },

                {
                    name: '一棵',
                    value: 1,
                },

                {
                    name: '84',
                    value: 1,
                },

                {
                    name: '图',
                    value: 6,
                },

                {
                    name: 'sram',
                    value: 2,
                },

                {
                    name: '86',
                    value: 1,
                },

                {
                    name: '通过',
                    value: 1,
                },

                {
                    name: '满足',
                    value: 1,
                },

                {
                    name: '最',
                    value: 1,
                },

                {
                    name: '需',
                    value: 1,
                },

                {
                    name: 'mod',
                    value: 1,
                },

                {
                    name: '冲突',
                    value: 2,
                },

                {
                    name: '指',
                    value: 1,
                },

                {
                    name: '（',
                    value: 58,
                },

                {
                    name: '）',
                    value: 67,
                },

                {
                    name: '有',
                    value: 11,
                },

                {
                    name: '按',
                    value: 5,
                },

                {
                    name: '，',
                    value: 129,
                },

                {
                    name: '统一',
                    value: 1,
                },

                {
                    name: '．',
                    value: 57,
                },

                {
                    name: '式',
                    value: 3,
                },

                {
                    name: '顶点',
                    value: 5,
                },

                {
                    name: '调度',
                    value: 7,
                },

                {
                    name: '大学',
                    value: 1,
                },

                {
                    name: '通信',
                    value: 4,
                },

                {
                    name: '编',
                    value: 1,
                },

                {
                    name: '先来',
                    value: 3,
                },

                {
                    name: '5000个柱',
                    value: 1,
                },

                {
                    name: '函数',
                    value: 1,
                },

                {
                    name: '：',
                    value: 20,
                },

                {
                    name: '93',
                    value: 4,
                },

                {
                    name: '建立',
                    value: 1,
                },

                {
                    name: '94',
                    value: 5,
                },

                {
                    name: '；',
                    value: 3,
                },

                {
                    name: '结构',
                    value: 5,
                },

                {
                    name: '直径',
                    value: 1,
                },

                {
                    name: '？',
                    value: 6,
                },

                {
                    name: '学科',
                    value: 9,
                },

                {
                    name: '线程',
                    value: 5,
                },

                {
                    name: 'ffffh',
                    value: 2,
                },

                {
                    name: '结果',
                    value: 2,
                },

                {
                    name: '在',
                    value: 14,
                },

                {
                    name: '之后',
                    value: 1,
                },

                {
                    name: '读取',
                    value: 3,
                },

                {
                    name: '第',
                    value: 13,
                },

                {
                    name: '本',
                    value: 1,
                },

                {
                    name: 'priority',
                    value: 1,
                },

                {
                    name: '依次',
                    value: 2,
                },

                {
                    name: '科目',
                    value: 9,
                },

                {
                    name: '间隔',
                    value: 1,
                },

                {
                    name: '朴',
                    value: 1,
                },

                {
                    name: '过程',
                    value: 7,
                },

                {
                    name: '查找',
                    value: 1,
                },

                {
                    name: '字段',
                    value: 2,
                },

                {
                    name: '硕士',
                    value: 1,
                },

                {
                    name: '整个',
                    value: 2,
                },

                {
                    name: '请求',
                    value: 6,
                },

                {
                    name: '强',
                    value: 1,
                },

                {
                    name: '1509',
                    value: 1,
                },

                {
                    name: '设在',
                    value: 1,
                },

                {
                    name: '叙述',
                    value: 2,
                },

                {
                    name: '直接',
                    value: 2,
                },

                {
                    name: '到来',
                    value: 2,
                },

                {
                    name: '平均',
                    value: 2,
                },

                {
                    name: '址',
                    value: 3,
                },

                {
                    name: '1101011011',
                    value: 1,
                },

                {
                    name: '序号',
                    value: 1,
                },

                {
                    name: '初始',
                    value: 2,
                },

                {
                    name: 'log',
                    value: 3,
                },

                {
                    name: 'pascal',
                    value: 1,
                },

                {
                    name: '满分',
                    value: 1,
                },

                {
                    name: '为主',
                    value: 1,
                },

                {
                    name: '等',
                    value: 1,
                },

                {
                    name: '位',
                    value: 3,
                },

                {
                    name: '共享',
                    value: 3,
                },

                {
                    name: '子',
                    value: 2,
                },

                {
                    name: '产生',
                    value: 1,
                },

                {
                    name: '网',
                    value: 1,
                },

                {
                    name: '当',
                    value: 1,
                },

                {
                    name: '电路',
                    value: 3,
                },

                {
                    name: '下标',
                    value: 1,
                },

                {
                    name: '1750',
                    value: 1,
                },

                {
                    name: '既能',
                    value: 1,
                },

                {
                    name: '字',
                    value: 5,
                },

                {
                    name: '块',
                    value: 4,
                },

                {
                    name: '数组',
                    value: 2,
                },

                {
                    name: '内核',
                    value: 1,
                },

                {
                    name: '已有',
                    value: 1,
                },

                {
                    name: '～',
                    value: 1,
                },

                {
                    name: '非',
                    value: 2,
                },

                {
                    name: '占',
                    value: 1,
                },

                {
                    name: '同时',
                    value: 1,
                },

                {
                    name: '非线性',
                    value: 1,
                },

                {
                    name: '面',
                    value: 3,
                },

                {
                    name: '矩阵',
                    value: 1,
                },

                {
                    name: '控制',
                    value: 5,
                },

                {
                    name: '无效',
                    value: 1,
                },

                {
                    name: '来',
                    value: 1,
                },

                {
                    name: '通道',
                    value: 1,
                },

                {
                    name: '距离',
                    value: 3,
                },

                {
                    name: '说法',
                    value: 2,
                },

                {
                    name: '关于',
                    value: 1,
                },

                {
                    name: '试题',
                    value: 3,
                },

                {
                    name: '按照',
                    value: 1,
                },

                {
                    name: '16个字',
                    value: 1,
                },

                {
                    name: '由于',
                    value: 1,
                },

                {
                    name: '存取',
                    value: 2,
                },

                {
                    name: '应用题',
                    value: 1,
                },

                {
                    name: '卷',
                    value: 1,
                },

                {
                    name: '答案',
                    value: 2,
                },

                {
                    name: '死',
                    value: 2,
                },

                {
                    name: '其中',
                    value: 2,
                },

                {
                    name: '同一',
                    value: 6,
                },

                {
                    name: '剥夺',
                    value: 1,
                },

                {
                    name: '使',
                    value: 1,
                },

                {
                    name: '它',
                    value: 2,
                },

                {
                    name: '对象',
                    value: 1,
                },

                {
                    name: '保密',
                    value: 1,
                },

                {
                    name: '到达',
                    value: 3,
                },

                {
                    name: '盘面',
                    value: 1,
                },

                {
                    name: '不对',
                    value: 1,
                },

                {
                    name: '历',
                    value: 7,
                },

                {
                    name: '而且',
                    value: 1,
                },

                {
                    name: '率',
                    value: 1,
                },

                {
                    name: '名称',
                    value: 9,
                },

                {
                    name: '处理',
                    value: 7,
                },

                {
                    name: 'pstn',
                    value: 1,
                },

                {
                    name: '100转',
                    value: 1,
                },

                {
                    name: '报文',
                    value: 1,
                },

                {
                    name: '1774',
                    value: 1,
                },

                {
                    name: '一趟',
                    value: 1,
                },

                {
                    name: '不同',
                    value: 2,
                },

                {
                    name: '简化',
                    value: 1,
                },

                {
                    name: '语言',
                    value: 1,
                },

                {
                    name: '编码',
                    value: 2,
                },

                {
                    name: '路由器',
                    value: 9,
                },

                {
                    name: '延迟',
                    value: 1,
                },

                {
                    name: '00111111',
                    value: 1,
                },

                {
                    name: '环',
                    value: 1,
                },

                {
                    name: '现',
                    value: 1,
                },

                {
                    name: '详细',
                    value: 1,
                },

                {
                    name: '设计',
                    value: 1,
                },

                {
                    name: '共有',
                    value: 2,
                },

                {
                    name: '收到',
                    value: 1,
                },

                {
                    name: '介质',
                    value: 5,
                },

                {
                    name: '周期',
                    value: 6,
                },

                {
                    name: '磁道',
                    value: 1,
                },

                {
                    name: '宽',
                    value: 1,
                },

                {
                    name: '设',
                    value: 1,
                },

                {
                    name: '支持',
                    value: 1,
                },

                {
                    name: '明码',
                    value: 1,
                },

                {
                    name: '进行',
                    value: 10,
                },

                {
                    name: '它们',
                    value: 1,
                },

                {
                    name: '组成',
                    value: 1,
                },

                {
                    name: '又',
                    value: 1,
                },

                {
                    name: '队列',
                    value: 3,
                },

                {
                    name: '位数',
                    value: 1,
                },

                {
                    name: '答题',
                    value: 1,
                },

                {
                    name: '以上',
                    value: 1,
                },

                {
                    name: '双',
                    value: 2,
                },

                {
                    name: '能够',
                    value: 1,
                },

                {
                    name: '单项',
                    value: 1,
                },

                {
                    name: '每',
                    value: 5,
                },

                {
                    name: '以下',
                    value: 1,
                },

                {
                    name: '某',
                    value: 1,
                },

                {
                    name: '步骤',
                    value: 1,
                },

                {
                    name: '向量',
                    value: 1,
                },

                {
                    name: '比',
                    value: 3,
                },

                {
                    name: '虚拟',
                    value: 2,
                },

                {
                    name: '最高',
                    value: 1,
                },

                {
                    name: '试',
                    value: 2,
                },

                {
                    name: '取',
                    value: 1,
                },

                {
                    name: '变',
                    value: 1,
                },

                {
                    name: '实现',
                    value: 5,
                },

                {
                    name: '信息量',
                    value: 1,
                },

                {
                    name: '这',
                    value: 4,
                },

                {
                    name: '静态',
                    value: 1,
                },

                {
                    name: '简单',
                    value: 1,
                },

                {
                    name: 'addr',
                    value: 4,
                },

                {
                    name: '中国科学院',
                    value: 1,
                },

                {
                    name: '插入',
                    value: 1,
                },

                {
                    name: '域',
                    value: 1,
                },

                {
                    name: '信',
                    value: 1,
                },

                {
                    name: '令牌',
                    value: 2,
                },

                {
                    name: 'anylan',
                    value: 1,
                },

                {
                    name: '分支',
                    value: 1,
                },

                {
                    name: '该',
                    value: 3,
                },

                {
                    name: '0列',
                    value: 1,
                },

                {
                    name: '只',
                    value: 1,
                },

                {
                    name: '快',
                    value: 1,
                },

                {
                    name: '短',
                    value: 2,
                },

                {
                    name: '连通',
                    value: 1,
                },

                {
                    name: '可',
                    value: 1,
                },

                {
                    name: '柱',
                    value: 2,
                },

                {
                    name: '数据',
                    value: 13,
                },

                {
                    name: '工作量',
                    value: 1,
                },

                {
                    name: '请',
                    value: 6,
                },

                {
                    name: '多重',
                    value: 3,
                },

                {
                    name: '多种',
                    value: 3,
                },

                {
                    name: '对',
                    value: 5,
                },

                {
                    name: '书写',
                    value: 1,
                },

                {
                    name: '一跳',
                    value: 1,
                },

                {
                    name: '寻',
                    value: 1,
                },

                {
                    name: '计算机',
                    value: 11,
                },
            ]
        }]
    });
}
