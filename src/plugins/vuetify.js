import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: colors.green,
        secondary: colors.lightGreen,
        accent: colors.pink.darken1,
        error: colors.red.accent3,
        background: colors.indigo.lighten5,
        info: colors.teal.darken1,
        card: colors.lightGreen.lighten3,
        card_img: colors.lightGreen.lighten1,
      },
      dark: {
        primary: "#3f51b5",
        secondary: "#2196f3",
        accent: "#03a9f4",
        error: "#f44336",
        warning: "#ff9800",
        info: "#00bcd4",
        success: "#8bc34a",
        card: colors.blueGrey.darken3,
        card_img: colors.blueGrey.darken5,
        items: "#1e1e1e",
      },
    },
  },
});
