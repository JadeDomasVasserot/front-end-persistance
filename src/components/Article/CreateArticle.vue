<template>
    <v-table class="table">
    <thead>
    <tr>
      <td>Nom</td>
      <td>Description</td>
      <td>Prix</td>  
    </tr>
    <tr>
      <th class="text-left">
        <br>
        <v-text-field label="Nom"></v-text-field>
      </th>
      <th class="text-left">
        <br>
        <v-text-field label="Description"></v-text-field>
      </th>
      <th class="text-left">
        <br>
        <v-text-field label="Prix"></v-text-field>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Pomme</td>
      <td>Fruit de type pomme</td>
      <td>2€/k</td>
    </tr>
    </tbody>
  </v-table>
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