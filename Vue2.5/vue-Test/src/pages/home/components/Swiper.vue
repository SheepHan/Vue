<template>
   <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg" alt="去哪儿门票" style="opacity: 1;"></swiper-slide>
    <swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg" alt="去哪儿门票" style="opacity: 1;"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-img
  display :block
  width :100%
</style>
