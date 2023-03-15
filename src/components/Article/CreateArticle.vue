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
          <v-text-field v-model="nouvelArticle.nom" label="Nom"></v-text-field>
        </th>
        <th class="text-left">
          <br>
          <v-text-field v-model="nouvelArticle.description" label="Description"></v-text-field>
        </th>
        <th class="text-left">
          <br>
          <v-text-field v-model="nouvelArticle.prix" label="Prix"></v-text-field>
        </th>
        <th>
          <v-btn color="grey" @click="ajouterArticle">Ajouter</v-btn>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles" :key="article.id">
        <td>{{ article.nom }}</td>
        <td>{{ article.description }}</td>
        <td>{{ article.prix }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      articles: [],
      nouvelArticle: {
        nom: "",
        description: "",
        prix: "",
      },
    };
  },

  methods: {
    ajouterArticle() {
      // Envoi de la requête API pour ajouter le nouvel article
      axios.post("http://localhost:8080/article/add", this.nouvelArticle).then((response) => {
        // Ajout de l'article à la liste locale
        this.articles.push(response.data);
        // Réinitialisation de l'objet nouvelArticle
        this.nouvelArticle = {
          nom: "",
          description: "",
          prix: "",
        };
      });
    },
  },
};
</script>