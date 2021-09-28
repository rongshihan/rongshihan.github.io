---
layout: post
title:  Java web：基于jieba分词器（或ansj分词器）的文章关键词字符云（词云图）
categories: Java
tags: Java Web
---

![在这里插入图片描述](https://img-blog.csdnimg.cn/643d570c29314af79d0eb8b52a7140dd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)

上来先丢一个展示图，吸引一下注意力（跑。

上图为对某论文用jieba分词后，计算其逆文档频率（TF-IDF）作为权重，并用echarts的字符云扩展包echarts-wordcloud画出来的字符云图（词云图），看起来很炫酷（bushi，其实都是一些很简单的东西。
## 0、写在前面
**（1）开发环境**
集成开发环境（IDE）：IntelliJ IDEA 2020
服务器：Tomcat 9.0
编译环境：JDK 1.8
**（2）项目会利用maven引入一些jar包，推荐大家在这个网站搜：[Maven Repository](https://mvnrepository.com/)，需要用到的jar包如下**
①jieba分词器（或ansj分词器）

```xml
    <!-- https://mvnrepository.com/artifact/com.huaban/jieba-analysis -->
    <dependency>
      <groupId>com.huaban</groupId>
      <artifactId>jieba-analysis</artifactId>
      <version>1.0.2</version>
    </dependency>
        <!-- https://mvnrepository.com/artifact/org.ansj/ansj_seg -->
    <dependency>
      <groupId>org.ansj</groupId>
      <artifactId>ansj_seg</artifactId>
      <version>5.1.6</version>
    </dependency>
```
②servlet

```xml
    <!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api -->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
      <scope>provided</scope>
    </dependency>
```

③servlet文件上传

```xml
    <!-- https://mvnrepository.com/artifact/commons-fileupload/commons-fileupload -->
    <dependency>
      <groupId>commons-fileupload</groupId>
      <artifactId>commons-fileupload</artifactId>
      <version>1.4</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/commons-io/commons-io -->
    <dependency>
      <groupId>commons-io</groupId>
      <artifactId>commons-io</artifactId>
      <version>2.10.0</version>
    </dependency>
```
④pdfbox及其相关jar包

```xml
    <!-- https://mvnrepository.com/artifact/org.apache.poi/poi -->
    <dependency>
      <groupId>org.apache.poi</groupId>
      <artifactId>poi</artifactId>
      <version>5.0.0</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.apache.poi/poi-ooxml -->
    <dependency>
      <groupId>org.apache.poi</groupId>
      <artifactId>poi-ooxml</artifactId>
      <version>5.0.0</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.apache.poi/poi-scratchpad -->
    <dependency>
      <groupId>org.apache.poi</groupId>
      <artifactId>poi-scratchpad</artifactId>
      <version>5.0.0</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.apache.pdfbox/pdfbox -->
    <dependency>
      <groupId>org.apache.pdfbox</groupId>
      <artifactId>pdfbox</artifactId>
      <version>2.0.24</version>
    </dependency>
```
⑤JSTL标准标签库
```xml
    <!-- https://mvnrepository.com/artifact/org.apache.taglibs/taglibs-standard-impl -->
    <dependency>
      <groupId>org.apache.taglibs</groupId>
      <artifactId>taglibs-standard-impl</artifactId>
      <version>1.2.5</version>
      <scope>runtime</scope>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.apache.taglibs/taglibs-standard-spec -->
    <dependency>
      <groupId>org.apache.taglibs</groupId>
      <artifactId>taglibs-standard-spec</artifactId>
      <version>1.2.5</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.apache.taglibs/taglibs-standard-jstlel -->
    <dependency>
      <groupId>org.apache.taglibs</groupId>
      <artifactId>taglibs-standard-jstlel</artifactId>
      <version>1.2.5</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/org.apache.taglibs/taglibs-standard-compat -->
    <dependency>
      <groupId>org.apache.taglibs</groupId>
      <artifactId>taglibs-standard-compat</artifactId>
      <version>1.2.5</version>
    </dependency>
```
⑥阿里的json库

```xml
    <!-- https://mvnrepository.com/artifact/com.alibaba/fastjson -->
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>fastjson</artifactId>
      <version>1.2.76</version>
    </dependency>
```
⑦其它

```xml
    <!-- https://mvnrepository.com/artifact/org.slf4j/slf4j-simple -->
    <dependency>
      <groupId>org.slf4j</groupId>
      <artifactId>slf4j-simple</artifactId>
      <version>1.7.31</version>
      <scope>compile</scope>
    </dependency>
        <!-- https://mvnrepository.com/artifact/net.java.dev.jna/jna -->
    <dependency>
      <groupId>net.java.dev.jna</groupId>
      <artifactId>jna</artifactId>
      <version>4.0.0</version>
    </dependency>
```

## 1、创建项目
注：大家创建项目时请参考[IDEA+Maven+JavaWeb+tomcat项目搭建（图文并茂，详细）](https://blog.csdn.net/weixin_33446857/article/details/82143258)


由于IDEA版本不一样，会有稍微的不同，IDEA 2020版创建项目的步骤如下：
(https://blog.csdn.net/weixin_33446857/article/details/82143258)
**（1）、打开IDEA，选择File->New->Project->Maven，勾选Create from archetype，接着找到如下图中的webapp模板选中，点击Next进入下一步**
![在这里插入图片描述](https://img-blog.csdnimg.cn/700abe6da9bd4b09b6dd18ad8ea58dd4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
**（2）、输入项目的名称后继续Next下一步**
![在这里插入图片描述](https://img-blog.csdnimg.cn/846d52e192da4739ba5a76b40a03de9d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
**（3）、这里勾选一下右边的Override就可以改默认路径了,点击Finish完成项目创建**
![在这里插入图片描述](https://img-blog.csdnimg.cn/648a4a57edef49d3af1fcb1ed90b725d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
## 2、分词
在计算文章关键词词频之前，我们需要对文章进行分词。

分词对英文来说不难，因为英文单词天然被空格隔开，换句话说就是英文文章已经被空格分词好了，但中文不一样，中文分词属于自然语言处理（NLP）的一个方向，实现起来不是那么容易，也不是本项目的重点，因此本项目直接使用分词器来进行分词，下面推荐几个分词器：
**①jieba分词器（Java版本）**
jieba分词器原本最初是python版本，后来被移植到各种语言，就功能来说相对另外两种要少，但仅仅是分词够用。
github：[结巴分词(java版) jieba-analysis](https://github.com/huaban/jieba-analysis)
引入项目：直接在maven中引入即可
**②ansj分词器：**
功能很多，甚至有本项目需要实现的关键词提取（懒得自己实现TF-IDF算法的童鞋可以直接调用了）。
github：[Ansj中文分词](https://github.com/NLPchina/ansj_seg)
引入项目：直接在maven中引入即可
**③NLPIR-ICTCLAS汉语分词系统**
该分词器是中科院计算所的张华平博士做的，功能相当强大且全面，应该是目前国内最好的中文分词器了，但由于隔段时间就要更新许可证，比较麻烦，本项目就不使用了。
项目网站：[NLPIR-ICTCLAS汉语分词系统](http://ictclas.nlpir.org/)
引入项目：本人捣鼓了几天，应该是需要把项目的NLPIR SDK\NLPIR-ICTCLAS\projects\ICTCLAS_Java部分整个自己重新编写使用，大家可以自己试试看。

下面开始分词
**（1）基于jieba分词器**
由于最终需要得到关键词以及其对应的TF-IDF值，因此我们需要用哈希表（hashmap）来保存结果。分词直接调用jieba分词器的JiebaSegmenter().sentenceProcess()方法即可，该方法返回List数组，每个元素保存一个中文单词。

```java
        Map<String, Double> tfMap = new HashMap<>();
        if (content == null || content.equals(""))
            return tfMap;

        JiebaSegmenter segmenter = new JiebaSegmenter();
        List<String> segments = segmenter.sentenceProcess(content);
```
然后我们由分词结果来计算词频（TF值），并归一化处理，以备后面计算TF-IDF之用。
```java
        Map<String, Integer> freqMap = new HashMap<>();

        int wordSum = 0;
        for (String segment : segments) {
            //停用词不予考虑，单字词不予考虑
            if (!stopWordsSet.contains(segment) && segment.length() > 1) {
                wordSum++;
                if (freqMap.containsKey(segment)) {
                    freqMap.put(segment, freqMap.get(segment) + 1);
                } else {
                    freqMap.put(segment, 1);
                }
            }
        }
        
        // TF值归一化处理
        for (String word : freqMap.keySet()) {
            tfMap.put(word, freqMap.get(word) * 0.1 / wordSum);
        }
```
上面计算词频用到了停用词，所谓停用词就是我们需要过滤掉的词汇，比如标点符号，比如人称代词“我你他”等等，这些往往不是我们希望统计的信息，因此我们需要人工去定义这些词汇，然后跳过这些词汇的统计，当然这些词汇是可以不断添加的，大家认为哪些词汇不想统计也可以自己添加到停用词表中。

现在我们用txt文件保存停用词，方便添加和删除。写一个读取txt文件（即加载停用词表）的方法：

```java
    private void loadStopWords(Set<String> set, InputStream in) {
        BufferedReader bufr;
        try {
            bufr = new BufferedReader(new InputStreamReader(in));
            String line;
            while ((line = bufr.readLine()) != null) {
                set.add(line.trim());
            }
            try {
                bufr.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```
**（2）基于ansj分词器**
由于ansj分词已经实现了关键词提取，因此基于ansj分词器实现本项目要简单得多，大家可以参考这篇博客：[利用Ansj进行新闻关键词提取](https://blog.csdn.net/zhaoxinfan/article/details/10403917)，自行实现。
## 3、计算TF-IDF值
注：关于TF-IDF的介绍可以参考[TF-IDF原理及使用](https://blog.csdn.net/zrc199021/article/details/53728499)

**（1）IDF值原本需要语料库来自己按照公式进行计算，但jieba分词器已经提供了一份IDF值表，因此本项目直接使用jieba分词器的IDF表。类似上面的读取停用词表，IDF值表也是一个txt文件，因此写一个读取txt文件的方法，不同的是这次我们用Map来保存，因为IDF值表是键-值的形式。同时我们需要计算IDF的中位数，作为默认的IDF值。**

```java
    private void loadIDFMap(Map<String, Double> map, InputStream in) {
        BufferedReader bufr;
        try {
            bufr = new BufferedReader(new InputStreamReader(in));
            String line;
            while ((line = bufr.readLine()) != null) {
                String[] kv = line.trim().split(" ");
                map.put(kv[0], Double.parseDouble(kv[1]));
            }
            try {
                bufr.close();
            } catch (IOException e) {
                e.printStackTrace();
            }

            // 计算IDF值的中位数
            List<Double> idfList = new ArrayList<>(map.values());
            Collections.sort(idfList);
            idfMedian = idfList.get(idfList.size() / 2);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```
**（2）重写Keyword，使其能返回关键词权重**

```java
public class Keyword implements Comparable<Keyword>{
    private double tfidfvalue;
    private String name;
    /**
     * @return the tfidfvalue
     */
    public double getTfidfvalue()
    {
        return tfidfvalue;
    }

    /**
     * @param tfidfvalue the tfidfvalue to set
     */
    public void setTfidfvalue(double tfidfvalue)
    {
        this.tfidfvalue = tfidfvalue;
    }


    /**
     * @return the name
     */
    public String getName()
    {
        return name;
    }


    /**
     * @param name the name to set
     */
    public void setName(String name)
    {
        this.name = name;
    }


    public Keyword(String name,double tfidfvalue)
    {
        this.name=name;
        // tfidf值只保留3位小数
        this.tfidfvalue=(double)Math.round(tfidfvalue*10000)/10000;
    }

    /**
     * 为了在返回TF-IDF分析结果时，可以按照值的从大到小顺序返回，故实现Comparable接口
     */
    @Override
    public int compareTo(Keyword o)
    {
        return this.tfidfvalue-o.tfidfvalue>0?-1:1;
    }

    /**
     * 重写hashcode方法，计算方式与原生String的方法相同
     */
    @Override
    public int hashCode()
    {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((name == null) ? 0 : name.hashCode());
        long temp;
        temp = Double.doubleToLongBits(tfidfvalue);
        result = prime * result + (int) (temp ^ (temp >>> 32));
        return result;
    }

    @Override
    public boolean equals(Object obj)
    {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Keyword other = (Keyword) obj;
        if (name == null)
        {
            if (other.name != null)
                return false;
        }
        else if (!name.equals(other.name))
            return false;
//		if (Double.doubleToLongBits(tfidfvalue) != Double.doubleToLongBits(other.tfidfvalue))
//			return false;
        return true;
    }
}
```

**（3）计算TF-IDF值。根据公式TF-IDF=TF*IDF，直接把计算得到的TF值与IDF值相乘得到TF-IDF值，那么如果IDF值表中没有对应的词汇时怎么处理？一个处理办法是取IDF值的中位数作为默认的IDF值，这样做显然得不到最理想的结果，因此我们需要定期对新出现的词汇纳入，这是人工进行的（目前为止）**

```java
    public List<Keyword> analyze(String content, int topN) {
        List<Keyword> keywordList = new ArrayList<>();

        // 加载停用词表
        if (stopWordsSet == null) {
            stopWordsSet = new HashSet<>();
            loadStopWords(stopWordsSet, this.getClass().getResourceAsStream("/stop_words.txt"));
        }
        // 加载IDF值表
        if (idfMap == null) {
            idfMap = new HashMap<>();
            loadIDFMap(idfMap, this.getClass().getResourceAsStream("/idf_dict.txt"));
        }

        Map<String, Double> tfMap = getTF(content);
        for (String word : tfMap.keySet()) {
            // 若该词不在idf文档中，则使用平均的idf值(可能定期需要对新出现的网络词语进行纳入)
            if (idfMap.containsKey(word)) {
                keywordList.add(new Keyword(word, idfMap.get(word) * tfMap.get(word)));
            } else
                keywordList.add(new Keyword(word, idfMedian * tfMap.get(word)));
        }

        Collections.sort(keywordList, new Comparator<Keyword>() {
            @Override
            public int compare(Keyword o1, Keyword o2) {
                if (o1 == null && o2 == null) {
                    return 0;
                }
                if (o1 == null) {
                    return -1;
                }
                if (o2 == null) {
                    return 1;
                }
                return 0;
            }
        });

        if (topN >-1 && keywordList.size() > topN) {
            int num = keywordList.size() - topN;
            for (int i = 0; i < num; i++) {
                keywordList.remove(topN);
            }
        }
        return keywordList;
    }
```
## 4、文件上传
**（1）我们先在前端弄一个文件上传界面。这里我为了方便（偷懒）直接引入boostrap的fileinput组件：**

```html
    <link rel="stylesheet" href="CSS/bootstrap.min.css">
    <link rel="stylesheet" href="CSS/fileinput.min.css">

    <script src="JS/jquery-3.6.0.min.js" type="text/javascript"></script>
    <script src="JS/bootstrap.min.js" type="text/javascript"></script>
    <script src="JS/fileinput.min.js" type="text/javascript"></script>
    <script src="JS/zh.js" type="text/javascript"></script>
```
bootstrap fileinput源码：[https://github.com/kartik-v/bootstrap-fileinput](https://github.com/kartik-v/bootstrap-fileinput)
这里的zh.js是该组件的汉化。同时还是要注意引入的顺序。

文件上传框：

```html
        <div class="upload-wrap">
            <input type="file" id="File" multiple="multiple" data-min-file-count="1" name="file" accept=".pdf,.docx,.txt"/>
        </div>
```
现在我们需要对fileinput组件进行一些配置。其中需要注意的是上传路径、接收文件的类型以及上传成功后的处理事件。

```javascript
        <script>
            $('#File').fileinput({
                language: 'zh',//语言设置
                uploadUrl: 'http://localhost:8080/ArticleAnalysis_war_exploded/uploadServlet',//上传地址
                //dropZoneTitle:'拖拽文件到这里 …\n' + '支持多文件同时上传',
                showCaption: true,//是否显示被选文件的简介
                showUpload: true,//是否显示上传按钮
                showRemove: true,//是否显示删除按钮
                showClose: true,//是否显示关闭按钮
                enctype: 'multipart/form-data',
                allowedFileExtensions: ['pdf', 'docx','txt'],//允许接收的文件类型
                uploadAsync: false, //false 同步上传，后台用数组接收，true 异步上传，每次上传一个file,会调用多次接口
                layoutTemplates: {
                    //actionUpload:'',//去除上传预览缩略图中的上传图片
                    //actionZoom:'',   //去除上传预览缩略图中的查看详情预览的缩略图标
                    //actionDownload:'' ,//去除上传预览缩略图中的下载图标
                    //actionDelete:'', //去除上传预览的缩略图中的删除图标
                },
                browseClass: 'btn btn-primary',//文件选择按钮的CSS样式
                previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",//当检测到用于预览的不可读文件类型时，将在每个预览文件缩略图中显示的图标。默认为<i class="glyphicon glyphicon-file"></i>
                maxFileCount: 0,//最大上传文件数，设置0表示无限制.默认0
                minFileCount: 1,//最小文件上传数，设置0表示可选。默认0
            }).on('filebatchuploadsuccess', function (event, data, previewId, index) {
                //同步上传成功处理
                $('#result').css('display', 'block');
                console.log(data);
            }).on('filebatchuploaderror', function (event, data, msg) {
                //同步上传错误处理
                console.log(msg);
            }).on("fileuploaded", function (event, data, previewId, index) {
                //异步上传成功处理
                $('#result').css('display', 'block');
                console.log(data);
            }).on('fileerror', function (event, data, msg) {
                //异步上传错误处理
                console.log(msg);
            });
        </script>
```
效果如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/07f46bb339224f5d96ca535217e0e67d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
**（2）现在我们写个servlet用于接收前端上传来的文件。不要忘了前端的文件上传框围上一个form：**

```html
    <form enctype="multipart/form-data" action="uploadServlet" method="post">
        <div class="upload-wrap">
            <input type="file" id="File" multiple="multiple" data-min-file-count="1" name="file" accept=".pdf,.docx,.txt"/>
        </div>
    </form>
```
servlet直接照搬[菜鸟教程](https://www.runoob.com/servlet/servlet-file-uploading.html)的代码然后修改。这里使用注解（@WebServlet）的方法跳过web.xml的配置。把文件路径放到servlet的session实现servlet之间的信息传递。再利用阿里的fastjson把数据以json格式传回前端。
```java
package servlet;

import com.alibaba.fastjson.JSONObject;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "uploadServlet", urlPatterns = "/uploadServlet")
public class UploadServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // 上传文件存储目录
    private static final String UPLOAD_DIRECTORY = "upload";

    // 上传配置
    private static final int MEMORY_THRESHOLD = 1024 * 1024 * 3;  // 3MB
    private static final int MAX_FILE_SIZE = 1024 * 1024 * 40; // 40MB
    private static final int MAX_REQUEST_SIZE = 1024 * 1024 * 50; // 50MB

    /**
     * 上传数据及保存文件
     */
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws IOException {
        JSONObject object = new JSONObject();

        HttpSession session = request.getSession();
        session.setMaxInactiveInterval(3600);

        PrintWriter writer = response.getWriter();
        // 检测是否为多媒体上传
        if (!ServletFileUpload.isMultipartContent(request)) {
            // 如果不是则停止
            writer.println("Error: 表单必须包含 enctype=multipart/form-data");
            writer.flush();
            return;
        }

        // 配置上传参数
        DiskFileItemFactory factory = new DiskFileItemFactory();
        // 设置内存临界值 - 超过后将产生临时文件并存储于临时目录中
        factory.setSizeThreshold(MEMORY_THRESHOLD);
        // 设置临时存储目录
        factory.setRepository(new File(System.getProperty("java.io.tmpdir")));

        ServletFileUpload upload = new ServletFileUpload(factory);

        // 设置最大文件上传值
        upload.setFileSizeMax(MAX_FILE_SIZE);

        // 设置最大请求值 (包含文件和表单数据)
        upload.setSizeMax(MAX_REQUEST_SIZE);

        // 中文处理
        upload.setHeaderEncoding("UTF-8");

        // 构造临时路径来存储上传的文件
        // 这个路径相对当前应用的目录
        String uploadPath = getServletContext().getRealPath("/") + File.separator + UPLOAD_DIRECTORY;


        // 如果目录不存在则创建
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdir();
        }

        try {
            // 解析请求的内容提取文件数据
            List<FileItem> formItems = upload.parseRequest(request);

            if (formItems != null && formItems.size() > 0) {
                // 迭代表单数据
                for (FileItem item : formItems) {
                    // 处理不在表单中的字段
                    if (!item.isFormField()) {
                        String fileName = new File(item.getName()).getName();
                        String filePath = uploadPath + File.separator + fileName;
                        File storeFile = new File(filePath);
                        // 在控制台输出文件的上传路径
                        System.out.println(filePath);
                        session.setAttribute("filePath", filePath);
                        // 保存文件到硬盘
                        item.write(storeFile);
                        object.put("上传成功", "OK");
                        //request.setAttribute("message", "文件上传成功!");
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            object.put("上传失败", "NO");
            //request.setAttribute("message", "错误信息: " + ex.getMessage());
        } finally {
            writer.print(object);
            writer.flush();
            writer.close();
        }
        // 跳转到 message.jsp
        //getServletContext().getRequestDispatcher("/message.jsp").forward(request, response);
    }
}

```
**（3）上传成功后的事件处理。**
我们设计一个查看结果的提交按钮，它的功能是点击后查看关键词字符云。这个按钮我们放在文件上传框的下面，但是上传文件成功之前不显示，为此我们先设置它的css样式display为none。同样围上form以备后用。

```html
    <form action="segServlet" method="post">
        <input id="result" name="result" type="submit" class="btn btn-primary" value="查看结果" style="display: none;width: 100%">
    </form>
```

那么怎么让它在上传成功之后显示呢？我们回到第一步的fileinput配置，这里就有必要说明一下该组件的上传成功事件处理了：

```javascript
            $('#File').fileinput({
            ...
            }).on('filebatchuploadsuccess', function (event, data, previewId, index) {
                //同步上传成功处理
                $('#result').css('display', 'block');
                console.log(data);
            }).on('filebatchuploaderror', function (event, data, msg) {
                //同步上传错误处理
                console.log(msg);
            }).on("fileuploaded", function (event, data, previewId, index) {
                //异步上传成功处理
                $('#result').css('display', 'block');
                console.log(data);
            }).on('fileerror', function (event, data, msg) {
                //异步上传错误处理
                console.log(msg);
            });
```
总的来说该组件给我们提供了4个上传文件之后的事件处理接口，我们选择配置其中的同步上传成功和异步上传成功（本项目不涉及异步上传，仅仅是为了完整性），$('#result').css('display', 'block')获取刚刚的查看结果的提交按钮，并将器css样式display设置为block，这样上传成功后按钮就显示出来了。

我们来试试看效果：
把文件拖拽过来
![在这里插入图片描述](https://img-blog.csdnimg.cn/1c4cdc345b7748cc81eb327569bb0d37.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
点击上传
![在这里插入图片描述](https://img-blog.csdnimg.cn/2a308f492c924b5f9a1a0615ce9075da.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
这样，查看结果的按钮就显示出来了。
## 5、画字符云
**（1）我们先来设计前端。引入必要的echarts框架，引入顺序不要颠倒。下载地址：[echatrs-wordcloud](https://github.com/ecomfe/echarts-wordcloud)**
```html
<script src="JS/echarts.min.js" type="text/javascript"></script>
<script src="JS/echarts-wordcloud.min.js" type="text/javascript"></script>
```
**（2）给字符云一个容器，margin: 0 auto可以让div水平居中**
```html
<div id="main" style="margin: 0 auto"></div>
```
**（3）为了让容器自适应调整为大小适中的正方形，我让宽度为浏览器界面宽度的80%，并让高度等于宽度**

```javascript
const main = document.getElementById('main');
main.style.width = 80 + "%";
main.style.height = main.offsetWidth + "px";
```
**（4）echarts-wordcloud提供了用户自己置字符云形状的接口，我们可以自己找一些png图片，例如下图：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/fcaf18308e8e4bdbb649eb784a8cd7ea.png)
然后我们在JavaScript中new一个Image对象，指定其路径：
```javascript
const maskImage = new Image();
maskImage.src = './images/cloud4.png';
```
在echarts.init 方法中引入这一对象即可
**（5）echarts.init 方法初始化一个 echarts 实例并通过 setOption 方法生成字符云：**

```javascript
<script type="text/javascript">
    const chart = echarts.init(document.getElementById('main'));

    const maskImage = new Image();
    maskImage.src = './images/cloud4.png';

    chart.setOption({
        series: [{
            type: 'wordCloud',

            // The shape of the "cloud" to draw. Can be any polar equation represented as a
            // callback function, or a keyword present. Available presents are circle (default),
            // cardioid (apple or heart shape curve, the most known polar equation), diamond (
            // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

            // shape: 'diamond',

            // A silhouette image which the white area will be excluded from drawing texts.
            // The shape option will continue to apply as the shape of the cloud to grow.

            maskImage: maskImage,

            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.

            left: 'center',
            top: 'center',
            width: '100%',
            height: '100%',
            right: null,
            bottom: null,

            // Tools.Test size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.

            sizeRange: [12, 60],

            // Tools.Test rotation range and step in degree. Tools.Test will be rotated randomly in range [-90, 90] by rotationStep 45

            rotationRange: [-90, 90],
            rotationStep: 45,

            // size of the grid in pixels for marking the availability of the canvas
            // the larger the grid size, the bigger the gap between words.

            gridSize: 8,

            // set to true to allow word being draw partly outside of the canvas.
            // Allow word bigger than the size of the canvas to be drawn
            drawOutOfBound: false,

            // If perform layout animation.
            // NOTE disable it will lead to UI blocking when there is lots of words.
            layoutAnimation: true,

            // Global text style
            textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                    // Random color
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

            // Data is an array. Each array item must have name and value property.
            data: [
                <c:forEach var="U" items="${data}">
                {
                    name: '${U.key}',
                    value: ${U.value},
                },
                </c:forEach>
            ]
        }]
    });
</script>
```
这里利用jstl标签库的forEach标签，因为后台传来的将会是一个hashmap对象，forEach能直接遍历。data的格式是：

```javascript
            data: [
                {
                    name: '字符串',
                    value: 数值,
                },
                {
                    name: '字符串',
                    value: 数值,
                },
                ...
            ]
```
**（6）在写servlet之前我们写一个类实现Java读取txt、word和pdfbox**

```java
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Read {
    /**
     * 读取text（dic）文件
     *
     * @param url
     * @return
     */
    public static String readTxt(String url) {
        StringBuilder txt = new StringBuilder();
        try {
            FileInputStream fis = new FileInputStream(url);
            // 防止路径乱码，如果utf-8乱码，改GBK，eclipse里创建的txt，用UTF-8，在电脑上自己创建的txt，用GBK
            InputStreamReader isr = new InputStreamReader(fis, StandardCharsets.UTF_8);
            BufferedReader br = new BufferedReader(isr);
            String line;
            while ((line = br.readLine()) != null) {
                txt.append(line);
            }
            br.close();
            isr.close();
            fis.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return txt.toString();
    }

    /**
     * 读取pdf文件
     *
     * @param url
     * @return
     */
    public static String readPdf(String url) {
        String content = null;

        try {
            PDDocument doc = PDDocument.load(new File(url));
            PDFTextStripper textStripper = new PDFTextStripper();
            content = textStripper.getText(doc);

            // 去掉空格、回车、制表符、换行符
            if (content!=null) {
                Pattern p = Pattern.compile("\\s*|\t|\r|\n");
                Matcher m = p.matcher(content);
                content = m.replaceAll("");
                content = content.replaceAll("[\\p{P}]","");
            }
            doc.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return content;
    }
}
```

**（7）servlet分为以下几个部分**
①获取session中的文件路径
②读取文件
③调用TF-IDF得到关键词及其权重
④解析为hashmap
⑤返回前端

```java
package servlet;

import Tools.Keyword;
import Tools.Read;
import Tools.TFIDF;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;

@WebServlet(name = "segServlet", urlPatterns = "/segServlet")
public class SegServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        String filePath = session.getAttribute("filePath").toString();

        String content = Read.readPdf(filePath);

        TFIDF tfidf = new TFIDF();
        List<Keyword> list = tfidf.analyze(content, -1);

        HashMap<String,Double> hashMap = new HashMap<>();
        for (Keyword word : list)
            hashMap.put(word.getName(),word.getTfidfvalue());

        req.setAttribute("data", hashMap);
        req.getRequestDispatcher("/wordcloud.jsp").forward(req, resp);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {
        doGet(req, resp);
    }
}

```
至此，我们终于可以得到结果了。我们来点击查看结果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/5c5bd911e6b54f0eab339cdd510c2b5a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
这里上传的文件与开篇的不一样哦。

最后附上项目的github地址：[https://github.com/rongshihan/ArticleAnalysis](https://github.com/rongshihan/ArticleAnalysis)