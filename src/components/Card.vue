/* eslint-disable prettier/prettier */
<template>
  <v-hover>
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
        height="70%"
        :src="getImg(type, object)"
        class="blue-grey darken-4"
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
                :src="getIcon(act)"
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
      <v-card-title
        class="fit text-center pt-6"
        style="width: 100%; position: relative"
      >
        {{
          toCapitalize(action.name.replaceAll("_", " ").replaceAll(".", " "))
        }}
        <SoundDialog :type="type" :object="object" :action="action" />
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
import SoundDialog from "../components/SoundDialog";
import { toCapitalize } from "../utils/functions";
import fitty from "fitty";

export default {
  data() {
    return {
      actionList: this.action.name.split("."),
      completName: this.action.name,
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
