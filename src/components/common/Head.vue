<template>
  <div>
    <el-menu theme="dark" router class="headline" mode="horizontal">
      <el-row class="headinerow">
        <el-menu-item index="/">首页</el-menu-item>
        <div class="userAuth" v-show="isLogin">
          <el-menu-item index="/user/mynews">我的文章</el-menu-item>
          <el-menu-item index="/user/sendnews">写稿</el-menu-item>
          <el-menu-item index="/user/myvideo">我的视频</el-menu-item>
          <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                  <img class="user-logo" src="../../../static/img/img.jpg">
                  <div class="nickname">{{username}}</div>
              </span>
              <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="loginout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="right-tiem" v-show="!isLogin" >
          <span class="login-div" @click="dialogLogin=true">登陆</span>
          <span class="register-div" @click="dialogRegister=true">注册</span>
        </div>
      </el-row>
    </el-menu>
    <el-dialog title="欢迎登陆" v-model="dialogLogin" style="top: 50%;left: 50%; width: 800px; margin-left: -400px; margin-top: -200px;">
      <el-row class="dialogContext" >
        <el-row>
          <el-input class="row-list" v-model="loginInfo.email" placeholder="邮箱" type="text"></el-input>
          <el-input class="row-list" v-model="loginInfo.password" placeholder="密码" type="password" @keyup.enter.native="loginToDo"></el-input>
          <el-button class="row-list" type="primary" @click="loginToDo">登录</el-button>
        </el-row>
      </el-row>
    </el-dialog>
    <el-dialog title="欢迎注册" v-model="dialogRegister" style="top: 50%;left: 50%; width: 1000px; margin-left: -500px; margin-top: -200px;">
      <el-row class="dialogContext">
        <el-row>
          <el-input class="row-list" v-model="registerInfo.username" placeholder="昵称" type="text"></el-input>
          <el-input class="row-list" v-model="registerInfo.email" placeholder="邮箱" type="text"></el-input>
          <el-input class="row-list" v-model="registerInfo.password" placeholder="密码" type="password"></el-input>
          <el-input class="row-list" v-model="registerInfo.againpassword" placeholder="确认密码" type="password" @keyup.enter.native="registerToDo"></el-input>
          <el-button class="row-list" type="primary" @click="registerToDo">注册</el-button>
        </el-row>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLogin: true,
      username: 'lEO',
      dialogLogin: false,
      loginInfo: {
        email: '',
        password: ''
      },
      dialogRegister: false,
      registerInfo: {
        username: '',
        email: '',
        password: '',
        againpassword: ''
      }
    }
  },
  methods: {
    SignOut () {
      this.isLogin = false
      console.log('退出')
    },
    handleCommand (command) {
      if (command === 'loginout') {
        this.isLogin = false
        localStorage.removeItem('ms_username')
        this.$router.push('/')
      }
    },
    loginToDo () {
      this.dialogLogin = false
      this.isLogin = true
    },
    registerToDo () {
      this.dialogRegister = false
      this.isLogin = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.headinerow {
  padding-top 10px
  padding-bottom 10px
  margin-left 5%
  margin-right 5%
}
.right-tiem {
  font-size 14px
  margin-top 20px
  float right
  color rgb(191, 203, 217)
}
.login-div {
  margin-right 20px
}

.user-info {
  float right
  margin-right 10%
  font-size 18px
  color #fff
}
.user-info .el-dropdown-link{
  position relative
  display inline-block
  padding-left 50px
  color #fff
  cursor pointer
  vertical-align middle
}
.user-info .user-logo{
  position absolute
  left 0
  top 3px
  width 50px
  height 50px
  border-radius 50%
}
.el-dropdown-menu__item{
  text-align center
}
.nickname{
  margin-top 20px
  margin-left 20px
}
.dialogContext
  padding-left 10%
  padding-right 10%
.row-list{
  margin-bottom 6px
  width 100%
}
</style>
