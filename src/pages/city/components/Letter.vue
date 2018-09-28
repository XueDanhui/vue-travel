<template>
  <ul class="letter-wrap">
    <li class="letter-item" v-for="item in letter" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Letter',
  props: {
    letter: Array,
  },
};
</script>

<style lang="stylus">
  @import '~styles/varibles.styl';
  .letter-wrap
    position absolute
    right 0
    top 1.56rem
    bottom 0
    display flex
    flex-direction column
    justify-content center
    .letter-item
      color $bgColor
      line-height .4rem
      width .5rem
      text-align center
</style>
