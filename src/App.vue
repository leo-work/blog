<template>
  <div id="app">
    <el-row>
      <el-menu theme="dark" :default-active="activeIndex" router="true" class="headline" mode="horizontal" @select="handleSelect">
        <el-row class="headinerow">
          <el-menu-item index="/">首页</el-menu-item>
          <dev class="userAuth" v-show="isLogin">
            <el-menu-item index="2">我的文章</el-menu-item>
            <el-menu-item index="3">写稿</el-menu-item>
            <dev class="userQuit">
              <el-menu-item index="6">退出</el-menu-item>
            </dev>
          </dev>
          <div class="right-tiem" v-show="!isLogin" >
            <el-menu-item index="/user/mynews">登陆</el-menu-item>
            <el-menu-item index="5">注册</el-menu-item>
          </div>
        </el-row> 
      </el-menu>
    </el-row>
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
