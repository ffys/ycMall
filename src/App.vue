<template>

  <div id="app">
    <yc-header></yc-header>
    <router-view>

    </router-view>
    <yc-footer></yc-footer>
  </div>
</template>

<script>
  import footer from '@/components/Footer'
  import header from '@/components/header'

  export default {
    name: 'app',
    components: {
      'yc-footer': footer,
      'yc-header': header
    }
  }
</script>
<style>
  @import "//at.alicdn.com/t/font_516683_x8vegxbsvduhxgvi.css";
</style>
<style lang="scss">
  @import "scss/common.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
  }

  .app-header {
    background-color: $maincolor;
  }

</style>
