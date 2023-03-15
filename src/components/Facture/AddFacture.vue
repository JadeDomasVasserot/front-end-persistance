<template>
    <div>
      <v-form>
        <v-text-field v-model="nouvelleFacture.name" label="Nom"></v-text-field>
        <v-text-field v-model="nouvelleFacture.total" label="Total"></v-text-field>
        <v-btn color="grey" @click="ajouterFacture">Ajouter</v-btn>
      </v-form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        nouvelleFacture: {
          user: this.$store.state.user,
          name: "",
          total: 0,
          date: new Date(),
        },
      };
    },
    methods: {
      ajouterFacture() {
        axios.post("http://localhost:8080/facture/add", this.nouvelleFacture)
          .then((response) => {
            // Réinitialisation de l'objet nouvelleFacture
            this.nouvelleFacture = {
              user: null,
              name: "",
              total: 0,
              date: null,
            };
            // Redirection vers la page d'ajout d'article à la facture
            this.$router.push({           
                path: '/addArticleToFacture',           
                query: this.$route.query,           
                hash: this.$route.hash,         
            })          
        });
      },
    },
  };
  </script>
  