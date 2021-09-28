---
layout: post
title:  GitHub Pages + Jekyll搭建博客遇到的坑
categories: 博客
tags: Jekyll
---

## 1、更改RubyGems为国内镜像源
为了更快的从rubygems上下载东西，把原地址[https://rubygems.org/](https://rubygems.org/)改为国内镜像网址：[https://gems.ruby-china.com/](https://gems.ruby-china.com/)
```ruby
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
```
## 2、使用主题
以[https://github.com/artemsheludko/flexible-jekyll](https://github.com/artemsheludko/flexible-jekyll)为例。
**（1）先把项目整个下载下来解压**
![在这里插入图片描述](https://img-blog.csdnimg.cn/733af8ed06bc4b2dba0f4951e91dac96.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_11,color_FFFFFF,t_70,g_se,x_16)
其中_config.yml是项目的配置文件，可以修改主页的标题等等；Gemfile是是一系列Ruby代码的集合，它能够为我们提供调用，这里可以更改第1点的RubyGems镜像源。

**（2）在项目文件夹下打开命令行解释器**
![在这里插入图片描述](https://img-blog.csdnimg.cn/9712df97539247c1894eb38237e9b5e5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
**（3）执行bundle install安装Gemflie里面可能本地没有安装的库**
![在这里插入图片描述](https://img-blog.csdnimg.cn/94e1c45e622447ab95a557c2e0393c77.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
**（4）执行bundle exec jekyll s启动服务器**
![在这里插入图片描述](https://img-blog.csdnimg.cn/0df8e4b94cc74c6c96855f3f351cac29.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)

**（5）访问上图红框的链接http://127.0.0.1:4000/flexible-jekyll/即可本地浏览博客**
![在这里插入图片描述](https://img-blog.csdnimg.cn/00728250b17643109aa07dde8697c465.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
___
再以[https://github.com/jeffreytse/jekyll-theme-yat](https://github.com/jeffreytse/jekyll-theme-yat)为例

步骤差不多，但根据项目主页的安装步骤，在bundle install之前需要先修改Gemflie和_config.yml文件

**（1）添加下面这条命令到Gemfile，去掉gemspec（不去掉老出问题）**
```ruby
gem "jekyll-theme-yat"
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/eae1dda2ca8f4fb4b2f766c90dc301c6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
**（2）添加下面这条配置到_config.yml**

```yaml
theme: jekyll-theme-yat
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/51a0e7af995f436982a14f8470adacc8.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
注意：重点来了，执行bundle exec jekyll s尝试运行服务时出问题了，提示如下：

> Conversion error: Jekyll::Converters::Scss encountered an error while converting 'css/main.scss': Internal Error: Invalid UTF-8

在网上搜了不少解决办法，几乎都是像这样说的：

在 D:\ruby\Ruby26-x64\lib\ruby\gems\2.6.0\gems\sassc-2.3.0-x64-mingw32\lib\sassc\engine.rb文件中添加代码：

```bash
Encoding.default_external = Encoding.find('utf-8')
```
但是没用。后面发现项目的路径不能有中文，换到没有中文路径的地方就行了。（小白日常问题了orz）

重新bundle exec jekyll s，访问[http://127.0.0.1:4000/](http://127.0.0.1:4000/)页面就出来了：
![在这里插入图片描述](https://img-blog.csdnimg.cn/fa9e6fc6092340e2ae5762ea30252a6f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
## 3、部署到GitHub Pages
以上述第二个例子为前提。查阅官方仓库的配置，在Gemfile上加上：

```bash
gem "github-pages", group: :jekyll_plugins
```
如下图
![在这里插入图片描述](https://img-blog.csdnimg.cn/75865f9c887140eebb1bd0635f7464bb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
修改_config.yml（先去掉原本的theme）：

```bash
# theme: owner/name --> Don't forget to remove/comment the gem-based theme option
remote_theme: "jeffreytse/jekyll-theme-yat"
```
如下图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/c71d7919d99a4c399e7b3d58ff8f44e9.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
修改完成后上传到你的username.github.io仓库即可，然后GitHub会自动帮你启动服务，接着给你的绑定邮箱发送完邮件后你就可以访问[http://username.github.io/](http://username.github.io/)看到你的博客了。

启动项目遇到了点问题，但是依然可以访问页面：
![在这里插入图片描述](https://img-blog.csdnimg.cn/ff2f65a950784caa9523e1909de8cb16.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAcnNoX3dodQ==,size_20,color_FFFFFF,t_70,g_se,x_16)
