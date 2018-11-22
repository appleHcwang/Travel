<template>
  <div>
<CityHeader></CityHeader>
  </div>
</template>
<style>


</style>
<script>
  import CityHeader from './components/Header'
  export default {
    name: 'City',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components:{
    CityHeader
    }
  }
</script>
