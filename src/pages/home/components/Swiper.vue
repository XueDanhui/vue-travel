<template>
    <div class="swiper-wrap">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="index-swiper-img" :src="item.src" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'index-swiper',
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true,
      },
      swiperList: [
        {
          id: '0001',
          src: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg',
        },
        {
          id: '0002',
          src: 'http://img1.qunarzz.com/piao/fusion/1809/ad/50e124f6caef1e02.jpg_750x200_2bec926d.jpg',
        },
      ],
    };
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
      height 26.67vw
      .index-swiper-img
        width 100%
</style>

