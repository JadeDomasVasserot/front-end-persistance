<template>
  <v-table class="table">
    <thead>
      <tr>
        <th class="text-left">Nom</th>
        <th class="text-left">Description</th>
        <th class="text-left">Prix</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles" :key="article.id">
        <td>{{ article.nom }}</td>
        <td>{{ article.description }}</td>
        <td>{{ article.prix }}</td>
        <td></td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: [],
    };
  },
  beforeMount() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles() {
      axios.get('http://localhost:8080/article/all')
        .then(response => {
          this.articles = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
