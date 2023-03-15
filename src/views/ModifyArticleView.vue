<template>
    <nav-bar-component/>
    <modify-article/>
</template>

<script>
import CreateArticle from "../components/Article/CreateArticle.vue";
import NavBarComponent from "../components/NavBar/NavBarComponent.vue"
import ModifyArticle from "@/components/Article/ModifyArticle.vue";

export default {
  name: "ModifyArticleView",
  components: {ModifyArticle, NavBarComponent}
}
</script>

<style scoped>

</style>