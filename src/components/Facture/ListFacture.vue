<template>
    <v-table class="table">
      <thead>
      <tr>
        <th class="text-left">
          Crée par
        </th>
        <th class="text-left">
            Date
        </th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Pomme</td>
        <td>420k</td>
        <td><v-btn>Afficher</v-btn><v-btn>Modifier</v-btn></td>
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
  
  <style>
  
  </style>
  