<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
  @import "//at.alicdn.com/t/font_516683_dgy9c6fq6blf2yb9.css";
  .iconfont{
    font-size: 28px;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*$maincolor: #30908f;

.app-header {
  background-color: $maincolor;
}*/
  .app-header {
    background-color:#30908f;;
  }
</style>
