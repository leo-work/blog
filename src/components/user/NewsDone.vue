<template>
  <ul id="newsSend" style="border: none">
    <li class="sentNewsTitle lilist">
        <el-input v-model="newsAdd.title" placeholder="请输入标题"></el-input>
    </li>
    <li class="sentNewsContent lilist">
        <VueUEditor class="lilist"  @ready="editorReady"></VueUEditor>
    </li>
    <li class="sendNews lilist">
      <el-button type="primary " @click="submit">发布博文</el-button>
    </li>
  </ul>
</template>
<script>
import VueUEditor from '../UEditor'
export default {
  data () {
    return {
      meg: 'Hello book!',
      newsAdd: {
        id: 0,
        title: '',
        content: ''
      },
      doneStatus: true,
      editorOption: {
      }
    }
  },
  methods: {
    submit () {
      console.log(123)
    },
    editorReady (editorInstance) {
      editorInstance.setContent('123234455')
      editorInstance.addListener('contentChange', () => {
        this.newsAdd.content = editorInstance.getContent()
        console.log('编辑器内容发生了变化')
      })
    }
  },
  components: {
    VueUEditor
  },
  mounted () {
    // 需要判断状态
    // this.$nextTick(() => {
    //   this.getAllData().then(() => {
    //     this.addData()
    //   })
    // })
  }
}
</script>
<style lang="stylus" scoped>
.sendNews
  padding-right 80px
  float right  
.sentNewsTitle
  width 200px
  padding-right 100px
.sentNewsContent
  height 600px
  width 100%
.lilist
  margin-top 30px
</style>
