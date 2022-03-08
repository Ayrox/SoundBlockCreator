/* eslint-disable prettier/prettier */
<template>
  <v-card
    class=""
    width="192"
    height="192"
    min-height="192"
    min-width="192"
    rounded="xl"
    color="card"
    elevation="6"
  >
    <v-img
      height="70%"
      class="bck-color"
      src="../assets/img/minecraft/ambient/basalt_deltas.png"
    >
      <v-avatar
        width="10px"
        rounded="100%"
        v-for="act in this.actionList"
        :key="act"
      >
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-img
              max-width="80%"
              max-height="80%"
              class="svg"
              content-class="inside-svg"
              :src="getImg(act)"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <span>
            {{ toCapitalize(act.replaceAll("_", " ").replaceAll(".", " ")) }}
          </span>
        </v-tooltip>
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
  data() {
    return {
      actionList: this.action.name.split("."),
      completName: this.action.name,
    };
  },
  methods: {
    toCapitalize,
    getImg: (action) => {
      try {
        return require(`../assets/img/actions/${action.toLowerCase()}.svg`);
      } catch (e) {
        return;
      }
    },
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
.svg {
  filter: invert(100%) sepia(55%) saturate(1522%) hue-rotate(217deg)
    brightness(109%) contrast(110%);
}
.fit {
  justify-content: center;
  align-items: center;
}

.bck-color {
  background-color: card_img;
}
</style>
