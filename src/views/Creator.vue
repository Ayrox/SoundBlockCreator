<!-- https://minecraft.fandom.com/wiki/Sounds.json -->
<template>
  <p>oui</p>
  <!--
  <v-list>
    <v-card :v-for="sound in sounds" class="col-md-3">{{ sound }}</v-card>
  </v-list>-->
</template>

<script>
import DefaultSounds from '../utils/DefaultSounds.json';

export default {
  data: () => {
    return {
      sounds: DefaultSounds,
    };
  },
};
</script>

<style></style>
