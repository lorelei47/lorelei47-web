<template>
  <div class="sp-video">
    <video ref="videoPlayer" class="video-js vjs-big-play-centered"></video>
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";
export default {
  name: "SpVideo",
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const player = ref(null);
    const videoPlayer = ref(null);
    onBeforeUnmount(() => {
      if (player.value) {
        player.value.dispose();
      }
    });
    onMounted(() => {
      player.value = videojs(
        videoPlayer.value,
        props.option,
        function onPlayerReady() {}
      );
    });
    return {
      player,
      videoPlayer
    };
  }
};
</script>

<style lang="scss" scoped>
.sp-video {
  position: relative;
  .video-js {
    ::v-deep video {
      outline: none;
    }
    ::v-deep button {
      outline: none;
    }
  }
}
</style>
