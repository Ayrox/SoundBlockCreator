<template>
  <v-dialog v-model="dialog" max-width="600px">
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
        <v-card-title>{{ action.name }}</v-card-title>
        <v-card-text>
          <v-checkbox :value="replace" label="Replace"></v-checkbox>
        </v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="sound in sounds" :key="sound">
            <v-expansion-panel-header class="font-weight-bold">
              {{ sound.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-slider
                label="Volume"
                thumb-label="always"
                min="0"
                max="1"
                step="0.001"
                :value="sound.volume"
              />
              <v-slider
                label="Pitch"
                min="0"
                max="10"
                step="0.1"
                :value="sound.pitch"
                thumb-label="always"
              />
              <v-slider
                label="Weight"
                thumb-label="always"
                min="0"
                max="50"
                :value="sound.weight"
                step="1"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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

export default {
  data() {
    return {
      dialog: false,
      fullName:
        this.action.name === "default"
          ? this.type.name + "." + this.object.name
          : this.type.name + "." + this.object.name + "." + this.action.name,
      subtitle: "",
      replace: "",
      sounds: [],
    };
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
  mounted() {
    let soundObject = default_sounds[this.fullName];
    if (soundObject) {
      this.subtitle = soundObject.subtitle;
      this.replace = soundObject.replace;
      this.sounds = soundObject.sounds;
    }
  },
};
</script>

<style></style>
