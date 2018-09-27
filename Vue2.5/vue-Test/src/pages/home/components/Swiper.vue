<template>
  <div class="wrapper">
    <swiper :options="swiperOption"  v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for='item in list' :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票" style="opacity: 1;"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        direction: 'horizontal',
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  overflow: hidden
  height: 0
  padding-bottom: 26.67%
  .swiper-img
    display: block
    width: 100%
</style>
