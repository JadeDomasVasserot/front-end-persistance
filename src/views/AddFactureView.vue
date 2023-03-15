<template>
    <nav-bar-component/>
    <create-facture/>
</template>

<script>
import CreateFacture from "../components/Facture/AddFacture.vue";
import NavBarComponent from "../components/NavBar/NavBarComponent.vue"

export default {
  name: "AddFacture",
  components: {NavBarComponent,CreateFacture}
}
</script>

<style scoped>

</style>