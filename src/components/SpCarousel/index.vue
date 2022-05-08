<template>
  <div class="sp-carousel" @mouseleave="openTimeFn" @mouseenter="clearTimeFn">
    <ul class="sp-carousel-container">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="sp-carousel-slide"
        :class="{ fade: indexid === index }"
      >
        <router-link :to="item.to">
          <div
            class="background-img"
            :style="{ backgroundImage: `url(${item.url})` }"
          ></div>
        </router-link>
      </li>
    </ul>
    <a class="sp-carousel-btn prev" @click="lastPage"></a>
    <a class="sp-carousel-btn next" @click="nextPage"></a>
    <div class="sp-carousel-indicator">
      <span
        v-for="i in list.length"
        :key="i"
        :class="{ active: indexid === i - 1 }"
        @click="indexid = i - 1"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, watch, onUnmounted } from "vue";
export default {
  name: "SpCarousel",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    /**轮播图切换的时间 */
    duration: {
      type: Number,
      default: 5
    },
    /**是否开启轮播 */
    autoplay: {
      type: Boolean,
      default: true
    },
    /**翻页 */
    page: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    /**索引 */
    const indexid = ref(0);
    /**轮播 */
    const timer = ref(null);
    const timeFn = () => {
      clearInterval(timer);
      timer.value = setInterval(() => {
        indexid.value++;
        if (indexid.value > props.list.length - 1) {
          indexid.value = 0;
        }
      }, props.duration * 1000);
    };
    /**点击下一张slide的事件 */
    const nextPage = () => {
      indexid.value += props.page;
      if (indexid.value > props.list.length - 1) {
        indexid.value = 0;
      }
    };
    /**点击上一张slide的事件 */
    const lastPage = () => {
      indexid.value -= props.page;
      if (indexid.value < 0) {
        indexid.value = props.list.length - 1;
      }
    };
    /**清除定时器 */
    const clearTimeFn = () => {
      clearInterval(timer.value);
    };
    onUnmounted(() => {
      clearInterval(timer.value);
    });
    /**开启定时器 */
    const openTimeFn = () => {
      if (props.list.length > 1 && props.autoplay) {
        timeFn();
      }
    };
    watch(
      () => props.list.length,
      () => {
        if (props.list.length > 1 && props.autoplay) {
          timeFn();
        }
      }
    );
    return { indexid, clearTimeFn, openTimeFn, nextPage, lastPage };
  }
};
</script>

<style lang="scss" scoped>
$grey: #ffffff;
.sp-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .sp-carousel-container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    .sp-carousel-slide {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      list-style: none;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      .background-img {
        position: absolute;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
  .sp-carousel-indicator {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    z-index: 2;
    text-align: center;
    span {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: #656060;
      border-radius: 50%;
      cursor: pointer;
      ~ span {
        margin-left: 12px;
      }
      &.active {
        background-color: #ffffff;
      }
    }
  }
  .sp-carousel-btn {
    position: absolute;
    top: 50%;
    z-index: 2;
    border-width: 14px;
    border-style: solid;
    transform: translateY(-50%);
    color: #fff;
    text-align: center;
    line-height: 44px;
    opacity: 0;
    transition: all 0.5s;
    cursor: pointer;
    &.prev {
      left: 0px;
      border-color: transparent $grey transparent transparent;
    }
    &.next {
      right: 0px;
      border-color: transparent transparent transparent $grey;
    }
  }
  &:hover {
    .sp-carousel-btn {
      opacity: 1;
    }
  }
}
</style>
