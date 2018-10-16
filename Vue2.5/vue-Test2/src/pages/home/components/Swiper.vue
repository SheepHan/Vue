<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide style="opacity: 1;" v-for="item in list" :key="item.id"><img :src="item.imgUrl" alt="" class="swiper-img"></swiper-slide>
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
