<template>
  <v-toolbar app>
    <v-img src="src/assets/image.png"></v-img>
<v-app-bar-title>FATATIUTION</v-app-bar-title>
      <router-link to="/articles" class="text-decoration-none text-black">
      <v-tab>Accueil</v-tab>
      </router-link>
      <router-link to="/factures" class="text-decoration-none text-black">
      <v-tab>Facturation</v-tab>
      </router-link>
      <router-link to="/articles" class="text-decoration-none text-black">
      <v-tab>Article</v-tab>
      </router-link>
  </v-toolbar>
</template>
<script>
export default {
  name: "NavBarComponent.vue"
}
</script>

<style scoped>

</style>