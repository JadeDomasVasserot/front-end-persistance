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
        <td class="text-center">{{
            getDate(facture.date)
          }}</td>
        <td class="text-center">
          <router-link :to="{ name: 'One Facture', params: { id: facture.id }}" class="text-decoration-none text-black">
          <v-btn class="mr-5">Afficher</v-btn>
          </router-link>
          <v-btn class="ma-5">Modifier</v-btn>
          <v-btn class="ma-5">Supprimer</v-btn>
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
  import moment from 'moment'
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
      },
      getDate : function (date) {
        return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
      }
    },

    }
  </script>
  
  <style>
  
  </style>
  