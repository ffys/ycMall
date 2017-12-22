<template>
    <div class="page">
      <mt-header fixed
                 title="YC MALL"
                 class="app-header">
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

      <i class="iconfont icon-shouye"></i>
      <mt-tabbar
        fixed
        value="首页"
      >
        <mt-tab-item id="首页" is-selected>
          <i slot='icon' class="iconfont icon-shouye"></i>
          首页
        </mt-tab-item>
        <mt-tab-item id="分类">
          <i slot='icon' class="iconfont icon-fenlei"></i>
          分类
        </mt-tab-item>
        <mt-tab-item id="搜索">
        <i slot='icon' class="iconfont icon-sousuo"></i>
        搜索
      </mt-tab-item>
        <mt-tab-item id="购物车">
          <i slot='icon' class="iconfont icon-cart"></i>
          购物车
        </mt-tab-item>
        <mt-tab-item id="我的">
          <i slot='icon' class="iconfont icon-wode"></i>
          我的
        </mt-tab-item>
      </mt-tabbar>

    </div>
</template>

<script>
  export default {
    name: 'page',
    data () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mt-tab-item .active{
  background-color: #30908f;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #d4d0d0;
  color: #30908f;
}
</style>
