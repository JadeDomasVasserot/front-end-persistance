<template>
  <v-table class="table">
    <thead>
      <tr>
        <th class="text-center">Crée par</th>
        <th class="text-center">Total</th>
        <th class="text-center">Date</th>
        <th class="text-center">Actions</th>
      </tr>
    </thead>
    <tbody>

      <tr v-for="facture in factures" :key="facture.id">

        <td class="text-center">{{ facture.user.nom }} {{ facture.user.prenom }}</td>
        <td class="text-center">{{ facture.total }}</td>
        <td class="text-center">{{ facture.date}}</td>
        <td>
          <v-btn>Afficher</v-btn>
          <v-btn>Modifier</v-btn>
          <v-btn>Supprimer</v-btn>
        </td>
      </tr>
      <router-link to="/AddFacture">
        <v-btn color="grey">Ajouter Facture</v-btn>
      </router-link>
      
    </tbody>
  </v-table>
</template>

  
  <script>

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
        axios.get('http://localhost:8080/facture/getall/'+this.$store.state.user.id)
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
  