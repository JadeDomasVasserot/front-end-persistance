<template>
    <nav-bar-component/>
    <list-facture/>
</template>

<script>
import ListFacture from "../components/Facture/ListFacture.vue";
import NavBarComponent from "../components/NavBar/NavBarComponent.vue"

export default {
  name: "ListFactureView",
  components: {NavBarComponent, ListFacture}
}
</script>

<style scoped>

</style>