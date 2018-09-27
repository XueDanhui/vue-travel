<template>
  <ul class="letter-wrap">
    <li class="letter-item">A</li>
    <li class="letter-item">B</li>
    <li class="letter-item">C</li>
    <li class="letter-item">D</li>
    <li class="letter-item">E</li>
    <li class="letter-item">F</li>
    <li class="letter-item">G</li>
    <li class="letter-item">H</li>
    <li class="letter-item">I</li>
    <li class="letter-item">J</li>
    <li class="letter-item">K</li>
  </ul>
</template>

<script>
export default {
  name: 'Letter',
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
