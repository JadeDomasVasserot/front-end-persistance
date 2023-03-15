<template>
    <nav-bar-component/>
    <create-article/>
</template>

<script>
import CreateArticle from "../components/Article/CreateArticle.vue";
import NavBarComponent from "../components/NavBar/NavBarComponent.vue"

export default {
  name: "CreateView",
  components: {NavBarComponent, CreateArticle}
}
</script>

<style scoped>

</style>