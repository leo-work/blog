<template>
  <el-row>
    <v-head></v-head>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </el-row>
</template>
<script>
import vHead from './common/Head'
export default {
  data () {
    return {
      isLogin: false,
      dialogLogin: false,
      dialogRegister: false,
      activeIndex: 1
    }
  },
  components: {
    vHead
  }
}
</script>
<style lang="stylus" scoped>
.content
  padding-top 10px
  padding-bottom 10px
  margin-left 5%
  margin-right 5%
</style>
