<template>
    <nav-bar-component/>
    <modify-facture />
</template>

<script>
import ModifyFacture from "../components/Facture/ModifyFacture.vue";
import NavBarComponent from "../components/NavBar/NavBarComponent.vue"

export default {
  name: "ModifyFactureView",
  components: {ModifyFacture, NavBarComponent}
}
</script>

<style scoped>

</style>