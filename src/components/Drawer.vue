<template>
  <v-navigation-drawer app color="primary" stateless permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img :src="require('../assets/logo.svg')" />
      </v-list-item-avatar>

      <v-list-item-title> SoundBlock Creator </v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider v-if="!mini"></v-divider>

    <v-list-item-group mandatory>
      <v-list-item to="/SoundBlockCreator/" link>
        <v-list-item-icon>
          <v-icon> mdi-view-dashboard </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> Dashboard </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/SoundBlockCreator/creator" link>
        <v-list-item-icon>
          <v-icon> mdi-briefcase </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> Creator </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/SoundBlockCreator/about" link>
        <v-list-item-icon>
          <v-icon> mdi-help-box </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> About </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-navigation-drawer>
</template>

<script>
import { getInfo } from "../utils/functions";
export default {
  data: () => {
    return {
      drawer: true,
      active: [],
      open: [],
      mini: true,
      info: getInfo(),
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];
      console.log(id);
      return id;
    },
  },
};
</script>

<style></style>
