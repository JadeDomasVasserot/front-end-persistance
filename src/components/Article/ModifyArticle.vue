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
          <v-text-field v-model="article.nom" label="Nom"></v-text-field>
        </th>
        <th class="text-left">
          <br>
          <v-text-field v-model="article.description" label="Description"></v-text-field>
        </th>
        <th class="text-left">
          <br>
          <v-text-field v-model="article.prix" label="Prix"></v-text-field>
        </th>
        <th>
          <v-btn color="grey" @click="modify">Modifier</v-btn>
        </th>
      </tr>
    </thead>
  </v-table>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    this.id = this.$route.params.idArticle;
    this.getArticle(this.id);
  },
  data() {
    return {
      article: {
        id: "",
        nom: "",
        description: "",
        prix: "",
      },
    };
  },

  methods: {
    getArticle(){
      axios.get("http://localhost:8080/article/id/"+ this.id,
          {
            withCredentials: false,
            // headers: {
            //   'Authorization': 'Bearer ' +this.$store.state.token,
            //   'Content-Type': 'application/json',
            // }
          })
          .then(rep => {
            if (rep.data) {
              this.article.id = rep.data.id,
              this.article.nom = rep.data.nom,
              this.article.description = rep.data.description,
              this.article.prix = rep.data.prix
            }
          }).catch(() => {
      })
    },
    modify() {
      // Envoi de la requête API pour ajouter le nouvel article
      axios.put("http://localhost:8080/article/update", this.article).then((response) => {
        this.$router.push({
          path: '/articles',
          query: this.$route.query,
          hash: this.$route.hash,
        })
      });
    },
  },
};
</script>