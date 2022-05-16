<template>
  <div class="home-view">
    <sp-section class="customize-bg">
      <div v-for="(item, index) in cardList" :key="index" class="card">
        <div class="card-container">
          <div class="card-text">
            <span class="card-title">{{ item.title }}</span>
            <p class="card-content">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </sp-section>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    const cardList = ref([
      {
        title: `what`,
        content: `do not go gentle into that good night`
      },
      { title: `why`, content: `old age should burn and rave at close of day` },
      { title: `how`, content: `rage rage against the dying of the light` }
    ]);
    return {
      cardList
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
          .card-container {
            box-sizing: border-box;
            position: relative;
            z-index: 1;
            height: 350px;
            width: 250px;
            background-image: linear-gradient(
              180deg,
              #06101a 23.3%,
              #06182a 84.7%
            );
            transition: 0.3s ease-in;
            cursor: pointer;
            overflow: hidden;
            border-radius: 10px;
            .card-text {
              position: absolute;
              bottom: -60px;
              padding-left: 20px;
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
          &::before {
            $width: 2px;
            content: "";
            z-index: 1;
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
            .card-container {
              height: 385px;
              width: 275px;
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
      .card-container {
        max-height: 120px;
        width: 200px;
      }
    }
  }
}
</style>
