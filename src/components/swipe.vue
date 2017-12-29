<template>
  <div class="swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in bannerList">
        <router-link :to="item.bannerUrl">
          <img :src="item.bannerImg">
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    props: {
      bannerList: Array
    },
    name: 'swipe',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe-item img {
    width: 100%;
    height: 200px;
  }

  .swipe > div {
    height: 200px;
  }
</style>
