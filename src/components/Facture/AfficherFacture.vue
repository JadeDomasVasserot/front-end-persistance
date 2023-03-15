<template>
    <div>
      <v-table class="table">
        <thead>
          <tr>
            <th class="text-center">Nom de l'article</th>
            <th class="text-center">Prix</th>
            <th class="text-center">Quantité</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contient, index) in facture" :key="index">
            <td class="text-center">{{ contient.idArticle.nom }}</td>
            <td class="text-center">{{ contient.idArticle.prix + ' €'}}</td>
            <td class="text-center">{{ contient.quantite }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"></td>
            <td class="text-right total-price">Total : {{ getTotalPrice() }}</td>
          </tr>
        </tfoot>
      </v-table>
    </div>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        id: null,
        facture: [],
      };
    },
    mounted() {
      this.id = this.$route.params.id;
      this.fetchFacture(this.id);
    },
    methods: {
      fetchFacture(id) {
        axios
          .get(`http://localhost:8080/contient/allFromFacture/${id}`)
          .then((response) => {
            this.facture = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.facture.length; i++) {
          totalPrice += this.facture[i].idArticle.prix * this.facture[i].quantite;
        }
        return totalPrice + ' €';
      },
    },
  };
  </script>
  <style>
  .total-price {
    font-size: 1.2rem; /* ajuster la taille de la police selon vos besoins */
  }
  </style> 