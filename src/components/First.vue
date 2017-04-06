<template>
  <el-row class="indexList">
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
            <div slot="reference" class="ListNews" @click="selectNews(scope.row)">
              {{ scope.row.title }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="作者" width="180px">
          <template scope="scope">
            <div slot="reference" class="ListNews">
              <el-tag type="danger">作者: {{ scope.row.username }}</el-tag>
            </div>
          </template>
        </el-table-column>
      </el-row>
    </el-table>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          sendTime: '2015-12-17 18:36',
          title: '世界的边界在哪里？',
          username: '大牛'
        },
        {
          sendTime: '2015-12-17 18:36',
          title: '世界的边界在哪里？',
          username: '大牛的弟弟'
        },
        {
          sendTime: '2015-12-17 18:36',
          title: '世界的边界在哪里？',
          username: '大牛儿子'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.ListNews
  float left
</style>
