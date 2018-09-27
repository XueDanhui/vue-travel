<template>
  <div class="cityheader-wrap">
    选择城市
    <span class="iconfont city-back">&#xe624;</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
};
</script>

<style lang="stylus">
  @import '~styles/varibles.styl';
  
  .cityheader-wrap
    width 100%
    line-height $headerHeight
    text-align center
    position relative
    background $bgColor
    color #fff
    font-size $headerFontsize
    .city-back
      width .64rem
      position absolute
      left 0
      top 0
</style>

