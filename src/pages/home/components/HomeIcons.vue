<template>
  <div class="homeicons-wrap">
    <swiper :options="swiperOption" class="swiper-wrap" v-if="showSwiper">
      <swiper-slide v-for="(item, index) in pages" :key="index">
        <div class="icon-item" v-for="icon in item" :key="icon.id">
          <div class="icon-img-wrap">
            <img :src="icon.imgUrl" alt="" class="icon-img">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination" v-if="showPagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array,
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        if (!pages[Math.floor(index / 8)]) {
          pages[Math.floor(index / 8)] = [];
        }
        pages[Math.floor(index / 8)].push(item);
      });
      return pages;
    },
    showSwiper() {
      return this.iconList.length;
    },
    showPagination() {
      return this.iconList.length > 8;
    },
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .homeicons-wrap >>> .swiper-pagination-bullet
    width .08rem
    height .08rem
  .homeicons-wrap >>> .swiper-pagination-bullet-active
    background $bgColor
  .homeicons-wrap >>> .swiper-container-horizontal > .swiper-pagination-bullets
    bottom 0
  .homeicons-wrap >>> .swiper-slide
    overflow hidden
    display flex
    flex-wrap wrap
  .homeicons-wrap
    padding .1rem 0 .2rem
    .icon-item
      width 25%
      text-align center
      display flex
      flex-direction column
      align-items center
      margin-bottom .15rem
      .icon-img-wrap
        width 1.1rem
        height 1.1rem  
        padding .1rem 0
        .icon-img
          width 100% 
      .icon-desc
        width 100%
        color $mainFontColor
        font-size .28rem
        height .28rem
        ellipsis()
</style>
