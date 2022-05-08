<template>
  <div class="button-view">
    <sp-section type="light-purple">
      <ul>
        <sp-button size="big">big size</sp-button>
        <sp-button>medium size</sp-button>
        <sp-button size="small">small size</sp-button>
      </ul>
      <ul>
        <sp-button color="white">white</sp-button>
        <sp-button color="black">black</sp-button>
      </ul>
      <ul>
        <sp-button effect="down">down effect</sp-button>
        <sp-button effect="up">up effect</sp-button>
        <sp-button effect="left">left effect</sp-button>
        <sp-button effect="right">right effect</sp-button>
        <sp-button effect="opacity">opacity effect</sp-button>
      </ul>
      <ul>
        <sp-button color="black" effect="down">down effect</sp-button>
        <sp-button color="black" effect="up">up effect</sp-button>
        <sp-button color="black" effect="left">left effect</sp-button>
        <sp-button color="black" effect="right">right effect</sp-button>
        <sp-button color="black" effect="opacity">opacity effect</sp-button>
      </ul>
      <ul>
        <sp-menu-button></sp-menu-button>
        <sp-menu-button uppercase>left effect</sp-menu-button>
        <sp-menu-button uppercase effect="right">right effect</sp-menu-button>
        <sp-menu-button uppercase effect="center">center effect</sp-menu-button>
      </ul>
    </sp-section>
    <sp-section type="light-pink"></sp-section>
    <sp-section type="light-cyan"></sp-section>
    <sp-section type="light-yellow"></sp-section>
  </div>
</template>

<script>
export default {
  name: "ButtonView"
};
</script>

<style lang="scss" scoped>
.button-view {
  ul {
    display: inline-block;
    width: 100%;
    margin-top: 140px;
    padding-left: 100px;
    box-sizing: border-box;
    ~ ul {
      margin-top: 30px;
    }
  }
}
</style>
