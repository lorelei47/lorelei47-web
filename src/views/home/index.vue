<template>
  <div class="home-view">
    <sp-section class="customize-bg">
      <div></div>
      <div></div>
      <div></div>
    </sp-section>
    <sp-section class="customize-bg"> </sp-section>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView"
};
</script>

<style lang="scss" scoped>
.home-view {
  .sp-section {
    &.customize-bg {
      background-image: linear-gradient(
        265deg,
        rgba(44, 62, 78, 1) 12.6%,
        rgba(69, 103, 131, 1) 82.8%
      );
    }
  }
}
</style>
