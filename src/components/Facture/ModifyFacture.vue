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
        <tr v-for="(contient, index) in articles" :key="index">
          <td class="text-center">{{ contient.idArticle.nom }}</td>
          <td class="text-center">{{ contient.idArticle.prix + ' €'}}</td>
          <td class="text-center">{{ contient.quantite }}</td>
        </tr>
        </tbody>
      </v-table>
      <v-form v-if="articles.length > 0">
        <v-text-field v-model="facture.name" label="Numéro"></v-text-field>
        <v-btn color="primary" @click="modifyFacture">Modifer</v-btn>
      </v-form>
    </div>
  </template>
  <script>
  import axios from "axios";
  
  export default {
    mounted() {
      this.id = this.$route.params.id;
      this.fetchFacture(this.id);
    },
    data() {
      return {
        articles: [],
        facture: {
          user: this.$store.state.user,
          name: "",
          total: 0,
          date: new Date(),
        },
      };
    },
    methods: {
      fetchFacture(id) {
        axios
            .get(`http://localhost:8080/contient/allFromFacture/${id}`)
            .then((response) => {
              this.articles = response.data;
              this.facture = {
                user: response.data[0].idFacture.user,
                name: response.data[0].idFacture.name,
                total: response.data[0].idFacture.total,
                date: new Date(),
              }
            })
            .catch((error) => {
              console.log(error);
            });
      },
      modifyFacture() {
        // Envoi de la requête API pour ajouter la nouvelle facture
        axios.put("http://localhost:8080/facture/update", this.facture)
          .then((response) => {
            this.$router.push({
              path: '/factures',
              query: this.$route.query,
              hash: this.$route.hash,
            })

          });
      },
    },
  };
  </script>