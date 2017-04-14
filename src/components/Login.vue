<template>
  <el-row class="all">
    <el-menu theme="dark" :default-active="activeIndex" class="headline" mode="horizontal" @select="handleSelect">
      <el-row class="headinerow">
        <el-menu-item index="1">首页</el-menu-item>
        <dev id="userAuth">
          <el-menu-item index="2">我的文章</el-menu-item>
          <el-menu-item index="3">写稿</el-menu-item>
          <dev class="userQuit">
            <el-menu-item index="6">退出</el-menu-item>
          </dev>
        </dev>
        <div class="right-tiem" id="userOpen">
          <!--<el-input placeholder="请输入标题关键字" icon="search" v-model="input2" :on-icon-click="handleIconClick"></el-input>-->
          <el-menu-item index="4">登陆</el-menu-item>
          <el-menu-item index="5">注册</el-menu-item>
        </div>
      </el-row> 
    </el-menu>
    <el-dialog title="欢迎登陆" v-model="dialogLogin" style="top: 50%;left: 50%; width: 800px; margin-left: -400px; margin-top: -200px;">
      <el-row class="loginContext">
        <el-row>
          <el-input v-model="login.email" placeholder="账号" type="text"></el-input>
          <el-input v-model="login.password" placeholder="密码" type="password" @keyup.enter.native="loginToDo"></el-input>
          <el-button type="primary" @click="loginToDo">登录</el-button>
        </el-row>
      </el-row>
    </el-dialog>
    <el-dialog title="欢迎注册" v-model="dialogRegister" style="top: 50%;left: 50%; width: 1000px; margin-left: -500px; margin-top: -200px;">
      <el-row class="registerContent">
        <el-row>
          <el-input v-model="register.username" placeholder="账户" type="text"></el-input>
          <el-input v-model="register.email" placeholder="邮箱" type="text"></el-input>
          <el-input v-model="register.password" placeholder="密码" type="password"></el-input>
          <el-input v-model="register.againpassword" placeholder="确认密码" type="password" @keyup.enter.native="registerToDo"></el-input>
          <el-button type="primary" @click="registerToDo">注册</el-button>
        </el-row>
      </el-row>
    </el-dialog>
    <el-dialog v-model="openNewsDialog">
      <div slot="title">{{ newsOne.title }}
      </div>
      <el-row class="newsDate">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ newsOne.sendTime }}</span>
        </template>
      </el-row>  
      <el-row class="newsBody">
        <el-row class="newsContent">
          <p>{{ newsOne.content }}</p>
        </el-row>
        <el-row class="newsBloger">
          <el-tag type="gray" style="font-size: 20px">作者: leo</el-tag>
        </el-row>
      </el-row>     
    </el-dialog>
    <el-row class="headinebody">
      <el-row id="userNewsList">
        <el-table :data="userTableData" border style="width: 100%">
          <el-table-column label="日期" width="240px">
            <template scope="scope">
              <el-icon name="time"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.sendTime }}</span>
            </template>
          </el-table-column>
          <el-table-column label="标题">
            <template scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>标题: {{ scope.row.title }}</p>
                <div slot="reference" class="titleDiv">
                  <el-tag>{{ scope.row.title }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作"  width="170px">
            <template scope="scope">
              <el-row class="doneType">
                <el-row class="editNews">
                  <el-button size="small" @click="editNews(scope.row)">编辑</el-button>
                </el-row>
                <el-row class="deleteNews">
                  <el-button size="small" type="danger" @click="deleteNews(scope.row)">删除</el-button>
                </el-row>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row id="newsSend" style="border: none">
        <el-row class="sentNewsTitle">
            <el-input v-model="newsAdd.title" placeholder="请输入标题"></el-input>
        </el-row>
        <el-row class="sentNewsContent">
            <quill-editor ref="myTextEditor" v-model="newsAdd.content" :config="editorOption"></quill-editor>
        </el-row>
        <el-row class="sendNews">
          <el-button type="primary" @click="submit">发布博文</el-button>
        </el-row>
      </el-row>
      <el-row id="indexList">
        <el-table :data="tableData" :border="false" :show-header="false" style="width: 100%">
          <el-row class="rowNews" style="width: 100%">
            <el-table-column label="日期" width="240px">
              <template scope="scope">
                <el-icon name="time"></el-icon>
                <span style="margin-left: 10px">{{ scope.row.sendTime }}</span>
              </template>
            </el-table-column>
            <el-table-column label="标题">
              <template scope="scope">
                <div slot="reference" class="titleDiv" @click="selectNews(scope.row)">
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="作者" width="180px">
              <template scope="scope">
                <div slot="reference" class="blogger">
                  <el-tag type="danger">作者: {{ scope.row.username }}</el-tag>
                </div>
              </template>
            </el-table-column>
          </el-row>
        </el-table>
      </el-row>
    </el-row>
  </el-row>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      },
      register: {
        username: '',
        email: '',
        password: '',
        againpassword: ''
      },
      newsAdd: {
        id: 0,
        title: '',
        content: ''
      },
      doneStatus: true,
      newsOne: {},
      userId: 23,
      username: 'leo',
      email: '',
      openNewsDialog: false,
      editorOption: {
      // something config
      },
      dialogLogin: false,
      dialogRegister: false,
      activeIndex: '1',
      tableData: [],
      userTableData: []
    }
  },
  components: {
    quillEditor
  },
  methods: {
    async loginToDo () {
      //  邮箱检测 密码检测
      try {
        let res = await this.$http.post('/user/login', this.login) // 将信息发送给后端
        if (res.data.code === 200) {
          sessionStorage.setItem('blog-token', res.data.token)
          this.$message({    // 登录成功，显示提示语
            type: 'success',
            message: '登录成功！'
          })
          this.userId = res.data.userId
          this.username = res.data.username
          this.dialogLogin = false   
          this.loginAfter(1)
        } else if (res.data.code === 201) {
          this.$message.error('密码输入错误！') // 登录失败，显示提示语
          this.login.password = ''
          sessionStorage.setItem('blog-token', null) // 将token清空
        } else if (res.data.code === 202) {
          this.$message.error('邮箱不存在！') // 登录失败，显示提示语
          this.login.password = ''
          sessionStorage.setItem('blog-token', null) // 将token清空
        }
      } catch (err) {
        this.$message.error('网络异常！') // 登录失败，显示提示语
        sessionStorage.setItem('blog-token', null) // 将token清空
      }
    },
    async registerToDo () {
      // 邮箱检测 密码检测
      try {
        let res = await this.$http.post('/user/register', this.register) // 将信息发送给后端
        console.log(res)
        if (res.data.code === 200) {
          this.userId = res.data.id
          this.username = this.register.username
          this.email = this.register.email
          this.dialogRegister = false
          this.$message({type: 'success', message: '注册成功！'})
          this.loginAfter(1)
          sessionStorage.setItem('blog-token', res.data.token)
        } else if (res.data.code === 201) {
          this.register.password = ''
          this.register.againpassword = ''
          this.$message.error('注册失败！')
        } else if (res.data.code === 202) {
          this.register.password = ''
          this.register.againpassword = ''
          this.$message.error('邮箱已存在！')
        }
      } catch (err) {
        this.$message.error('网络异常！') // 登录失败，显示提示语
      }
    },
    async userQuit () {
      this.loginAfter(0)
      this.selectPage('indexList')
      await this.getNewsList()
    },
    async getNewsContent () {
      // 邮箱检测 密码检测
      this.openNewsDialog = true
    },
    onEditorChange ({editor, html, text}) {
      this.newsAdd.content = html
    },
    async submit () {
      if (!this.doneStatus) {
        await this.sentNewsInfo()
        await this.getUserNewsList()
        this.selectPage('userNewsList')
        this.doneStatus = true
        return
      }
      let submitNews = {...this.newsAdd}
      submitNews.sendTime = this.getCurTime()
      submitNews.username = this.username
      submitNews.userId = this.userId
      try {
        let res = await this.$http.post('/news/add', submitNews) // 将信息发送给后端
        if (res.data.code === 200) {
          this.newsAdd = {
            id: 0,
            title: '',
            content: ''
          }
          this.$message({type: 'success', message: '发布成功！'})
        } else {
          this.$message.error('发布失败！') // 登录失败，显示提示语
        }
      } catch (err) {
        this.$message.error('网络异常！') // 登录失败，显示提示语
      }
    },
    getCurTime () {
      var date = new Date()
      var seperator1 = '-'
      var seperator2 = ':'
      var seperator3 = ' '
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + seperator3 + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
      return currentdate
    },
    async editNews (newsInfo) {
      this.newsAdd = newsInfo
      this.doneStatus = false
      this.selectPage('newsSend')
    },

    async selectNews (newsInfo) {
      this.newsOne = newsInfo
      this.openNewsDialog = true
    },

    async sentNewsInfo () {
      try {
        let res = await this.$http.post('/news/modify', this.newsAdd) // 将信息发送给后端
        if (res.data.code === 200) {
          this.$message({type: 'success', message: '修改成功！'})
        } else {
          this.$message.error('修改失败！') // 登录失败，显示提示语
        }
      } catch (err) {
        this.$message.error('网络异常！') // 登录失败，显示提示语
      }
    },

    async deleteNews (newsInfo) {
      try {
        let res = await this.$http.post('/news/discard', newsInfo) // 将信息发送给后端
        if (res.data.code === 200) {
          await this.getUserNewsList()
          this.$message({type: 'success', message: '删除成功！'})
        } else {
          this.$message.error('删除失败！') // 登录失败，显示提示语
        }
      } catch (err) {
        this.$message.error('网络异常！') // 登录失败，显示提示语
      }
    },
    // 获取用户信息列表
    async getUserNewsList () {
      let send = {
        userId: this.userId,
        page: 1
      }
      try {
        let res = await this.$http.post('/news/user/newslist', send) // 将信息发送给后端
        if (res.data.code === 200) {
          this.userTableData = res.data.data
        } else {
          this.$message.error('获取用户数据失败！') // 登录失败，显示提示语
        }
      } catch (err) {
        this.$message.error('网络异常！') // 登录失败，显示提示语
      }
    },
    async getNewsList () {
      try {
        let res = await this.$http.post('/news/newslist', {page: 1}) // 将信息发送给后端
        if (res.data.code === 200) {
          this.tableData = res.data.data
        } else {
          this.$message.error('获取用户数据失败！') // 登录失败，显示提示语
        }
      } catch (err) {
        this.$message.error('网络异常！') // 登录失败，显示提示语
      }
    },
    handleSelect (key, keyPath) {
      switch (key) {
        case '1':
          this.selectPage('indexList')
          this.getNewsList()
          break
        case '2':
          this.getUserNewsList()
          this.selectPage('userNewsList')
          break
        case '3':
          this.selectPage('newsSend')
          break
        case '4':
          this.dialogLogin = true
          break
        case '5':
          this.dialogRegister = true
          break
        case '6':
          this.userQuit()
          break
        default:
          break
      }
    },
    selectPage (showPage) {
      document.getElementById('newsSend').style.display = 'none'
      document.getElementById('userNewsList').style.display = 'none'
      document.getElementById('indexList').style.display = 'none'
      document.getElementById(showPage).style.display = 'block'
    },
    loginAfter (type) {
      if (type === 1) {
        document.getElementById('userOpen').style.display = 'none'
        document.getElementById('userAuth').style.display = 'block'
      } else {
        document.getElementById('userAuth').style.display = 'none'
        document.getElementById('userOpen').style.display = 'block'
      }
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quillEditor
    }
  },
  created: function () {
    // 获取信息流
    this.getNewsList()
    this.loginAfter()
  }
}
</script>
<style lang="stylus" scoped>
#userAuth
  display none
#userOpen
  display block
.rowNews
  height 100px
#indexList
  display block
#userNewsList
  display none
#newsSend 
  display none
  padding-left 10px
  padding-right 10px
.sendNews
  padding-top 50px
  padding-right 80px
  float right   
.sentNewsContent
  height 600px
  padding-top 20px
.sentNewsTitle
  width 500px
  padding-right 100px
.titleDiv
  float left
.doneType
  padding-left 3px
  padding-right 5px
  margin-bottom 12px
.editNews
  width 60px
  float right
.deleteNews
  padding-right 10px
  width 60px
  float right  
.headinebody
  padding-top 20px
  padding-left 20px
  padding-right 20px
  
  height 1000px
.all
  width 75%
  margin 0 auto
.right-tiem
  float right  
.userQuit 
  float right  
.el-input
  margin 12px 0
.el-button
  width 100%
  margin-top 12px
.loginContext
  padding-left 10%
  padding-right 10%
.registerContent
  padding-left 10%
  padding-right 10%
.newsDate
  float left
  margin-left 400px
.newsBody
  padding-top 30px
  margin-left 20px
  height 566px
.newsContent
  margin-left 30px
  margin-right 30px
  overflow auto
  height 500px
  padding-top 20px
  float left
.newsBloger
  position fixed
  bottom 40px
  right 90px
</style>
