// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
/* eslint-disable */
import 'swiper/dist/css/swiper.css';
import App from './App';
import router from './router';
import store from './store/';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
