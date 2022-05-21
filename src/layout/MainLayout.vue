<template>
  <div class="main-layout">
    <div class="container">
      <div class="header-container" :class="headerActive">
        <div class="header-bg"></div>
        <navbar-header></navbar-header>
      </div>
      <div class="sidebar-container">
        <sidebar :is-scroll="latsScroll"></sidebar>
      </div>
      <div class="main-container">
        <router-view></router-view>
      </div>
    </div>
    <sp-float-window></sp-float-window>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, onBeforeMount, computed, onMounted } from "vue";
import NavbarHeader from "@/layout/header/index.vue";
import Sidebar from "@/layout/sidebar/index.vue";
export default {
  name: "MainLayout",
  components: {
    NavbarHeader,
    Sidebar
  },
  setup() {
    const store = useStore();
    const headerIsHidden = ref(false);
    const latsScroll = ref(0);
    const headerActive = computed(() => {
      return [
        { "is-hidden": headerIsHidden.value },
        {
          "transparent":
            latsScroll.value < document.documentElement.clientHeight
        }
      ];
    });
    const scrollTop = () => {
      if (latsScroll.value < window.pageYOffset) {
        headerIsHidden.value = window.pageYOffset > 100 ? true : false;
      } else {
        headerIsHidden.value = false;
      }
      latsScroll.value = window.pageYOffset;
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollTop);
    });
    const router = useRouter();
    const openScreen = computed(() => {
      return store.state.openScreen;
    });
    onBeforeMount(() => {
      if (openScreen.value === "yes") {
        store.commit("closeScreen");
        router.push("screen");
      }
    });
    return {
      headerIsHidden,
      latsScroll,
      headerActive,
      scrollTop
    };
  }
};
</script>

<style lang="scss" scoped>
.main-layout {
  position: relative;
  .container {
    position: relative;
    .header-container {
      width: 100vw;
      height: 100px;
      position: fixed;
      top: 0;
      z-index: 999;
      transition: height 0.5s ease-in-out;
      .header-bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #000;
        transform: none;
        transition: 0.5s cubic-bezier(0, 0.5, 0.5, 1);
      }
      .navbar-header {
        background-color: transparent;
        transition: 0.5s cubic-bezier(0, 0.5, 0.5, 1);
      }
      &.is-hidden {
        .header-bg {
          transform: translate(0, -100%);
        }
        .navbar-header {
          opacity: 0;
        }
      }
      &.transparent {
        .header-bg {
          opacity: 0;
        }
      }
    }
    .sidebar-container {
      position: fixed;
      z-index: 1000;
      top: 0;
      right: 0;
      height: 100vh;
    }
    .main-container {
      z-index: 0;
    }
  }
}

@media screen and (max-width: 960px) {
  .main-layout {
    .container {
      .header-container {
        height: 60px;
      }
    }
  }
}
</style>
