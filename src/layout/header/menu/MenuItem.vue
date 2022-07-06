<template>
  <div class="menu-item">
    <ul>
      <item
        v-for="(item, index) in menuList"
        :key="index"
        :title="item.name"
        :to="item.path"
      ></item>
    </ul>
  </div>
</template>

<script>
import menuList from "@/router/config/menu.js";
import Item from "@/layout/header/menu/Item.vue";
export default {
  name: "MenuItem",
  components: {
    Item
  },
  data() {
    return {
      menuList: []
    };
  }
};
</script>

<style lang="scss" scoped>
.menu-item {
  display: inline-block;
  margin: 1.3em 2em;
  user-select: none;
  flex: 5;
  height: 4em;
  line-height: 4em;
  font-size: 1em;
  font-family: fantasy;
  letter-spacing: 1px;
  color: white;
  text-align: left;
  ul {
    margin: 0;
  }
}

@media screen and (max-width: 960px) {
  .menu-item {
    display: none;
  }
}
</style>
