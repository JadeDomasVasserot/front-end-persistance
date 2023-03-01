<template>
     <div class="d-flex align-center justify-center" style="height: 100vh">
            <v-sheet width="400" class="mx-auto">
                <v-img class="pb-8" :src="imageSrc" alt="Image" />

                <v-form fast-fail @submit.prevent="login">
                    <v-text-field variant="underlined" v-model="username" label="Email"></v-text-field>
                    <v-text-field variant="underlined" v-model="password" label="Mot de passe"></v-text-field>
                    <a href="#" class="text-body-2 font-weight-regular">Mot de passe oubliée?</a>
                    <v-btn type="submit" variant="outlined" color="#CD3C6F" block class="mt-2">Se connecter</v-btn>
                </v-form>
                <div class="mt-2">
                    <p class="text-body-2">Vous n'avez pas de compte ?  <a href="#">Inscrivez-vous</a></p>
                </div>
            </v-sheet>
        </div >
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            imageSrc: 'src/assets/logo.png',
        };
    },
    methods: {
        login() {
            // Your login logic here
            this.$router.push('/ListArticle')
        },
    },
}
</script>
<style>

</style>
