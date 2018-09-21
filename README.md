# vue-travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 笔记

1. 单页应用和多页应用
   多页应用：页面跳转-->返回html 优点：首屏时间快(访问页面服务器返回一个html，这个过程只经历了一个http请求)，SEO效果好(搜索引擎根据内容做排行，html多) 缺点：页面切换慢
   单页应用：页面跳转-->js渲染: js感知页面路由的变化，变化后把需要的DOM显示出来，优点：由前端来做，每次跳转不需请求html文件，减少了请求时间， 页面切换快 缺点：首屏时间慢，SEO差

2. 移动端1px问题
   有的手机分辨率高，比如2倍2倍，如果css写1px物理像素，可能会显示2px或者更大

3. 移动端click300ms延迟
   fastclick第三方库