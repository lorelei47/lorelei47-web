<template>
  <div class="icon-item" @click="$router.push('/')">
    <span>{{ iconName }}</span>
  </div>
</template>

<script>
export default {
  name: "IconItem",
  props: {
    iconName: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-item {
  color: #fff;
  display: inline-block;
  margin: 20px 30px;
  flex: 1;
  line-height: 50px;
  text-align: center;
  font-size: 2.2em;
  font-weight: bold;
  font-family: fantasy;
  letter-spacing: 6px;
  user-select: none;
  span {
    transition: all 0.5s;
    -webkit-text-stroke: 1px #ffffff;
    font-variation-settings: "wght" 900, "ital" 1;
    font-size: 2.2rem;
    text-align: center;
    color: transparent;
    font-family: "Meta", sans-serif;
    text-shadow: 3px 3px 0px #e0e0e0, 4px 4px 0px #212121, 5px 5px 0px #616161,
      6px 6px 0px #9e9e9e, 8px 8px 7px #000000;
    cursor: pointer;
    &:hover {
      font-variation-settings: "wght" 900, "ital" 1;
      text-shadow: none;
    }
  }
}

@media screen and (max-width: 960px) {
  .icon-item {
    margin: 12px 18px;
    line-height: 36px;
    font-size: 1.6em;
    letter-spacing: 3.6px;
    span {
      font-size: 1.6rem;
      text-shadow: 2px 2px 0px #e0e0e0, 3px 3px 0px #212121, 4px 4px 0px #616161,
        5px 5px 0px #9e9e9e, 7px 7px 7px #000000;
    }
  }
}
</style>
