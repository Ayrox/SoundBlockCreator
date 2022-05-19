<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        absolute
        color="orange"
        class="white--text"
        fab
        right
        top
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-layout justify-center class="pa-5 d-flex">
          <v-avatar height="60px" width="60px" color="#696969">
            <img :src="getImg(type, object)" />
          </v-avatar>
          <v-card-title class="font-weight-bold">
            <h2>{{ toCapitalize(object.name.replaceAll("_", " ")) }}</h2>
          </v-card-title>
        </v-layout>
        <v-layout justify-center class="pa-5 d-flex">
          <v-list-item-group mandatory v-model="selectedAction">
            <v-virtual-scroll
              height="200px"
              :items="actions"
              item-height="50px"
              width="400px"
              class="ma-1"
              bench="10"
            >
              <template v-slot:default="{ item }">
                <v-list-item :key="item.id" :value="item.id">
                  <v-avatar width="10px" rounded="100%" class="mr-2">
                    <v-img
                      max-width="80%"
                      max-height="80%"
                      class="svg"
                      content-class="inside-svg"
                      :src="getIcon(item.name)"
                    />
                  </v-avatar>
                  <v-list-item-title>
                    {{ toCapitalize(item.name.replaceAll("_", " ")) }}
                  </v-list-item-title>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-list-item-group>
          <v-list-item-group mandatory v-model="selectedSound">
            <v-virtual-scroll
              height="200px"
              :items="getSounds(selectedAction, actions, type, object)"
              item-height="50px"
              width="400px"
              class="ma-1"
              bench="100"
            >
              <template v-slot:default="{ item }">
                <v-list-item :key="item.id" :value="item.id">
                  <v-list-item-title>
                    {{ item.name }}
                  </v-list-item-title>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-list-item-group>
          <!-- <v-list-item-group mandatory>
            <v-virtual-scroll
              height="200px"
              :items="actions"
              item-height="50px"
              width="300px"
            >
              <template v-slot:default="{ item }">
                <v-list-item :key="item.id" :value="item.id">
                  <v-avatar width="10px" rounded="100%" class="mr-2">
                    <v-img
                      max-width="80%"
                      max-height="80%"
                      class="svg"
                      content-class="inside-svg"
                      :src="getIcon(item.name)"
                    />
                  </v-avatar>
                  <v-list-item-title>
                    {{ toCapitalize(item.name.replaceAll("_", " ")) }}
                  </v-list-item-title>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-list-item-group> -->
        </v-layout>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog.value = false">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog.value = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import default_sounds from "../utils/DefaultSounds.json";
import { toCapitalize } from "../utils/functions";

export default {
  data() {
    return {
      dialog: false,
      actions: this.object.children,
      subtitle: "",
      replace: "",
      sounds: [],
      selectedAction: false,
      selectedSound: false,
    };
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
    getSounds: (id, actions, type, object) => {
      if (id === false) return [];
      let action = actions.find((action) => action.id === id);
      let fullname =
        action.name === "default"
          ? type.name + "." + object.name
          : type.name + "." + object.name + "." + action.name;

      let soundObject = default_sounds[fullname];
      return soundObject.sounds;
    },
  },
  computed: {
    selectedInfo() {
      let action = this.actions.find(
        (action) => action.id === this.selectedAction
      );

      let fullname =
        action.name === "default"
          ? this.type.name + "." + this.object.name
          : this.type.name + "." + this.object.name + "." + action.name;

      let soundObject = default_sounds[fullname];
      if (soundObject) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.replace = soundObject.replace;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.subtitle = soundObject.subtitle;
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sounds = soundObject.sounds;
        console.log(this.sounds);
      }
      return soundObject.sounds;
    },
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

<style scoped>
.svg {
  filter: invert(100%) sepia(55%) saturate(1522%) hue-rotate(217deg)
    brightness(109%) contrast(110%);
}
.v-virtual-scroll {
  background-color: rgb(77, 77, 77);
  border: 3px solid rgb(55, 55, 55);
}
</style>
