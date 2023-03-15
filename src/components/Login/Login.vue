<template>
     <div class="d-flex align-center justify-center" style="height: 60vh">
            <v-sheet width="400" class="mx-auto">
                <v-img class="pb-8" :src="imageSrc" alt="Image" />

                <v-form fast-fail @submit.prevent="getFormValues">
                    <v-text-field type="email" variant="underlined" v-model="username" label="Email"></v-text-field>
                    <v-text-field type="password" variant="underlined" v-model="password" label="Mot de passe"></v-text-field>
                    <a href="#" class="text-body-2 font-weight-regular">Mot de passe oubliée?</a>
                    <v-btn type="submit" variant="outlined" color="#CD3C6F" block class="mt-2">Se connecter</v-btn>
                </v-form>
                <div class="mt-2">
                    <p class="text-body-2">Vous n'avez pas de compte ?  <a href="/register">Inscrivez-vous</a></p>
                </div>
            </v-sheet>
        </div >
        <v-alert v-if="error === true"
                 style="max-height: 10vh"
                 type="error"
                 title="Mauvaise adresse email ou mot de passe"
        ></v-alert>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            username: '',
            password: '',
            imageSrc: 'src/assets/logo.png',
            error: false,
        };
    },
    methods: {
      async getFormValues() {
        await axios.post(
            'http://localhost:8080/auth/authenticate',
            {
              email: this.username,
              password: this.password,
            },
            {
              withCredentials: false,
              headers: {
                'Content-Type': 'application/json',
              }
            }
        ) .then( response => {
          if(response.status === 200) {
            this.$store.commit('setToken', response.data.token)
            this.$store.commit('setUser', response.data.idUser)
            this.$router.push({
              path: '/articles',
              query: this.$route.query,
              hash: this.$route.hash,
            })
          }
        })
        .catch(() => {
          this.error = true;
        })
      }
    },
}
</script>
<style>

</style>
