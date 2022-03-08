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
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :href="item.href"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          href: "/",
        },
        {
          title: "Creator",
          icon: "mdi-briefcase",
          href: "/creator",
        },
        {
          title: "About",
          icon: "mdi-help-box",
          href: "/about",
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
