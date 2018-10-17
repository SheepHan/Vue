<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
           <!-- slides -->
          <swiper-slide v-for='(item,index) in imgs' :key='index'>
            <img class="gallary-img" :src='item' alt="" style="opacity: 1;">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
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
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        autoplay: 2000,
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true // 修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  // .container >>> .swiper-container
  //   overflow: inherit
  .container
    display: flex
    position: fixed
    flex-direction: column
    justify-content: center
    left: 0
    right: 0
    top: 0
    bottom: 0
    z-index: 99
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .swiper-container
        overflow: inherit // 可以用这种方式代替上面的
      .gallary-img
        width: 100%
      .swiper-pagination
        bottom: -1rem
        color: #fff
</style>
