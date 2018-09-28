<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="city" :hotCity="hotCity"></city-list>
    <city-alphabet :hotCity="hotCity"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      city: {},
      hotCity: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/City.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.city = data.cities
        this.hotCity = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
