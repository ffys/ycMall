<template>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item><router-link to="/sort"><img src="../assets/images/v_01.jpg"></router-link></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/v_02.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/v_03.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/v_04.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
  export default {
    props: {
      banner: String
    },
    name: 'swipe',
    data () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe-item img{
  width:100%;
  height:200px;
}
  .swipe> div{
    height: 200px;
  }
</style>
