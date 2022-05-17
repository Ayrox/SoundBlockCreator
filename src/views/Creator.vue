/* eslint-disable no-unused-vars */ /* eslint-disable prettier/prettier */
<!-- https://minecraft.fandom.com/wiki/Sounds.json -->
<template>
  <div>
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
      <v-list rounded>
        <v-list-group
          value="true"
          eager
          v-for="(type, t) in searchType"
          :key="t"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ type.name.toUpperCase().replaceAll("_", " ") }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-item-group>
            <v-container fluid grid-list-xl>
              <v-layout justify-space-around wrap>
                <v-flex
                  xs12
                  sm7
                  md4
                  lg3
                  xl2
                  v-for="(object, o) in type.children"
                  :key="o"
                >
                  <Card :type="type" :object="object" />
                </v-flex>
              </v-layout>
            </v-container>
          </v-item-group>
        </v-list-group>
      </v-list>
    </v-lazy>
  </div>
</template>

<script>
//import default_sounds from "../utils/DefaultSounds.json";
import Card from "../components/Card.vue";
import { getInfo } from "../utils/functions";

export default {
  data: () => ({
    search: "",
    isloaded: false,
    types: getInfo(),
  }),

  components: {
    Card,
  },
  computed: {
    searchType() {
      let se;
      if (this.search !== "" && !this.search.startsWith(" ")) {
        se = getInfo();

        se.map((type) => {
          type.children.map((object) => {
            object.actions = object.actions.filter((action) =>
              action.name.toLowerCase().includes(this.search.toLowerCase())
            );
          });
          type.children = type.children.filter(
            (object) =>
              object.name.toLowerCase().includes(this.search.toLowerCase()) ||
              object.actions.length > 0
          );
          if (
            type.children.filter(
              (object) =>
                object.name.toLowerCase() === this.search.toLowerCase()
            ).length > 0
          ) {
            type.children =
              getInfo().map((type) => {
                return type.children.filter(
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

  beforeMount() {
    console.log(this.isloaded);
  },
  mounted() {
    this.isloaded = true;
    console.log(this.isloaded);
  },
  updated() {
    console.log(this.isloaded);
  },
};
</script>

<style lang="scss" scoped>
.v-list-group__header {
  background-color: #1e1e1e;
  font-size: 1.2rem;
  font-weight: bold;
}
.v-item-group {
  background-color: #1e1e1e;
}
.v-lazy {
  background-color: #1e1e1e;
}
</style>
