<template>
  <div class="container">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg" alt="" style="opacity: 1;">
        </swiper-slide>
         <swiper-slide>
          <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png" alt="" style="opacity: 1;">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display: flex
    position: fixed
    flex-direction: column
    justify-content: center
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 9
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
        left: 0
        right : 0
        height : .2rem
        font-size: .24rem
</style>
