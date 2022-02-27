<!-- https://minecraft.fandom.com/wiki/Sounds.json -->
<template>
  <div>
    <PageLoader v-if="!isLoaded" />

    <v-container>
      <v-lazy>
        <v-row>
          <v-col v-for="sound in sounds" :key="sound" cols="12" sm="3" md="2">
            <v-card class="col-md-3">
              <v-card-title v-text="sound"></v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-lazy>
    </v-container>
  </div>
</template>

<script>
import default_sounds from "../utils/DefaultSounds.json";
import PageLoader from "../components/PageLoader.vue";

export default {
  data: () => ({
    sounds: Object.keys(default_sounds),
    isloaded: false,
  }),

  mounted: () => {
    this.isloaded = true;
  },

  components: {
    PageLoader,
  },
};
</script>

<style></style>
