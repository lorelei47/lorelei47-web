<template>
  <div class="navbar-header">
    <icon-item :icon-name="iconName"></icon-item>
    <menu-item></menu-item>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { IconItem, MenuItem } from "@/layout/header/components";
export default {
  name: "NavbarHeader",
  components: {
    IconItem,
    MenuItem
  },
  setup(props, context) {
    const iconName = ref("Lorelei47");
    return {
      iconName
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar-header {
  position: relative;
  display: flex;
  margin: 0 100px;
  height: 100px;
  font-size: 15px;
  transition: height 0.5s ease-in-out;
}

@media screen and (max-width: 960px) {
  .navbar-header {
    margin: 0 60px;
    height: 60px;
    font-size: 12px;
  }
}
</style>
