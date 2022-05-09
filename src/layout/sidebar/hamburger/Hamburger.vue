<template>
  <div v-if="isShow" class="hamburger-icon" :class="addClass" @click="open">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
export default {
  name: "Hamburger",
  props: {
    sidebarActive: {
      type: Boolean
    },
    humburgerActive: {
      type: Boolean
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  emits: ["active-func"],
  setup(props, context) {
    const isOpen = ref(false);
    const isHidden = ref(false);
    const open = () => {
      isOpen.value = !isOpen.value;
      context.emit("active-func", isOpen.value);
    };
    const addClass = computed(() => {
      return [{ "open": isOpen.value }, { "is-hidden": isHidden.value }];
    });
    watch(
      () => props.sidebarActive,
      () => {
        isOpen.value = props.sidebarActive;
      }
    );
    watch(
      () => props.humburgerActive,
      () => {
        isHidden.value = !props.humburgerActive;
      }
    );
    return {
      isOpen,
      isHidden,
      open,
      addClass
    };
  }
};
</script>

<style lang="scss" scoped>
.hamburger-icon {
  display: none;
  width: 20px;
  height: 20px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 6px;
    }
    &:nth-child(3) {
      top: 12px;
    }
  }
  &.open {
    span {
      &:nth-child(1) {
        top: 6px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
      }
      &:nth-child(2) {
        opacity: 0;
        left: -60px;
      }
      &:nth-child(3) {
        top: 6px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .hamburger-icon {
    display: inline-block;
  }
}
</style>
