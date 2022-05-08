<template>
  <div class="item" @click="goRouter">
    <sp-menu-button uppercase effect="center">{{ title }}</sp-menu-button>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    title: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: "/"
    }
  },
  methods: {
    goRouter() {
      this.$router.push(this.to);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: inline-block;
}
</style>
