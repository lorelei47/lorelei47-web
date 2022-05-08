<template>
  <a class="sp-menu-button" :class="classList">
    <slot>button</slot>
  </a>
</template>

<script>
import { computed } from "vue";
export default {
  name: "SpMenuButton",
  props: {
    effect: {
      type: String,
      default: "left"
    },
    uppercase: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classList = computed(() => {
      return [
        { "word-uppercase": props.uppercase },
        "sp-menu-button-" + props.effect
      ];
    });
    return {
      classList
    };
  }
};
</script>

<style lang="scss" scoped>
.sp-menu-button {
  position: relative;
  padding: 5px 0;
  margin-right: 20px;
  letter-spacing: 1px;
  font-size: 1em;
  font-family: fantasy;
  color: #fff;
  cursor: pointer;
  &.word-uppercase {
    text-transform: uppercase;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #fff;
    transition: width 0.25s ease-in;
  }
  &.sp-menu-button-left {
    &::before {
      left: 0%;
    }
    &:hover::before {
      width: 100%;
    }
  }
  &.sp-menu-button-right {
    &::before {
      right: 0%;
    }
    &:hover::before {
      width: 100%;
    }
  }
  &.sp-menu-button-center {
    &::before {
      right: 50%;
    }
    &::after {
      left: 50%;
    }
    &:hover::before,
    &:hover::after {
      width: 50%;
    }
  }
}
</style>
