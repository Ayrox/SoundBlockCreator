/* eslint-disable prettier/prettier */
<template>
  <v-card class="" width="192" height="192" rounded="xl">
    <v-img height="70%" src="../assets/img/minecraft/ambient/basalt_deltas.png">
      <v-avatar max-width="10px" max-height="100%" rounded="100%" color="items">
        <v-img width="100%" src="../assets/img/actions/loop.svg" />
      </v-avatar>
    </v-img>
    <v-card-title height="30%">
      <v-card-title-text class="display-1">
        {{ action.name }}
      </v-card-title-text>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
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
v-card-title-text {
}

v-card-title {
  color: black;
  font-size: 100%;
}
</style>
