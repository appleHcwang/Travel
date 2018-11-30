<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
      {{item}}
    </li>
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
    color: $ bgColor;
  }
</style>
<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    data () {
      return {
        touchStatus: false
      }
    },
    computed:{
      letters () {
        const letters = []
       for (let i in this.cities) {
         letters.push(i)
       }
       return letters
      }
    },
    methods: {
      handleLetterClick (e) {
       this.$emit('change',e.target.innerText)
      },

      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove (e) {
        if (this.touchStatus) {

        }
      },
      handleTouchEnd () {
        this.touchStatus = false
      }
    }
  }
</script>
