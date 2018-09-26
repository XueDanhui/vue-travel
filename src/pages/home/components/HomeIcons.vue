<template>
  <div class="homeicons-wrap">
    <swiper :options="swiperOption" class="swiper-wrap">
      <swiper-slide v-for="(item, index) in pages" :key="index">
        <div class="icon-item" v-for="icon in item" :key="icon.id">
          <div class="icon-img-wrap">
            <img :src="icon.src" alt="" class="icon-img">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      swiperOption: {},
      iconList: [
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
          id: '1',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '北京必游',
          id: '2',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '自然风光',
          id: '3',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '文化古迹',
          id: '4',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园',
          id: '5',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '故宫',
          id: '6',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游',
          id: '7',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉',
          id: '8',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '游乐场',
          id: '9',
        },
        {
          src: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          desc: '全部玩乐',
          id: '10',
        },
      ],
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
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .homeicons-wrap >>> .swiper-slide
    overflow hidden
    display flex
    flex-wrap wrap
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
