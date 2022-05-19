<template>
  <v-responsive>
    <v-list rounded>
      <v-list-group eager v-for="(type, t) in search" :key="t">
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
                <v-lazy>
                  <Card :type="type" :object="object" />
                </v-lazy>
              </v-flex>
            </v-layout>
          </v-container>
        </v-item-group>
      </v-list-group>
    </v-list>
  </v-responsive>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  props: {
    search: {
      type: Array,
    },
  },
};
</script>

<style></style>
