import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import ComponentDemo from "../components/ComponentDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import CardDemo from "../components/CardDemo.vue";
import CardHeaderDemo from "../components/CardHeaderDemo.vue";
import CardTitleDemo from "../components/CardTitleDemo.vue";
import CardDescriptionDemo from "../components/CardDescriptionDemo.vue";
import CardContentDemo from "../components/CardContentDemo.vue";
import CardFooterDemo from "../components/CardFooterDemo.vue";
import "./custom.css";
import "./demo.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component("ComponentDemo", ComponentDemo);
    app.component("ButtonDemo", ButtonDemo);
    app.component("CardDemo", CardDemo);
    app.component("CardHeaderDemo", CardHeaderDemo);
    app.component("CardTitleDemo", CardTitleDemo);
    app.component("CardDescriptionDemo", CardDescriptionDemo);
    app.component("CardContentDemo", CardContentDemo);
    app.component("CardFooterDemo", CardFooterDemo);
  },
};

