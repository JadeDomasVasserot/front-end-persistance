<template>
    
  <v-table class="table">
    <thead>
    <tr>
      <th class="text-center">
        Id
      </th>
      <th class="text-center">
        Nom
      </th>
      <th class="text-center">
        Description
      </th>
      <th class="text-center">
        Prix
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="art in articles"
    :key="art.id">
    <td class="text-center">{{art.id}}</td>
      <td class="text-center">{{art.nom}}</td>
      <td class="text-center">{{art.description}}</td>
      <td class="text-center">{{art.prix}} €</td>
    </tr>
    </tbody>
  </v-table>
  <v-container fluid>
    <v-layout class="fixed-bottom">
        <v-flex>
        
          <v-btn color="grey" class="mr-4">Créer article</v-btn>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  beforeMount () {
    this.getAllArticle();
  },
  data() {
    return {
      articles: []
    }
  },
  methods: {
    getAllArticle(){
      axios.get("http://localhost:8080/article/all",
          {
            withCredentials: false,
            // headers: {
            //   'Authorization': 'Bearer ' +this.$store.state.token,
            //   'Content-Type': 'application/json',
            // }
          })
          .then( rep => {
            if (rep.data) {
              this.articles = rep.data
            }
          }).catch(() => {
      })
    },
  },
}
</script>
