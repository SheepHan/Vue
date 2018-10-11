<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div>
      <detail-list></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
// import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
