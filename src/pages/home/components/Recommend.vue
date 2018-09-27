<template>
  <div class="recommend-wrap">
    <div class="title">热门推荐</div>
    <ul class="recommend-ul">
      <li class="recommend-li border-bottom" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="recommend-img">
        <div class="recommend-desc">
          <p class="recommend-title">{{item.title}}</p>
          <p class="recommend-text">{{item.desc}}</p>
          <button class="recommend-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: Array,
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
  .recommend-li
    &:last-child
      &:before
        display none
  .recommend-li
    display flex
    position relative
    .recommend-img
      width 1.7rem
      height 1.7rem
      padding 0.1rem
    .recommend-desc
      padding-right .1rem
      min-width 0
      .recommend-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .recommend-text
        line-height: .4rem
        color: #ccc
        ellipsis()
      .recommend-btn
        position absolute
        line-height: .44rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
        right .1rem
        bottom .1rem
</style>
