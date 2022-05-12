<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    app
    color="primary"
    permanent
  >
    <v-list-item class="px-2">
      <v-list-item-avatar @click.stop="mini = !mini">
        <v-img :src="require('../assets/logo.svg')" />
      </v-list-item-avatar>

      <v-list-item-title> SoundBlock Creator </v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider v-if="!mini"></v-divider>

    <v-list>
      <v-list-item to="/SoundBlockCreator/" link>
        <v-list-item-icon>
          <v-icon> mdi-view-dashboard </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> Dashboard </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-expansion-panel>
        <v-expansion-panel-header> Creator </v-expansion-panel-header>
      </v-expansion-panel>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          title: "Creator",
          icon: "mdi-briefcase",
          href: "/SoundBlockCreator/creator",
        },
        {
          title: "About",
          icon: "mdi-help-box",
          href: "/SoundBlockCreator/about",
        },
      ],
      drawer: true,
      mini: true,
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style></style>
