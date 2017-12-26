<template>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../assets/images/v_01.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/v_02.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/v_03.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/images/v_04.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
  export default {
    name: 'swipe',
    data () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe-item img{
  width:100%;
}
</style>
