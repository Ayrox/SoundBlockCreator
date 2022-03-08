/* eslint-disable no-unused-vars */ /* eslint-disable prettier/prettier */
<!-- https://minecraft.fandom.com/wiki/Sounds.json -->
<template>
  <div class="page">
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
          <v-subheader>
            {{ type.name.toUpperCase().replaceAll("_", " ") }}
          </v-subheader>
          <v-expansion-panels>
            <v-expansion-panel v-for="(object, o) in type.objects" :key="o">
              <v-expansion-panel-header class="text-h5 font-weight-bold">
                <v-avatar
                  class="mr-6"
                  rounded="100%"
                  max-width="50"
                  max-height="100%"
                >
                  <v-img :src="getImg(type, object)" v-bind="object" />
                </v-avatar>
                {{ object.name.toUpperCase().replaceAll("_", " ") }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-container fluid grid-list-xl>
                  <v-layout justify-space-around wrap>
                    <v-flex
                      xs12
                      sm7
                      md4
                      lg3
                      xl2
                      v-for="(action, a) in object.actions"
                      :key="a"
                    >
                      <Card :type="type" :object="object" :action="action" />
                    </v-flex>
                  </v-layout>
                </v-container>
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
  methods: {
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
  computed: {
    searchType() {
      let se;
      if (this.search !== "" && !this.search.startsWith(" ")) {
        se = getInfo();

        se.map((type) => {
          type.objects.map((object) => {
            object.actions = object.actions.filter((action) =>
              action.name.toLowerCase().includes(this.search.toLowerCase())
            );
          });
          type.objects = type.objects.filter(
            (object) =>
              object.name.toLowerCase().includes(this.search.toLowerCase()) ||
              object.actions.length > 0
          );
          if (
            type.objects.filter(
              (object) =>
                object.name.toLowerCase() === this.search.toLowerCase()
            ).length > 0
          ) {
            type.objects =
              getInfo().map((type) => {
                return type.objects.filter(
                  (object) =>
                    object.name.toLowerCase() === this.search.toLowerCase()
                );
              }) > 0;
          }
        });

        se = se.filter(
          (type) =>
            type.name.toLowerCase().includes(this.search.toLowerCase()) ||
            type.objects.length > 0
        );

        //! Display the type with his objects if writed completely
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
  String.prototype.repl;
  return types;
}
</script>

<style lang="scss" scoped>
v-expanison-panel-header {
  font-size: 1.5rem;
}
</style>
