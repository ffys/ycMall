<template>
    <div class="page">
      <mt-header fixed
                 title="YC MALL"
                 class="app-header">
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <i class="iconfont icon-shouchang"></i>
      <mt-tabbar
        fixed
        value=""
      >
        <mt-tab-item id="外卖">

          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon" src="../assets/logo.png">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="../assets/logo.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../assets/logo.png">
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
<style scoped>

</style>
