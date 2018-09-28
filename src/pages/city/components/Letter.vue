<template>
  <ul class="letter-wrap">
    <li class="letter-item" 
        v-for="(item, index) of letter" 
        :key="item"
        :ref="item"
        :class="{active: index === activeIndex}"
        @click="clickLetter"
        @touchstart="handleTouchstart"
        @touchmove="handleTouchmove"
        @touchend="handleTouchend">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Letter',
  props: {
    letter: Array,
    toLetter: String,
  },
  data() {
    return {
      touchStatus: false,
      activeIndex: 0,
      startY: 0,
      timer: null,
    };
  },
  updated() {
    this.startY = this.$refs[this.letter[0]][0].offsetTop;
  },
  watch: {
    toLetter() {
      this.activeIndex = this.letter.indexOf(this.toLetter);
    },
  },
  methods: {
    clickLetter(e) { 
      this.activeIndex = this.letter.indexOf(e.target.innerText);
      this.$emit('change', e.target.innerText);
    },
    handleTouchstart() {
      this.touchStatus = true;
    },
    handleTouchmove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 78;
          const letterIndex = Math.floor((touchY - this.startY) / 20);
          if (letterIndex >= 0 && letterIndex < this.letter.length) {
            this.activeIndex = letterIndex;
            this.$emit('change', this.letter[letterIndex]);
          }     
        }, 16);
      }
    },
    handleTouchend() {
      this.touchStatus = false;
    },
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
      &.active
        background rgba(133,233,246,0.3);
</style>
