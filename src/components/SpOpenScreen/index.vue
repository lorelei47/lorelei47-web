<template>
  <div class="sp-open-screen">
    <sp-menu-button effect="center" @click="clickHide">close</sp-menu-button>
    <slot></slot>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "SpOpenScreen",
  props: {
    dely: {
      type: Number,
      default: 5
    },
    toRouter: {
      type: Boolean,
      default: false
    },
    index: {
      type: String,
      default: "home"
    }
  },
  emits: ["closeFlag"],
  setup(props, { emit }) {
    const hide = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, props.dely * 1000 + 1000);
      });
    };
    const clickHide = () => {
      emit("closeFlag", true);
    };
    onMounted(() => {
      hide().then(() => {
        emit("closeFlag", true);
      });
    });
    const router = useRouter();
    onBeforeUnmount(() => {
      if (props.toRouter) {
        router.push(props.index);
      }
    });
    return {
      hide,
      clickHide
    };
  }
};
</script>

<style lang="scss" scoped>
.sp-open-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: 9999;
  transition: opacity 0.7s ease-in;
  .sp-menu-button {
    margin-right: 0;
    position: absolute;
    right: -60px;
    top: 30px;
    transition: right 0.3s ease-out;
  }
  &:hover {
    .sp-menu-button {
      right: 30px;
    }
  }
}
</style>
