<template>
    <div>
        <home-header></home-header>
        <index-swiper></index-swiper>
    </div> 
</template>

<script>
import HomeHeader from './components/HomeHeader';
import IndexSwiper from './components/Swiper';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    IndexSwiper,
  },
};
</script>

<style>
</style>
