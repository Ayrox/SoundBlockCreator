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
      class="ma-6 mr-12 ml-12"
    />
    <ContentCreator :search="searchType" />
  </div>
</template>

<script>
//import default_sounds from "../utils/DefaultSounds.json";

import ContentCreator from "../components/ContentCreator.vue";
import { getInfo } from "../utils/functions";

export default {
  data: () => ({
    search: "",
    isloaded: false,
    types: getInfo(),
  }),

  components: {
    ContentCreator,
  },
  computed: {
    searchType() {
      let se;
      if (this.search !== "" && !this.search.startsWith(" ")) {
        se = getInfo();

        se.map((type) => {
          type.children = type.children.filter((object) =>
            object.name.toLowerCase().includes(this.search.toLowerCase())
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
            type.children.length > 0
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
        se = getInfo();
      }
      return se;
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list-group {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
