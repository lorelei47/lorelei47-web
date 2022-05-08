<template>
  <div class="sp-section" :class="bgColor">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "SpSection",
  props: {
    type: {
      type: String,
      default: "100"
    }
  },
  setup(props) {
    const bgColor = computed(() => {
      return ["bg-" + props.type];
    });
    return {
      bgColor
    };
  }
};
</script>

<style lang="scss" scoped>
.sp-section {
  position: relative;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  &.bg-100 {
    background-color: #fafafa;
  }
  &.bg-200 {
    background-color: #f5f5f5;
  }
  &.bg-300 {
    background-color: #eeeeee;
  }
  &.bg-400 {
    background-color: #e0e0e0;
  }
  &.bg-500 {
    background-color: #bdbdbd;
  }
  &.bg-600 {
    background-color: #9e9e9e;
  }
  &.bg-700 {
    background-color: #757575;
  }
  &.bg-800 {
    background-color: #616161;
  }
  &.bg-900 {
    background-color: #424242;
  }
  &.bg-1000 {
    background-color: #212121;
  }
  &.bg-light-yellow {
    background-color: #ffffd2;
  }
  &.bg-light-pink {
    background-color: #fcbad3;
  }
  &.bg-light-purple {
    background-color: #aa96da;
  }
  &.bg-light-cyan {
    background-color: #a8d8ea;
  }
}
</style>
