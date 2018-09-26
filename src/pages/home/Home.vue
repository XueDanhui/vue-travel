<template>
    <div>
        <home-header></home-header>
        <index-swiper></index-swiper>
        <home-icons></home-icons>
    </div> 
</template>

<script>
import HomeHeader from './components/HomeHeader';
import IndexSwiper from './components/Swiper';
import HomeIcons from './components/HomeIcons';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    IndexSwiper,
    HomeIcons,
  },
};
</script>

<style>
</style>
