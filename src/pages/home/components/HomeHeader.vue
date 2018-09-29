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
              {{this.$store.state.city}}
              <span class="iconfont">&#xe61b;</span>
          </div>
        </router-link>
    </div> 
</template>

<script>
export default {
  name: 'HomeHeader',
};
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
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
            width 1.3rem
            color #fff
            padding-right 0.3rem
            padding-left .05rem
            box-sizing border-box
            position relative
            ellipsis()
            .iconfont
              position absolute
              right 0.06rem
              display inline-block
              width .3rem
</style>
