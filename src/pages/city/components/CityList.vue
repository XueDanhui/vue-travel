<template>
  <div class="citylist-wrap" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-content">
          <div class="button-wrap">
            <button class="button">北京</button>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-content">
          <div class="button-wrap" v-for="item in hotCities" :key="item.id">
            <button class="button">{{item.name}}</button>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <ul class="city-ul">
          <li class="city-li border-bottom" v-for="itemInner in item" :key="itemInner.id">
            {{itemInner.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    targetLetter: String,
  },
  data() {
    return {
      areaOffset: {},
    };
  },
  methods: {
    getCurrentArea(scrollY) {
      let obj = '';
      Object.keys(this.areaOffset).forEach((item) => {
        if (Math.abs(scrollY) <= this.areaOffset[item]) {
          return;
        }
        obj = item;
      });
      this.$emit('changeLetter', obj);
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 2,
    });
    this.scroll.on('scroll', (pos) => {
      this.getCurrentArea(pos.y);
    });
    this.scroll.on('scrollEnd', (pos) => {
      this.getCurrentArea(pos.y);
    });
  },
  updated() {
    Object.keys(this.cities).forEach((item) => {
      this.areaOffset[item] = this.$refs[item][0].offsetTop;
    });
  },
  watch: {
    targetLetter() {
      if (this.targetLetter) {
        const element = this.$refs[this.targetLetter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
};
</script>

<style lang="stylus">
  .citylist-wrap
    position absolute
    top 1.56rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .title
      width 100%
      line-height .5rem
      background #eeeeee
      text-indent .1rem
      color #666
    .button-content
      padding .2rem .6rem .1rem .1rem
      overflow hidden
      .button-wrap
        width 33.33%
        padding-right .1rem
        box-sizing border-box
        float left
        margin-bottom .1rem
        .button
          width 100%
          background #ffffff
          color $mainFontColor
          border .02rem solid #ccc
          padding .05rem 0
          border-radius .06rem
    .city-li
      line-height .6rem
      text-indent .1rem
      &:before
        background #eee
</style>
