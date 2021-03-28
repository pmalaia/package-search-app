import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  rtl: false,
  theme: {
    dark: true,
    themes: {
      dark: {
        commonColor: "#35495E",
        primary: "#093D48",
        accent: "#FF4081",
        secondary: "#2c3d4e",
        secodTitle: "#42b883",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252",
      },
      light: {
        primary: "#1976D2",
        accent: "#e91e63",
        secondary: "#30b1dc",
        success: "#4CAF50",
        info: "#2196F3",
        warning: "#FB8C00",
        error: "#FF5252",
      },
    },
  },
});

export default vuetify;
