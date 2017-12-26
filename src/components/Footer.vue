<template>
  <div class="app-footer">
    <mt-tabbar
      fixed
      v-model="selected"
    >
      <mt-tab-item id="首页">
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
    name: 'app-footer',
    data () {
      return {
        selected: '首页'
      }
    },
    watch: {
      selected: function (val, oldVal) {
        switch (val) {
          case '首页':
            this.$router.push({path: '/home'})
            break
          case '分类':
            this.$router.push({path: '/sort'})
            break
          case '搜索':
            this.$router.push({path: '/search'})
            break
          case '购物车':
            this.$router.push({path: '/cart'})
            break
          case '我的':
            this.$router.push({path: '/user'})
            break
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
