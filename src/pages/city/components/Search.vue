<template>
  <div>
  <div class="search" ref="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item border-bottom" v-for="item of list" :key="item.id">
        {{item.name}}
      </li>
      <li v-show="!list.length">没有找到匹配数据</li>
    </ul>

  </div>
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
  .search-content {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    z-index: 1;
  }
  .search-item {
    height: .5rem;
    line-height: .5rem;
    padding-left: .2rem;
    background: #fff;
    color: #666;
  }
</style>
<script>
  import  Bscroll from 'better-scroll'
  export default {
    name: 'CitySearch',
    props:{
      cities: Object
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    watch: {
      keyword() {
        console.log(this.keyword)
        if (this.timer) {
         clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const  result = []
          for (let i in this.cities) {
         this.cities[i].forEach((value) => {
           if (value.spell.indexOf(this.keyword) > -1 ||
           value.name.indexOf(this.keyword) > -1)   {
            result.push(value)
           }
         })

          }
          this.list = result;
        }, 100)
        console.log(this.list)
      }
    },
    mounted: function() {
      this.scroll = new Bscroll(this.$refs.search)
      console.log('abc' + this.cities)
    }
  }
</script>
