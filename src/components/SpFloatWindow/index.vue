<template>
  <div class="sp-float-window">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SpFloatWindow"
};
</script>

<style lang="scss" scoped>
.sp-float-window {
  box-sizing: border-box;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 3px 3px 0 rgb(0, 0, 0, 0.14);
  background-color: #003f4c;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-duration: 400ms;
  cursor: pointer;
  &:hover {
    background-color: #006e7c;
    transform: scale(1.2, 1.2) translate3d(0, 0, 0);
  }
}
@media screen and (max-width: 960px) {
  .sp-float-window {
    width: 40px;
    height: 40px;
  }
}
</style>
