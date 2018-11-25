<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList :cities="cities" :hotCities="hotCities"></CityList>
    <CityAlphabet :cities="cities"></CityAlphabet>
  </div>
</template>
<style>


</style>
<script>
  import axios from 'axios'
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  export default {
    name: 'City',
    data () {
      return {
        cities: {},
        hotCities: []
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    methods:{
      getCityInfo() {
        axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        console.log(res)
        res = res.data
       if (res.ret && res.data) {
         const  data = res.data
         this.cities = data.cities
          this.hotCities = data.hotCities
       }

      }
  },
    mounted() {
      this.getCityInfo();
    }
  }
</script>
