<template>
  <div class="weekend-wrap">
    <div class="title">周末去哪儿</div>
    <ul class="weekend-ul">
      <li class="weekend-li" v-for="item in weekendList" :key="item.id">
        <img :src="item.src" alt="" class="weekend-img">
        <div class="weekend-desc">
          <p class="weekend-title">{{item.title}}</p>
          <p class="weekend-text">{{item.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  data() {
    return {
      weekendList: [
        {
          id: '1',
          src: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
          title: '北京野生动物园',
          text: '北京郊区的一座大型自然生态动物园',
        },
        {
          id: '2',
          src: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京野生动物园',
          text: '北京郊区的一座大型自然生态动物园',
        },
        {
          id: '3',
          src: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          title: '北京野生动物园',
          text: '北京郊区的一座大型自然生态动物园',
        },
      ],
    };
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
