<template>
  <div>
    <v-btn icon @click="toggleTheme">
      <v-icon v-if="!dark" color="yellow"> mdi-white-balance-sunny </v-icon>
      <v-icon v-else color="white"> mdi-weather-night </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      dark: localStorage.getItem('dark_theme') == 'true',
    };
  },

  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());
      this.dark = this.$vuetify.theme.dark;
    },
  },
};
</script>
