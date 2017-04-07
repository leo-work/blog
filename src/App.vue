<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isLogin: false,
      dialogLogin: false,
      dialogRegister: false,
      activeIndex: 1
    }
  }
}
</script>
<style lang="stylus" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0;
}
*{
  margin: 0px;
  padding: 0;
}
.headinerow {
  padding-top 10px
  padding-bottom 10px
  margin-left 10%
  margin-right 10%
}
.right-tiem {
  float right
}
</style>
