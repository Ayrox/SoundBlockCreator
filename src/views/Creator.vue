/* eslint-disable no-unused-vars */ /* eslint-disable prettier/prettier */
<!-- https://minecraft.fandom.com/wiki/Sounds.json -->
<template>
  <div>
    <PageLoader v-if="!isloaded" />
    <v-text-field
      v-model="search"
      clearable
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
    />
    <v-lazy>
      <div>
        <v-container v-for="(type, t) in searchType" :key="t" fluid>
          <v-subheader>{{
            type.name.toUpperCase().replace(["_"], " ")
          }}</v-subheader>
          <v-expansion-panels>
            <v-expansion-panel v-for="(object, o) in type.objects" :key="o">
              <v-expansion-panel-header>
                {{ object.name.toUpperCase().replace(["_"], " ") }}
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(action, a) in object.actions"
                :key="a"
              >
                <Card :action="action" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-container>
      </div>
    </v-lazy>
  </div>
</template>

<script>
import default_sounds from "../utils/DefaultSounds.json";
import PageLoader from "../components/PageLoader.vue";
import Card from "../components/Card.vue";

function getInfo() {
  var types = [];

  Object.keys(default_sounds).forEach((sound) => {
    let sound_splitted = sound.split(".");
    var i = 0;
    var action = sound_splitted[2] || "default";

    for (let snd of sound_splitted) {
      if (i > 2) {
        action += "." + snd;
      }
      i++;
    }
    let name, object;

    name = types.filter((type) => type.name == sound_splitted[0])[0];
    if (!name) {
      types.push({
        name: sound_splitted[0],
        objects: [],
      });
      name = types.filter((type) => type.name == sound_splitted[0])[0];
    }

    object = name.objects.filter(
      (object) => object.name == sound_splitted[1]
    )[0];

    if (!object) {
      name.objects.push({
        name: sound_splitted[1],
        actions: [],
      });
      object = name.objects.filter(
        (object) => object.name == sound_splitted[1]
      )[0];
    }

    object.actions.push({
      name: action,
    });
  });
  return types;
}

export default {
  data: () => ({
    search: "",
    isloaded: false,
    types: getInfo(),
  }),

  components: {
    PageLoader,
    Card,
  },
  computed: {
    searchType() {
      let se;
      if (this.search !== "" && !this.search.startsWith(" ")) {
        se = getInfo();

        se.map((type) => {
          type.objects = type.objects.filter((object) =>
            object.name.toLowerCase().includes(this.search.toLowerCase())
          );
        });

        se = se.filter(
          (type) =>
            type.name.toLowerCase().includes(this.search.toLowerCase()) ||
            type.objects.length > 0
        );
        if (
          se.filter(
            (type) => type.name.toLowerCase() === this.search.toLowerCase()
          ).length > 0
        ) {
          se = getInfo().filter(
            (type) => type.name.toLowerCase() === this.search.toLowerCase()
          );
        }
      } else {
        se = this.types;
      }
      //console.log(se);
      return se;
    },
  },
};
</script>

<style></style>
