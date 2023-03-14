<template>
    
  <v-table class="table">
    <thead>
    <tr>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Calories
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Pomme</td>
      <td>420k</td>
    </tr>
    </tbody>
  </v-table>
  <v-container fluid>
    <v-layout class="fixed-bottom">
        <v-flex>
          <v-btn color="grey" class="mr-4">Créer article</v-btn>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import NavBarComponent from '../NavBar/NavBarComponent.vue'
export default {
  components: {NavBarComponent},

  data() {
    return {}
  },
  methods: {},
}
</script>

<style>

</style>
