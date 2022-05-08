<template>
  <div class="home-view">
    <sp-section type="1000"> </sp-section>
    <sp-section type="900">
      <sp-carousel :list="list"> </sp-carousel>
    </sp-section>
    <sp-section type="800">
      <sp-video :option="videoOptions"></sp-video
    ></sp-section>
    <sp-section type="700">
      <sp-video-bg :video-url="url"> </sp-video-bg>
    </sp-section>
    <sp-section type="600"> </sp-section>
    <sp-section type="500"> </sp-section>
    <sp-section type="400"> </sp-section>
    <sp-section type="300"> </sp-section>
    <sp-section type="200"> </sp-section>
    <sp-section type="100"> </sp-section>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    //video-bg
    const url = ref(null);
    url.value = "/src/assets/video/demo.mp4";
    //carousel
    const list = ref(null);
    list.value = [
      { to: "/", url: "/src/assets/image/demo1.jpeg" },
      { to: "/", url: "/src/assets/image/demo2.jpeg" },
      { to: "/", url: "/src/assets/image/demo3.jpeg" },
      { to: "/", url: "/src/assets/image/demo4.jpeg" }
    ];
    //video
    const videoOptions = ref(null);
    videoOptions.value = {
      autoplay: false,
      controls: true,
      width: 800,
      height: 600,
      preload: "metadata",
      sources: [
        {
          src: "/src/assets/video/demo.mp4",
          type: "video/mp4"
        }
      ]
    };
    return { url, list, videoOptions };
  }
};
</script>

<style lang="scss" scoped>
.home-view {
  // position: relative;
  .sp-section {
    &:nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
