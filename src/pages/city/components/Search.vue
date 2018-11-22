<template>
  <div class="search">
<input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search {
    padding: 0 .1rem;
    background: $bgColor;
    height: .72rem;
  }
  .search-input {
    /*padding: 0.1rem;*/
    box-sizing: border-box;
    border-radius: 0.09rem;
    height: .62rem;
    width: 100%;
    text-align: center;
    padding: 0 .1rem;
  }
</style>
<script>
  export default {
    name: 'CitySearch',
    data () {
      return {msg: 'hello vue'}
    }
  }
</script>
