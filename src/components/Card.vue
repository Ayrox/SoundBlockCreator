<template>
  <v-card>
    {{ action.name }}
  </v-card>
</template>

<script>
export default {
  props: {
    action: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
