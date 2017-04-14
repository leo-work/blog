<template>
  <el-row class="ListNews">
    <h1>MSE Live Demo</h1>
    <video id="my-video" autoplay controls></video>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      mediaSource: ''
    }
  },
  methods: {
    async startLive (newsInfo) {
      this.mediaSource = new MediaSource()
      let video = document.getElementById('my-video')
      video.src = URL.createObjectURL(this.mediaSource)
      this.mediaSource.addEventListener('sourceopen', (_) => {
        this.mediaSource.addSourceBuffer('video/mp4;codecs="mp4a.40.2"')
        this.mediaSource.addSourceBuffer('video/mp4;codecs="avc1.42E01E"')
      })
    },
    async closeLive (newsInfo) {
    }
  },
  mounted () {
    this.startLive()
  }
}
</script>
<style lang="stylus" scoped>
.ListNews
  float left
</style>
