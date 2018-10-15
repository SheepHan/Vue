<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-right"><span class="iconfont arrow-icon">&#xe64a;</span>上海</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss">
.header {
  display: flex;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;
  .header-left {
    width: 0.64rem;
    .back-icon {
      display: block;
      font-size: 0.4rem text-align center;
    }
  }
  .header-right {
    min-width: 1.2rem;
    padding: 0 0.1rem;
    text-align: center;
    color: #fff;
    .arrow-icon {
      font-size: 0.24rem;
      margin-left: 0.04rem;
    }
  }
  .header-input {
    flex: 1;
    line-height: 0.64rem;
    height: 0.64rem;
    margin: 0.12rem 0 0 0.2rem;
    background-color: #fff;
    color: #ccc;
    border-radius: 0.1rem;
    padding-left: 0.2rem;
  }
}
</style>
