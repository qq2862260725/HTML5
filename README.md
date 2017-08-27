# HTML5
Learning HTML5
## HTML基础
- HTML 标题可以从h1 - h6

## HTML元素
- 大多数HTML元素有开始和结束标签，元素就是开始标签和结束标签之间的内容
- 大所属浏览器会正确解析省略结束标签的代码，但是有可能会产生不可预料的结果或错误
- 没有内容的HTML元素称为空元素，例如换行符"br"
- 在开始标签中添加斜杠，比如 <br />，是关闭空元素的正确方法,即使"br" 在所有浏览器中都是有效的，但使用 "br /" 其实是更长远的保障。
- HTML 建议使用小写标签 
## HTML注释
- 一般情况代码通过注释之后，是不会执行的
- 条件注释会在Internet Explorer内擦会被执行到，一般用于处理浏览器兼容问题
```html
  <!--[if IE 8]>
     .... some HTML here ....
  <![endif]-->
```
## HTML表格
- 表格的表头可以用th标签来定义，大多数浏览器会把表头显示为出题居中的文本
- colspan用来控制横向跨行单元格，rowspan用来控制跨列单元格
- &nbsp;用来处理没有内容的单元格

## HTML列表
- 列表分为无序列表ul,有序列表ol，定义列表dl
## HTML头部
- 重定向用户
```html
    <meta http-equiv="Refresh" content="5;url=http://www.baidu.com" />
```
- 使用base标签可以统一a标签打开方式
```html
    <base target="_blank" />
```
- 一些搜索引擎会根据meta元素的name和conten属性来索引页面，name和content也可以描述页面内容
- HTML中不可以使用大于和小于符号，那样会让浏览器误认为它是标签
