<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    width: 0.4rem;
    top: 1.58rem;
  }
  .item {
    text-align: center;
    line-height: .4rem;
    color:$bgColor;
  }
</style>
<script>
  export default {
    name: 'CityAlphabet',
    data () {
      return {msg: 'hello vue'}
    }
  }</script>
