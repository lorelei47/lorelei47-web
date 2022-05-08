<template>
  <div class="sidebar">
    <hamburger
      is-show
      :sidebar-active="sidebarActive"
      :humburger-active="humburgerActive"
      @active-func="isOpen"
    ></hamburger>
    <div class="sidebar-content" :class="sidebarClass">
      <ul>
        <item
          v-for="(item, index) in menuList"
          :key="index"
          :title="item.name"
          :to="item.path"
        ></item>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import menuLists from "@/router/config/menu.js";
import { Hamburger, Item } from "@/layout/sidebar/components.js";
export default {
  name: "Sidebar",
  components: {
    Hamburger,
    Item
  },
  props: {
    isScroll: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const sidebarActive = ref(false);
    const humburgerActive = ref(true);
    const menuList = ref(menuLists);

    const sidebarClass = computed(() => {
      return sidebarActive.value ? "" : "is-hidden";
    });

    const isOpen = (status) => {
      sidebarActive.value = status;
    };

    watch(
      () => props.isScroll,
      (newVal, oldVal) => {
        if (oldVal < newVal) {
          humburgerActive.value = newVal > 100 ? false : true;
        } else {
          humburgerActive.value = true;
        }
        sidebarActive.value = false;
      }
    );
    return {
      sidebarActive,
      humburgerActive,
      menuList,
      sidebarClass,
      isOpen
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  height: 100%;
  font-size: 15px;
  .hamburger-icon {
    position: fixed;
    top: 40px;
    right: 40px;
    &.is-hidden {
      opacity: 0;
      transition: 0.3s cubic-bezier(0, 0.6, 0.4, 1);
    }
  }
  .sidebar-content {
    width: 250px;
    height: 100%;
    background-color: #000;
    transition: 0.5s cubic-bezier(0, 0.6, 0.4, 1);
    &.is-hidden {
      width: 0;
      ul {
        opacity: 0;
      }
    }
    ul {
      margin: 0;
      padding-top: 80px;
      padding-left: 40px;
      transition: 0.7s cubic-bezier(0, 0.6, 0.4, 1);
      .item {
        margin-right: 40px;
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .sidebar {
    font-size: 12px;
    .hamburger-icon {
      top: 24px;
      right: 24px;
    }
    .sidebar-content {
      width: 160px;
      ul {
        padding-top: 48px;
        padding-left: 24px;
        .item {
          margin-right: 24px;
        }
      }
    }
  }
}
</style>
