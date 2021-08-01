const chart1 = echarts.init(document.getElementById("relation"));

function get_color() {
    return 'rgb(' + [
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160),
        Math.round(Math.random() * 160)
    ].join(',') + ')';
}

const option = {
    //backgroundColor: '#ccc',	// 背景颜色
    title: {                    // 图表标题
        text: "",           // 标题文本
        left: '3%',                    // 标题距离左侧边距
        top: '3%',                     // 标题距顶部边距
        textStyle: {                       // 标题样式
            color: '#000',                     // 标题字体颜色
            fontSize: '30',                    // 标题字体大小
        }
    },

    tooltip: {                  // 提示框的配置
    },

    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10
    },

    series: [{
        type: "graph",          // 系列类型:关系图
        top: '10%',             // 图表距离容器顶部的距离
        roam: true,             // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        focusNodeAdjacency: true,   // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
        force: {                // 力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。
            // 力引导布局的结果有良好的对称性和局部聚合性，也比较美观。
            repulsion: 100,            // [ default: 50 ]节点之间的斥力因子(关系对象之间的距离)。支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大
            //gravity : 0.00,           //节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            edgeLength: [10, 50]        // [ default: 30 ]边的两个节点之间的距离(关系对象连接线两端对象的距离,会根据关系对象值得大小来判断距离的大小)，
                                        // 这个距离也会受 repulsion。支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长。如下示例:
                                        // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50      edgeLength: [10, 50]
            //layoutAnimation : true
            //因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
        },

        edgeSymbol: ['none', 'none'],//设置边的样式，circle为实心圆，arrow为箭头

        // 图的布局。[ default: 'none' ]
        // 'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置。
        // 'circular' 采用环形布局;
        // 'force' 采用力引导布局.
        layout: "force",

        // 标记的图形
        //symbol: "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",
        symbol: 'circle',

        lineStyle: {            // 关系边的公用线条样式。其中 lineStyle.color 支持设置为'source'或者'target'特殊值，此时边会自动取源节点或目标节点的颜色作为自己的颜色。
            normal: {
                color: '#000',          // 线的颜色[ default: '#aaa' ]
                width: 1,               // 线宽[ default: 1 ]
                type: 'solid',          // 线的类型[ default: solid ]   'dashed'    'dotted'
                opacity: 0.5,           // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。[ default: 0.5 ]
                curveness: 0            // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。[ default: 0 ]
            }
        },

        label: {                // 关系对象上的标签
            normal: {
                show: true,                 // 是否显示标签
                position: "top",         // 标签位置:'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
                textStyle: {                // 文本样式
                    //fontSize: 16
                }
            }
        },

        edgeLabel: {                // 连接两个关系对象的线上的标签
            normal: {
                show: false,
                textStyle: {
                    //fontSize: 14
                },
                formatter: function (param) {        // 标签内容
                    return param.data.category;
                }
            }
        },

        /**
         * name：节点是否可拖拽，只在使用力引导布局的时候有用。
         * draggable: 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
         * category: 数据项所在类目的 index。
         */
        data: [
            <!-- Adobe -->
            {
                name: "Adobe",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "Photoshop",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "Premiere",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- Git -->
            {
                name: "Git",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- markdown -->
            {
                name: "markdown",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- XML -->
            {
                name: "XML",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- Linux -->
            {
                name: "Linux",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- UML -->
            {
                name: "UML",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- Matlab -->
            {
                name: "Matlab",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- 软件测试 -->
            {
                name: "软件测试",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "黑盒测试",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "白盒测试",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "JUnit",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- C++ -->
            {
                name: "C++",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- C# -->
            {
                name: "C#",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "ADO.NET",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "WinForm",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "爬虫",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- Java -->
            {
                name: "Java",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "JavaSE",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "JavaEE",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "JDBC",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "JavaWeb",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- 数据库 -->
            {
                name: "数据库",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "关系数据库",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "NoSQL",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "MySQL",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "Oracle",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "SQLServer",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "Neo4j",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- 前端 -->
            {
                name: "前端",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "HTML",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "CSS",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "JavaScript",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "Bootstrap",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "Echarts",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- 后端 -->
            {
                name: "后端",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "Servlet",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "JSP",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "SpringBoot",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- 中间件技术 -->
            {
                name: "中间件技术",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "Tomcat",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- Python -->
            {
                name: "Python",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "numpy",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "pandas",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "matplotlib",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            <!-- 机器学习 -->
            {
                name: "机器学习",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "TensorFlow",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
            {
                name: "PyTorch",
                draggable: true,
                symbolSize: 10,
                itemStyle: {
                    color: get_color()
                }
            },
        ],

        /*
        categories: [
            {name: "Java"},
            {name: "Python"},
        ],
         */

        links: [
            <!-- Adobe -->
            {
                target: "Adobe",
                source: "Photoshop",
                // category: "relation"
            },
            {
                target: "Adobe",
                source: "Premiere",
                // category: "relation"
            },
            <!-- 软件测试 -->
            {
                target: "软件测试",
                source: "Java",
                // category: "relation"
            },
            {
                target: "黑盒测试",
                source: "软件测试",
                // category: "relation"
            },
            {
                target: "白盒测试",
                source: "软件测试",
                // category: "relation"
            },
            {
                target: "白盒测试",
                source: "JUnit",
                // category: "relation"
            },
            <!-- 数据库 -->
            {
                target: "Java",
                source: "数据库",
                // category: "relation"
            },
            {
                target: "数据库",
                source: "关系数据库",
                // category: "relation"
            },
            {
                target: "数据库",
                source: "NoSQL",
                // category: "relation"
            },
            {
                target: "关系数据库",
                source: "MySQL",
                // category: "relation"
            },
            {
                target: "关系数据库",
                source: "Oracle",
                // category: "relation"
            },
            {
                target: "关系数据库",
                source: "SQLServer",
                // category: "relation"
            },
            {
                target: "NoSQL",
                source: "Neo4j",
                // category: "relation"
            },
            <!-- Java -->
            {
                target: "Java",
                source: "JavaSE",
                // category: "relation"
            },
            {
                target: "Java",
                source: "JavaEE",
                // category: "relation"
            },
            {
                target: "Java",
                source: "JDBC",
                // category: "relation"
            },
            {
                target: "Java",
                source: "JavaWeb",
                // category: "relation"
            },
            {
                target: "Java",
                source: "JavaWeb",
                // category: "relation"
            },
            <!-- 前端 -->
            {
                target: "Java",
                source: "前端",
                // category: "relation"
            },
            {
                target: "前端",
                source: "Bootstrap",
                // category: "relation"
            },
            {
                target: "前端",
                source: "Echarts",
                // category: "relation"
            },
            {
                target: "前端",
                source: "HTML",
                // category: "relation"
            },
            {
                target: "前端",
                source: "CSS",
                // category: "relation"
            },
            {
                target: "前端",
                source: "JavaScript",
                // category: "relation"
            },
            <!-- 后端 -->
            {
                target: "Java",
                source: "后端",
                // category: "relation"
            },
            {
                target: "后端",
                source: "Servlet",
                // category: "relation"
            },
            {
                target: "后端",
                source: "JSP",
                // category: "relation"
            },
            {
                target: "后端",
                source: "SpringBoot",
                // category: "relation"
            },
            <!-- 中间件技术 -->
            {
                target: "Java",
                source: "中间件技术",
                // category: "relation"
            },
            {
                target: "中间件技术",
                source: "Tomcat",
                // category: "relation"
            },
            <!-- Python -->
            {
                target: "Python",
                source: "numpy",
                // category: "relation"
            },
            {
                target: "Python",
                source: "pandas",
                // category: "relation"
            },
            {
                target: "Python",
                source: "matplotlib",
                // category: "relation"
            },
            <!-- 机器学习 -->
            {
                target: "Python",
                source: "机器学习",
                // category: "relation"
            },
            {
                target: "机器学习",
                source: "TensorFlow",
                // category: "relation"
            },
            {
                target: "机器学习",
                source: "PyTorch",
                // category: "relation"
            },
            <!-- C# -->
            {
                target: "C#",
                source: "ADO.NET",
                // category: "relation"
            },
            {
                target: "C#",
                source: "WinForm",
                // category: "relation"
            },
            {
                target: "C#",
                source: "爬虫",
                // category: "relation"
            },
        ]
    }],


    animationEasingUpdate: "quinticInOut",          // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
    animationDurationUpdate: 100                    // 数据更新动画的时长。[ default: 300 ]
};

// 使用刚指定的配置项和数据显示图表
chart1.setOption(option)