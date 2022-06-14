<template>
  <div class="lorelei-card">
    <div class="front">
      <slot name="front">金色传说</slot>
    </div>
    <div class="back">
      <slot name="back">银色传说</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoreleiCard"
};
</script>

<style lang="scss" scoped>
@mixin card {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  backface-visibility: hidden;
  transition: transform 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.18);
  text-shadow: 0 0.15rem 0.2rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.lorelei-card {
  position: relative;
  perspective: 1000px;
  .front {
    @include card;
    transform: rotatey(0deg);
  }
  .back {
    @include card;
    transform: rotatey(-180deg);
  }
}
</style>
