<template>
  <div class="citysearch-wrap">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
};
</script>

<style lang="stylus">
  @import '~styles/varibles.styl';
  
  .citysearch-wrap
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
</style>

