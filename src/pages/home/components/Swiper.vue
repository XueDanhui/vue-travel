<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="index-swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'index-swiper',
  props: {
    swiperList: Array,
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true,
      },
    };
  },
  computed: {
    showSwiper() {
      return this.swiperList.length;
    },
  },
};
</script>

<style lang="stylus" scoped>
    .swiper-wrap >>> .swiper-pagination-bullet
      width .12rem
      height .12rem
      background rgba(255,255,255,.5)
    .swiper-wrap >>> .swiper-pagination-bullet-active
      background rgba(255,255,255,1)
    .swiper-wrap
      width 100%
      height 2.2rem
      .index-swiper-img
        width 100%
        height 2.2rem
</style>

