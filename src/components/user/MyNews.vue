<template>
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
            <div slot="reference" class="ListNews">
              <el-tag>{{ scope.row.title }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作"  width="170px">
        <template scope="scope">
          <el-row class="doneType">
            <el-row class="ListNews">
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
</template>
<script>
export default {
  data () {
    return {
      userTableData: [
        {
          sendTime: '2015-12-17 18:36',
          title: '世界的边界在哪里？'
        },
        {
          sendTime: '2015-12-17 18:36',
          title: '世界的边界在哪里？'
        },
        {
          sendTime: '2015-12-17 18:36',
          title: '世界的边界在哪里？'
        }
      ]
    }
  },
  methods: {
    async deleteNews (newsInfo) {
      try {
        await this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        // 进行数据删除操作
        this.$message({type: 'success', message: '删除成功!'})
      } catch (err) {
        this.$message({type: 'info', message: '已取消删除'})
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.ListNews
  float left
</style>
