<template>
  <div>
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>
<style>


</style>
<script>
  import CityHeader from './components/Header'
  import CitySearch from './components/Search'
  export default {
    name: 'City',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      CityHeader,
      CitySearch
    }
  }
</script>
