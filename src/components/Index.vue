<template>
  <el-row>
    <p>234234234</p>
  </el-row>

</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      isLogin: false,
      dialogLogin: false,
      dialogRegister: false,
      activeIndex: 1
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      switch (key) {
        case '1':
          break
        case '2':
          break
        case '3':
          break
        case '4':
          this.dialogLogin = true
          break
        case '5':
          this.dialogRegister = true
          break
        case '6':
          break
        default:
          break
      }
    }
  },
  created: function () {
  }
}
</script>
