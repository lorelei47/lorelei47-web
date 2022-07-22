<template>
  <div class="home-view">
    <sp-section class="customize-bg">
      <lorelei-card
        v-for="(item, index) in cardList"
        :key="index"
        class="card"
        :class="isDecode"
        :decode-flag="item.active"
        @click="clickHandle(index + 1)"
      >
        <template #front>
          <div class="card-container-front">
            <div class="card-text">
              <span class="card-title">{{ item.title }}</span>
              <p class="card-content">{{ item.frontContent }}</p>
            </div>
          </div>
        </template>
        <template #back>
          <div class="card-container-back">
            <div>{{ item.backContent }}</div>
          </div>
        </template>
      </lorelei-card>
    </sp-section>
    <sp-float-window> </sp-float-window>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import LoreleiCard from "@/views/home/LoreleiCard/index.vue";
export default {
  name: "HomeView",
  components: {
    LoreleiCard
  },
  setup() {
    const key = ref([1, 2, 3, 1, 2, 3]);
    const tapResult = ref([]);
    const decodeClass = ref(false);
    const cardList = ref([
      {
        title: `what`,
        frontContent: `这个网站有点奇怪，藏了些秘密`,
        backContent: `水`,
        active: false
      },
      {
        title: `why`,
        frontContent: `不只是展示，增加一些互动会更好`,
        backContent: `浒`,
        active: false
      },
      {
        title: `how`,
        frontContent: `听说这张牌可以翻过来，也可能是个传闻`,
        backContent: `传`,
        active: false
      }
    ]);
    const isDecode = computed(() => {
      return [decodeClass.value ? "card-active" : "card-hover"];
    });
    const clickHandle = (e) => {
      if (decodeClass.value) {
      } else {
        if (tapResult.value.length >= key.value.length) {
          tapResult.value.shift();
        }
        tapResult.value.push(e);
        if (
          key.value.length === tapResult.value.length &&
          key.value.every((v, i) => v === tapResult.value[i])
        ) {
          decodeClass.value = true;
          cardList.value.forEach((elem) => {
            elem.active = true;
          });
        }
      }
    };
    return {
      cardList,
      isDecode,
      clickHandle
    };
  }
};
</script>

<style lang="scss" scoped>
@mixin card-common {
  opacity: 0;
  animation: none;
}
@mixin geadient($deg: 0deg) {
  background-image: linear-gradient($deg, #4bafff, #456783 43%, #7cedfa);
}
@mixin card-container {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
}
.home-view {
  font-size: 15px;
  .sp-section {
    &.customize-bg {
      background-image: linear-gradient(265deg, #042231 12.6%, #02192a 82.8%);
      &:nth-child(1) {
        padding: 60px 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        .card {
          position: relative;
          height: 350px;
          width: 250px;
          .card-container-front {
            @include card-container;
            background-image: linear-gradient(
              180deg,
              #06101a 23.3%,
              #06182a 84.7%
            );
            transition: 0.3s ease-in;
            overflow: hidden;
            user-select: none;
            .card-text {
              position: absolute;
              bottom: -60px;
              padding-left: 20px;
              padding-right: 20px;
              transition: 0.3s ease-out;
              color: #06101a;
              .card-title {
                box-sizing: border-box;
                font-size: 2em;
                text-transform: uppercase;
                font-family: fantasy;
                letter-spacing: 2px;
              }
              .card-content {
                margin-top: 10px;
                opacity: 1;
                font-size: 1.2em;
              }
            }
          }
          .card-container-back {
            @include card-container;
            background-image: linear-gradient(
              180deg,
              #0376e8 23.3%,
              #00a27a 84.7%
            );
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 8em;
            color: white;
          }
          &.card-hover {
            transition: transform 0.1s ease-in-out;
            &::before {
              $width: 2px;
              content: "";
              z-index: -1;
              position: absolute;
              top: -$width;
              left: -$width;
              width: calc(100% + 2 * $width);
              height: calc(100% + 2 * $width);
              border-radius: 8px;
              transition: 0.5s ease-in-out;
              box-shadow: 0px 2px 5px #06101a;
              @include card-common;
              @include geadient;
            }
            &::after {
              content: "";
              z-index: -1;
              position: absolute;
              top: calc(350px / 6);
              left: 0;
              right: 0;
              height: 100%;
              width: 100%;
              margin: 0 auto;
              transform: scale(0.8);
              filter: blur(calc(350px / 6));
              transition: opacity 0.5s;
              @include card-common;
              @include geadient;
            }
            &:hover {
              transform: scale(1.02);
              .card-container-front {
                height: 371px;
                width: 265px;
              }
              &::before {
                opacity: 1;
              }
              &::after {
                animation: spin 4s linear infinite;
                opacity: 1;
              }
              .card-text {
                bottom: 0;
                color: #94ddff;
              }
            }
          }
          &.card-active {
            transition: transform 0.1s ease-in-out;
            .front {
              &.active {
                transform: rotatey(180deg);
              }
            }
            .back {
              &.active {
                transform: rotatey(0deg);
              }
            }
            // &::before {
            //   $width: 2px;
            //   content: "";
            //   z-index: -1;
            //   position: absolute;
            //   top: -$width;
            //   left: -$width;
            //   width: calc(100% + 2 * $width);
            //   height: calc(100% + 2 * $width);
            //   border-radius: 8px;
            //   transition: 0.5s ease-in-out;
            //   box-shadow: 0px 2px 5px #06101a;
            //   @include card-common;
            //   @include geadient;
            // }
            &::after {
              content: "";
              z-index: -1;
              position: absolute;
              // top: calc(350px / 6);
              left: 0;
              right: 0;
              height: 100%;
              width: 100%;
              margin: 0 auto;
              transform: scale(0.8);
              filter: blur(calc(350px / 6));
              transition: opacity 0.5s;
              @include card-common;
              @include geadient;
            }
            &:hover {
              transform: scale(1.02);
              .card-container-front {
                height: 371px;
                width: 265px;
              }
              &::before {
                opacity: 1;
              }
              &::after {
                animation: spin 4s linear infinite;
                opacity: 1;
              }
              .card-text {
                bottom: 0;
                color: #94ddff;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: scale(0.8);
    background-color: #4bafff;
  }
  50% {
    transform: scale(0.7);
    background-color: #7cedfa;
  }
  100% {
    transform: scale(0.8);
    background-color: #4bafff;
  }
}

@media screen and (max-width: 960px) {
  .customize-bg {
    flex-flow: column;
    .card {
      max-height: 120px;
      width: 200px;
    }
  }
}
</style>
