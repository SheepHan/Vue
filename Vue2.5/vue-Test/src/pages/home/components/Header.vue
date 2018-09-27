<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
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
      width : 1.24rem
      text-align :center
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
