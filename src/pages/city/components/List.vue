<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>


    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>

    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
      </div>
    </div>


    <div class="area">
      <div class="title border-topbottom">B</div>
      <div class="item-list">
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
      </div>
    </div>


    <div class="area">
      <div class="title border-topbottom">C</div>
      <div class="item-list">
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
        <div class="item">阿拉尔</div>
      </div>
    </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .title {
    line-height: .44rem;
    background: #eeeeee;
    font-size: .26rem;
    padding-left: .2rem;
    color: #666666;
  }
  .button-list {
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
  }
  .button-wrapper {
    float: left;
    width: 33.33%;
    /*background: red;*/
  }
  .button {
    margin: .1rem;
    padding: .1rem;
    /*padding: .1rem 0;*/
    text-align: center;
    border-radius: .06rem;
    border: .02rem solid #cccccc;
  }
  .item-list {

  }
  .item {
    line-height: .54rem;
    padding-left:.2rem;
  }

</style>
<script>
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityList',
    data () {
      return {msg: 'hello vue'}
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>
