<template>
  <div class="sp-video-bg">
    <video
      muted="true"
      autoplay="true"
      preload="metadata"
      loop="true"
      :src="videoUrl"
    ></video>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpVideoBg",
  props: {
    videoUrl: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.sp-video-bg {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
  }
}
</style>
