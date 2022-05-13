<template>
  <div class="home-view">
    <sp-section class="customize-bg">
      <div v-for="(item, index) in cardList" :key="index" class="card">
        <span class="card-title">{{ item.title }}</span>
        <p class="card-content">{{ item.content }}</p>
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
      { title: "what", content: "Do not go gentle into that good night" },
      { title: "why", content: "Old age should burn and rave at close of day" },
      { title: "how", content: "rage rage against the dying of the light" }
    ]);
    return {
      cardList
    };
  }
};
</script>

<style lang="scss" scoped>
.home-view {
  font-size: 15px;
  .sp-section {
    &.customize-bg {
      background-image: linear-gradient(
        265deg,
        rgba(44, 62, 78, 1) 12.6%,
        rgba(69, 103, 131, 1) 82.8%
      );
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
          background-image: linear-gradient(
            180deg,
            #0a1a2a 23.3%,
            #102235 84.7%
          );
          cursor: pointer;
          .card-title {
            margin-top: 1em;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2em;
            color: #456783;
            transition: 0.3s ease-out;
            text-transform: uppercase;
            font-family: fantasy;
            letter-spacing: 2px;
          }
          .card-content {
            opacity: 0;
          }
          &:hover {
            .card-title {
              opacity: 0;
            }
            .card-content {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 960px) {
  .card {
    max-height: 120px;
    width: 200px;
  }
}
</style>
