<template>
  <div class="item" @click="goRouter">
    <span>{{ title }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Item",
  props: {
    title: {
      type: String,
      default: ""
    },
    to: {
      type: String,
      default: "/"
    }
  },
  setup(props, context) {
    const router = useRouter();
    const goRouter = () => {
      router.push(props.to);
    };
    return {
      goRouter
    };
  }
};
</script>

<style lang="scss" scoped>
.item {
  height: 35px;
  line-height: 35px;
  color: #fff;
  font-size: 1em;
  font-family: fantasy;
  text-transform: uppercase;
  text-align: right;
  letter-spacing: 1px;
  border-bottom: 1px solid #656565;
  cursor: pointer;
  user-select: none;
  transition: 0.5s ease-out;
  &:hover {
    color: #4f4f4f;
  }
}
</style>
