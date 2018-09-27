<template>
  <div class="weekend-wrap">
    <div class="title">周末去哪儿</div>
    <ul class="weekend-ul">
      <li class="weekend-li" v-for="item in weekendList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="weekend-img">
        <div class="weekend-desc">
          <p class="weekend-title">{{item.title}}</p>
          <p class="weekend-text">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  props: {
    weekendList: Array,
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl';
  .title
    line-height .6rem
    background #eeeeee
    color $mainFontColor
    text-indent .1rem
    font-size .28rem
  .weekend-img
    width 100%
    height 2.8rem
  .weekend-desc
    padding .2rem
    min-width 0
    .weekend-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .weekend-text
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
