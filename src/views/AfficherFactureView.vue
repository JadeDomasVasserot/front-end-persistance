<template>
    <div>
      <nav-bar-component />
      <afficher-facture />
    </div>
  </template>
  
  <script>
  import afficherFacture from "../components/Facture/AfficherFacture.vue";
  import NavBarComponent from "../components/NavBar/NavBarComponent.vue"
  
  export default {
    name: "FacturePage",
    components: { NavBarComponent, afficherFacture }
  }
  </script>
  
  <style scoped>
  
  </style>
  