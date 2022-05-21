import SpSection from "@/components/SpSection/index.vue";
import SpCarousel from "@/components/SpCarousel/index.vue";
import SpButton from "@/components/SpButton/index.vue";
import SpMenuButton from "@/components/SpButton/SpMenuButton/index.vue";
import SpVideo from "@/components/SpVideo/index.vue";
import SpVideoBg from "@/components/SpVideo/SpVideoBg/index.vue";
import SpOpenScreen from "@/components/SpOpenScreen/index.vue";
import SpFloatWindow from "@/components/SpFloatWindow/index.vue";

const components = [
  SpSection,
  SpCarousel,
  SpButton,
  SpMenuButton,
  SpVideo,
  SpVideoBg,
  SpOpenScreen,
  SpFloatWindow
];

export default {
  install(app) {
    components.forEach((elem) => {
      app.component(elem.name, elem);
    });
  }
};
