<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
    <CityList></CityList>
    <CityAlphabet></CityAlphabet>
  </div>
</template>
<style>


</style>
<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  import CityList from './components/List'
  import CityAlphabet from './components/Alphabet'
  export default {
    name: 'City',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
  }
</script>
