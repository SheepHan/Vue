<template>
  <div class="icons">
    <swiper :options="swiperOption">
       <swiper-slide v-for="(page,index) in pages" :key="index" >
        <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <p>{{item.name}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination-icons"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination-icons',
        loop: true
      },
      IconList: [
        {
          id: '001',
          name: '景点门票',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
        },
        {
          id: '002',
          name: '一日游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
        },
        {
          id: '003',
          name: '上海必游',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
        },
        {
          id: '004',
          name: '游乐场',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'
        },
        {
          id: '005',
          name: '赏秋色',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png'
        },
        {
          id: '006',
          name: '普陀山',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png'
        },
        {
          id: '007',
          name: '上海欢乐谷',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'
        },
        {
          id: '008',
          name: '动物园',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'
        },
        {
          id: '009',
          name: '上海迪士尼',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png'
        },
        {
          id: '010',
          name: '全部玩乐',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.IconList.forEach((item, index) => {
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
