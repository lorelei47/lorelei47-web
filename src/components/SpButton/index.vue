<template>
  <button class="sp-button" :class="classList">
    <span><slot>button</slot></span>
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  name: "SpButton",
  props: {
    color: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "medium"
    },
    effect: {
      type: String,
      default: "down"
    }
  },
  setup(props) {
    const classList = computed(() => {
      return [
        "sp-button-" + props.size,
        "sp-button-" + props.color,
        "sp-button-" + props.effect
      ];
    });
    return {
      classList
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin button-size($scale) {
  padding: calc(10px * $scale) calc(20px * $scale);
  font-size: calc(1em * $scale);
}
::before,
::after {
  position: absolute;
  content: "";
}
.sp-button {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  span {
    position: relative;
    display: inline-block;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Courier New", Courier, monospace;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.3s;
  }
  /** size */
  &.sp-button-medium {
    @include button-size(1);
  }
  &.sp-button-big {
    @include button-size(1.2);
  }
  &.sp-button-small {
    @include button-size(0.8);
  }
  /** color */
  &.sp-button-white {
    color: white;
    border: 2px solid white;
    &::before {
      background-color: white;
      transition: 0.3s ease-out;
    }
    &:hover {
      span {
        color: #1c1f1e;
        transition: 0.2s 0.1s;
      }
    }
  }
  &.sp-button-black {
    color: #1c1f1e;
    border: 2px solid #1c1f1e;
    &::before {
      background-color: #1c1f1e;
      transition: 0.3s ease-out;
    }
    &:hover {
      span {
        color: white;
        transition: 0.2s 0.1s;
      }
    }
  }
  /** effect */
  &.sp-button-down {
    &::before {
      top: 0;
      left: 0;
      right: 0;
      height: 0%;
      width: 100%;
    }
    &:hover::before {
      height: 100%;
    }
  }
  &.sp-button-up {
    &::before {
      bottom: 0;
      left: 0;
      right: 0;
      height: 0%;
      width: 100%;
    }
    &:hover::before {
      height: 100%;
    }
  }
  &.sp-button-left {
    &::before {
      top: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 0%;
    }
    &:hover::before {
      width: 100%;
    }
  }
  &.sp-button-right {
    &::before {
      top: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 0%;
    }
    &:hover::before {
      width: 100%;
    }
  }
  &.sp-button-opacity {
    &::before {
      top: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
    }
    &:hover::before {
      opacity: 1;
    }
  }
}
</style>
