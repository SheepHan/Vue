<template>
  <div class="icons">
    <swiper :options="swiperOption">
       <swiper-slide v-for="(page,index) in pages" :key="index" >
        <div class="icon" v-for="(item,index) in page" :key="index">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination-icons"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination-icons',
        loop: false,
        autoplay: false
      }
    }
  },
  computed: {
    pages () { // 分页器，非常重要
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';
@import '../../../assets/styles/mixins.styl';
.icons >>> .swiper-container
   height: 0
   padding-bottom: 50%
.swiper-pagination-bullets
  position:absolute
  text-align :center
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  position :relative
  margin-top: .1rem
  .icon {
    float: left;
    width: 25%;
    padding-bottom: 25%;
    position: relative;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    p {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.55rem;
      line-height: 0.55rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
    }
  }
}
</style>
