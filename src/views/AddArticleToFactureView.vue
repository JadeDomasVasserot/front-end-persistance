<template>
  <div>
    <nav-bar-component/>
    <add-article-to-facture/>
  </div>
</template>

<script>
import AddArticleToFacture from "../components/Facture/AddArticleToFacture.vue";
import NavBarComponent from "../components/NavBar/NavBarComponent.vue"

export default {
  name: "AddArticleToFactureView",
  components: {NavBarComponent,AddArticleToFacture}
}
</script>

<style scoped>
</style>
