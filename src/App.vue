<template>
  <v-app>
    <v-toolbar right dark >
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title>SoundBlock Creator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn color="#555" href="#">About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <v-navigation-drawer
        :mini-variant.sync="mini"
        dark
        left
        v-model="drawer"
      >
        <v-list-item dense>
          <v-list-item-content>
            <v-list-item-avatar>
              <v-img src="./assets/logo.svg"></v-img>
            </v-list-item-avatar>
            <v-list-item-subtitle>
              Create your own Sound Pack for Minecraft
            </v-list-item-subtitle>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      drawer: true,
      mini: true,

    };
  },
};
</script>
