<template>
  <v-app>
    <Header />
    <Drawer />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Drawer from './components/Drawer.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Drawer,
    Header,
  },
  mounted() {
    const theme = localStorage.getItem('dark_theme');
    if (theme) {
      if (theme == 'true') {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
};
</script>
