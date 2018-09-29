<template>
    <div class="home">
        <home-header></home-header>
        <div class="home-body" ref="wrapper">
          <div>
            <index-swiper :swiperList="swiperList"></index-swiper>
            <home-icons :iconList="iconList"></home-icons>
            <recommend :recommendList="recommendList"></recommend>
            <weekend :weekendList="weekendList"></weekend>
          </div>
        </div>
    </div> 
</template>

<script>
import axios from 'axios';
import BSsroll from 'better-scroll';
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
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.swiperList = data.swiperList;
        this.weekendList = data.weekendList;
      }
    },
  },
  mounted() {
    this.getIndexInfoFn();
    this.scroll = new BSsroll(this.$refs.wrapper);
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .home-body
    position absolute
    top $headerHeight
    left 0
    right 0
    bottom 0
    overflow hidden
</style>
