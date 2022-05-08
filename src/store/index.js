import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state() {
    return {
      openScreen: sessionStorage.getItem("openScreen") || "yes"
    };
  },
  mutations: {
    closeScreen(state) {
      state.openScreen = "no";
      sessionStorage.setItem("openScreen", state.openScreen);
    }
  }
});
