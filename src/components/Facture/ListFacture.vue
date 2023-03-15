<template>
  <v-table class="table">
    <thead>
      <tr>
        <th class="text-center">Crée par</th>
        <th class="text-center">Total</th>
        <th class="text-center">Date</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="facture in factures" :key="facture.id">
        <td class="text-center">{{ facture.user.nom }} {{ facture.user.prenom }}</td>
        <td class="text-center">{{ facture.total }}</td>
        <td class="text-center">{{ facture.date }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

  
  <script>
  
  import NavBarComponent from '../NavBar/NavBarComponent.vue'
  import axios from 'axios';

  export default {
    data() {
      return {
        factures: [],
      };
    },
    beforeMount() {
      this.fetchFactures();
    },
    methods: {
      fetchFactures() {
        axios.get('http://localhost:8080/facture/getall')
          .then(response => {
            this.factures = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
    }
  </script>
  
  <style>
  
  </style>
  