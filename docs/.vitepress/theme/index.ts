import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import ComponentDemo from "../components/ComponentDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import "./custom.css";
import "./demo.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component("ComponentDemo", ComponentDemo);
    app.component("ButtonDemo", ButtonDemo);
  },
};

