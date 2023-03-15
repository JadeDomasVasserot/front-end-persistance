<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
           <v-sheet width="500" class="mx-auto">
               <v-img class="pb-8" :src="imageSrc" alt="Image" />
               <v-form fast-fail @submit.prevent="getFormValues">
                    <div class="d-flex justify-space-between">
                        <v-text-field variant="underlined" v-model="firstname" label="Prénom"></v-text-field>
                        <div style="width: 16px;"></div> <!-- Espace entre les champs Prénom et Nom -->
                        <v-text-field variant="underlined" v-model="lastname" label="Nom"></v-text-field>
                    </div>
                    <v-text-field type="email" variant="underlined" v-model="email" label="Email"></v-text-field>
                    <v-text-field type="password" variant="underlined" v-model="password" label="Mot de passe"></v-text-field>
                    <a href="#" class="text-body-2 font-weight-regular">Mot de passe oubliée?</a>
                    <v-btn type="submit" variant="outlined" color="#CD3C6F" block class="mt-2">S'inscrire</v-btn>
                </v-form>
                <div class="mt-2">
                   <p class="text-body-2">Vous avez un compte ?<a href="/">Connectez-vous</a></p>
                </div>
           </v-sheet>
       </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            lastname: '',
            firstname: '',
            email: '',
            password: '',
            imageSrc: 'src/assets/logo.png',
        };
    },
    methods: {
      async getFormValues() {
        await axios.post(
            'http://localhost:8080/auth/register',
            {
              lastname: this.lastname,
              firstname: this.firstname,
              email: this.email,
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