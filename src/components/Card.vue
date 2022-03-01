/* eslint-disable prettier/prettier */
<template>
  <v-card class="" width="192" height="192" rounded="xl">
    <v-img height="70%" src="../assets/img/minecraft/ambient/basalt_deltas.png">
      <v-avatar max-width="10px" max-height="100%" rounded="100%" color="items">
        <v-img width="100%" src="../assets/img/actions/loop.svg" />
      </v-avatar>
    </v-img>
    <v-card-title class="fit text-center">
      {{ toCapitalize(action.name.replaceAll("_", " ").replaceAll(".", " ")) }}
    </v-card-title>
  </v-card>
</template>

<script>
import { toCapitalize } from "../utils/functions";
import fitty from "fitty";

export default {
  methods: {
    toCapitalize,
  },
  mounted: () => {
    fitty(".fit", {
      minSize: 0,
      maxSize: 24,
    });
  },
  props: {
    type: {
      type: Object,
      required: true,
    },
    object: {
      type: Object,
      required: true,
    },
    action: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.fit {
  justify-content: center;
  align-items: center;
}
</style>
