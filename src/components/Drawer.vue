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
      <v-list-group prepend-icon="mdi-briefcase">
        <template v-slot:activator>
          <v-list-item-title> Creator </v-list-item-title>
        </template>

        <v-treeview :items="info" hoverable activatable open-all></v-treeview>
      </v-list-group>
      <v-list-item to="/SoundBlockCreator/about" link>
        <v-list-item-icon>
          <v-icon> mdi-help-box </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> About </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { getInfo } from "../utils/functions";
export default {
  data: () => {
    return {
      drawer: true,
      mini: true,
      info: getInfo(),
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
