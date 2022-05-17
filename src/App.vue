<template>
  <v-app>
    <Header />
    <Drawer />

    <v-main>
      <PageLoader v-if="!isloaded" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import PageLoader from "./components/PageLoader.vue";
import Drawer from "./components/Drawer.vue";
import Header from "./components/Header.vue";
//const fetchImg = require("./utils/fetchImg.js");
const fetchSounds = require("./utils/fetchSounds.js");

export default {
  name: "App",
  data() {
    return {
      isloaded: false,
    };
  },
  components: {
    Drawer,
    Header,
    PageLoader,
  },
  onCreated() {
    //fetchImg();
    fetchSounds();
  },
  mounted() {
    this.isloaded = true;
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
};
</script>
