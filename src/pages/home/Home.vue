<template>
    <div class="home">
        <home-header></home-header>
        <index-swiper></index-swiper>
        <home-icons></home-icons>
        <recommend></recommend>
        <weekend></weekend>
    </div> 
</template>

<script>
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
};
</script>

<style lang="stylus" scoped>
</style>
