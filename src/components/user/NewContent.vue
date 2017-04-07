<template>
  <el-row>
   <div slot="title">{{ newsOne.title }}
    </div>
    <el-row class="newsDate">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ newsOne.sendTime }}</span>
      </template>
    </el-row>  
    <el-row class="newsBody">
      <el-row class="newsContent" v-html="newsOne.content"></el-row>
      <el-row class="newsBloger">
        <el-tag type="gray" style="font-size: 20px">作者: {{newsOne.username}}</el-tag>
      </el-row>
    </el-row>
  </el-row >
</template>
<script>
export default {
  data () {
    return {
      newsOne: {
        title: '我的世界你不懂',
        sendTime: '2015-02-23 18:36',
        content: '<p>这个世界很疯狂</p>',
        username: 'leo'
      }
    }
  },
  mounted () {
    console.log(this.$route.params)
  }
}
</script>
