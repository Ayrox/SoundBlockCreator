import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
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
        primary: colors.blue.darken4,
        secondary: colors.blue.darken4,
        background: colors.indigo.base,
        info: colors.teal.lighten1,
        card: colors.blueGrey.darken1,
        card_img: colors.blueGrey.darken5,
        items: "#1e1e1e",
      },
    },
  },
});
