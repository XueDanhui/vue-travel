<template>
    <div class="home">
        <home-header :city="city"></home-header>
        <index-swiper :swiperList="swiperList"></index-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <recommend :recommendList="recommendList"></recommend>
        <weekend :weekendList="weekendList"></weekend>
    </div> 
</template>

<script>
import axios from 'axios';
import HomeHeader from './components/HomeHeader';
import IndexSwiper from './components/Swiper';
import HomeIcons from './components/HomeIcons';
import Recommend from './components/Recommend';
import Weekend from './components/Weekend';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    IndexSwiper,
    HomeIcons,
    Recommend,
    Weekend,
  },
  data() {
    return {
      city: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
    };
  },
  methods: {
    getIndexInfoFn() {
      axios.get('/api/index.json')
        .then(this.getIndexInfoSucc);
    },
    getIndexInfoSucc(res) {
      const $res = res.data;
      if ($res.ret && $res.data) {
        const data = $res.data;
        this.city = data.city;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.swiperList = data.swiperList;
        this.weekendList = data.weekendList;
      }
    },
  },
  mounted() {
    this.getIndexInfoFn();
  },
};
</script>

<style lang="stylus" scoped>
</style>
