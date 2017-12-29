<template>
    <div class="home">
      <yc-swipe :banner-list="bannerList"></yc-swipe>
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
      return {
        bannerList: [
          {
            bannerid: 1,
            bannerUrl: '',
            bannerImg: '../src/assets/images/v_01.jpg'
          },
          {
            bannerid: 2,
            bannerUrl: '',
            bannerImg: '../src/assets/images/v_02.jpg'
          },
          {
            bannerid: 3,
            bannerUrl: '',
            bannerImg: '../src/assets/images/v_03.jpg'
          },
          {
            bannerid: 4,
            bannerUrl: '',
            bannerImg: '../src/assets/images/v_04.jpg'
          }
        ]
      }
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
