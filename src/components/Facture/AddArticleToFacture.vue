<template>
    <div>
      <label>Article:</label>
      <select v-model="selectedArticle">
        <option v-for="article in articles" :value="article.id">{{ article.nom }}</option>
      </select>
      <button @click="ajouterArticle">Ajouter à la facture</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        selectedArticle: null,
        articles: [],
        nouvelleFacture: {
          idFacture: null,
          idArticle: null,
          quantite: 1
        }
      };
    },
    mounted() {
      // Chargement de la liste des articles depuis l'API
      axios.get("http://localhost:8080/article/all")
        .then(response => {
          this.articles = response.data;
        });
    },
    methods: {
      ajouterArticle() {
        // Envoi de la requête API pour ajouter l'article à la facture
        this.nouvelleFacture.idArticle = this.selectedArticle;
        axios.post("http://localhost:8080/facture/addArticle", this.nouvelleFacture)
          .then(response => {
            // Réinitialisation de l'objet nouvelleFacture
            this.nouvelleFacture = {
              idFacture: null,
              idArticle: null,
              quantite: 1
            };
            // Réinitialisation de la sélection de l'article
            this.selectedArticle = null;
          });
      }
    }
  };
  </script>
  