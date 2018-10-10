<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to='/city'>
      <div class="header-right">{{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background : $bgColor
    color: #fff
    .header-left
      width : .64rem
      .back-icon{
        display:block;
        font-size :.4rem
        text-align center;
      }
    .header-right
      min-width : 1.2rem
      padding : 0 0.1rem
      text-align :center
      color: #fff
      .arrow-icon
        font-size :.24rem
        margin-left :.04rem
    .header-input
      flex:1
      line-height .64rem
      height :.64rem
      margin: .12rem 0 0 .2rem
      background-color : #fff
      color:#ccc
      border-radius : .1rem
      padding-left :.2rem
</style>
