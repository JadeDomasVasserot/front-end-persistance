<template>
    <nav-bar-component/>
    <list-article/>
</template>

<script>
import ListArticle from "../components/Article/ListArticle.vue";
import NavBarComponent from "../components/NavBar/NavBarComponent.vue"

export default {
  name: "ListArticleView",
  components: {NavBarComponent, ListArticle}
}
</script>

<style scoped>

</style>