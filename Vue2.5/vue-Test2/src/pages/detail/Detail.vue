<template>
  <div class="content">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs" :list="list"></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      lastId: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios
        .get('/api/detail.json', {
          params: {
            id: this.$route.params.id // 通过这个取到home页header中router-link中的路径id
          }
        })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () { // 由于使用了keep-alive缓存了数据，需要在其暴露的activated中进行id判断，当是新id时候，需要重新载入新界面
    if (this.lastId !== this.$route.params.id) {
      this.getDetailInfo()
      this.lastId = this.$route.params.id
    }
  }
}
</script>

<style lang="stylus" scoped>
.content {
  height: 50rem
}
</style>
