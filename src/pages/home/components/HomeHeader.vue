<template>
    <div class="homeheader-wrap">
        <div class="homeheader-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="homeheader-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
          <div class="homeheader-right">
              {{city}}
              <span class="iconfont">&#xe61b;</span>
          </div>
        </router-link>
    </div> 
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String,
  },
};
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .homeheader-wrap
        display flex
        width 100%
        line-height $headerHeight
        background $bgColor
        color #fff
        text-align center
        .homeheader-left
            float left
            width .64rem
        .homeheader-input
            flex 1
            height .62rem
            line-height .62rem
            margin-top .12rem
            margin-left .2rem
            background #fff
            border-radius .1rem
            color #ccc
            text-align left 
            padding-left .2rem
        .homeheader-right
            float right
            width 1.24rem
            color #fff
</style>
