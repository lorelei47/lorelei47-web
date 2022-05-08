<template>
  <div class="screen">
    <sp-open-screen
      v-if="open"
      to-router
      dely="5"
      index="home"
      @close-flag="listenClose"
    >
      <h1>Welcome to LORELEI47!</h1>
    </sp-open-screen>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Screen",
  setup() {
    const open = ref(true);
    const listenClose = (value) => {
      open.value = !value;
    };
    return {
      open,
      listenClose
    };
  }
};
</script>

<style lang="scss" scoped>
.screen {
  cursor: pointer;
  .sp-open-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 60px;
    }
  }
}
</style>
