/* eslint-disable prettier/prettier */
<template>
  <v-scale-transition>
    <v-card
      width="192"
      height="192"
      min-height="192"
      min-width="192"
      rounded="xl"
      color="card"
      elevation="4"
    >
      <v-img
        eager
        height="70%"
        :src="getImg(type, object)"
        class="blue-grey darken-4"
      >
      </v-img>
      <v-card-title
        class="fit text-center pt-6"
        style="width: 100%; position: relative"
      >
        {{
          toCapitalize(object.name.replaceAll("_", " ").replaceAll(".", " "))
        }}
        <SoundDialog :type="type" :object="object" />
      </v-card-title>
    </v-card>
  </v-scale-transition>
</template>

<script>
import SoundDialog from "../components/SoundDialog";
import { toCapitalize } from "../utils/functions";
import fitty from "fitty";

export default {
  data() {
    return {
      action: null,
    };
  },
  components: {
    SoundDialog,
  },
  methods: {
    toCapitalize,
    getIcon: (action) => {
      try {
        return require(`../assets/img/actions/${action.toLowerCase()}.svg`);
      } catch (e) {
        return;
      }
    },
    getImg: (type, object) => {
      try {
        return require(`../assets/img/minecraft/${type.name
          .toLowerCase()
          .replaceAll(" ", "_")}/${object.name
          .toLowerCase()
          .replaceAll(" ", "_")}.png`);
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
  },
};
</script>

<style lang="scss" scoped>
.card {
  border: 2px solid;
}

.fit {
  justify-content: center;
  align-items: center;
}
</style>
