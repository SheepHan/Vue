<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      // lastId: '',
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      // axios.get('/api/detail.json?id=' + this.$route.params.id)
      //   .then(this.getDetailInfoSucc)
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    // this.lastId = this.$route.params.id
    this.getDetailInfo() // 通过生命周期钩子发AJax
  }
  // activated () { // 通过这个避免掉keep-alive缓存导致加载新页面时候不会发起ajax请求
  //   if (this.lastId !== this.$route.params.id) {
  //     this.getDetailInfo()
  //     this.lastId = this.$route.params.id
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
