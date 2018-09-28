# 笔记

1. 单页应用和多页应用
   多页应用：页面跳转-->返回html 优点：首屏时间快(访问页面服务器返回一个html，这个过程只经历了一个http请求)，SEO效果好(搜索引擎根据内容做排行，html多) 缺点：页面切换慢
   单页应用：页面跳转-->js渲染: js感知页面路由的变化，变化后把需要的DOM显示出来，优点：由前端来做，每次跳转不需请求html文件，减少了请求时间， 页面切换快 缺点：首屏时间慢，SEO差

2. 移动端1px问题
   有的手机分辨率高，比如2倍2倍，如果css写1px物理像素，可能会显示2px或者更大

3. 移动端click300ms延迟
   fastclick第三方库

4. padding margin 图片的宽高 为百分比时 是相对于谁 img的padding
   (padding-bottom: 50%)

5. stylus: 变量 方法

6. 修改插件样式 >>>

7. rem

8. flex布局 flex: 1

9. 超出省略号 min-width

10. axios 

11. 只有static目录下的文件可以被外部访问到，即在浏览器地址栏直接通过url访问

12. proxy

13. vue -- ref

14. 元素的位置坐标 offset clientX