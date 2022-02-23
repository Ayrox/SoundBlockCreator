<template>
  <v-app-bar elevate-on-scroll app color="primary">
    <v-spacer />
    <theme-switch />
  </v-app-bar>
</template>

<script>
import ThemeSwitch from './ThemeSwitch.vue';

export default {
  components: {
    ThemeSwitch,
  },
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());
    },
  },
};
</script>

<style></style>
