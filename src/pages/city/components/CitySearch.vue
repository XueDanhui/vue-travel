<template>
  <div class="citysearch-wrap">
    <div class="search-header">
      <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" v-show="showContent" ref="search">
      <ul class="search-ul">
        <li class="search-li border-bottom" v-for="(item, index) in result" :key="index" @click="handleSelectCity(item)">{{item}}</li>
        <li class="search-li" v-show="noData">没有找的匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: '',
      result: [],
      timer: null,
    };
  },
  computed: {
    showContent() {
      return this.keyword;
    },
    noData() {
      return !this.result.length;
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.result = [];
        return;
      }
      this.timer = setTimeout(() => {
        this.result = [];
        Object.keys(this.cities).forEach((item) => {
          this.cities[item].forEach((val) => {
            if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
              this.result.push(val.name);
            }
          });
        });
      }, 16);      
    },
  },
  methods: {
    handleSelectCity(city) {
      this.$store.commit('changeCity', city);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="stylus">
  @import '~styles/varibles.styl';
  
  .search-header
    width 100%
    height .7rem
    background $bgColor
    padding .1rem .2rem
    box-sizing border-box
    .search-input
      width 100%
      height .5rem
      border-radius .05rem
      text-align center
      font-size .28rem
      color #666
      padding .1rem
      box-sizing border-box
  .search-content
    position absolute
    left 0
    right 0
    bottom 0
    top 1.56rem
    z-index 1
    background #eee
    overflow hidden
    .search-li
      background #fff
      line-height .6rem
      text-indent .2rem
</style>

