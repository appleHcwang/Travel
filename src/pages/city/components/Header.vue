<template>
  <div class="header">
    城市选择
<router-link to="/">
    <div class="iconfont header-back">&#xe624;</div>
</router-link>
  </div>
</template>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header {
    position: relative;
    background:$bgColor;
    text-align: center;
    height:.86rem;
    line-height: .86rem;
    font-size: .4rem;
  }
  .header-back {
    position: absolute;
    left: 0;
    top: 0;
     /*top: 0.1rem;*/
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color: #ffffff;
  }
</style>
<script>
export default {
  name:'CityHeader',
  data () {
    return {msg: 'hello vue'}
  }
}
</script>
