<template>
    <nav-bar-component/>
    <create-facture/>
</template>

<script>
import CreateFacture from "../components/Facture/AddFacture.vue";
import NavBarComponent from "../components/NavBar/NavBarComponent.vue"

export default {
  name: "CreateView",
  components: {NavBarComponent,CreateFacture}
}
</script>

<style scoped>

</style>