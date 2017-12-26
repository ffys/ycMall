<template>
    <div class="home">
      <mt-header fixed
                 title="YC MALL"
                 class="app-header">
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <yc-swipe></yc-swipe>



    </div>
</template>

<script>
  import swipe from '@/components/swipe'

  export default {
    components: {
      'yc-swipe': swipe
    },
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
