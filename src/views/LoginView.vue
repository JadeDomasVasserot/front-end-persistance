<template>
    <div class="login-container">
      <h1>Connectez-vous</h1>
      <form>
        <div class="form-group">
          <label for="username">Nom d'utilisateur</label>
          <input type="text" class="form-control" id="username" v-model="username" placeholder="Entrez votre nom d'utilisateur">
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Entrez votre mot de passe">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // logique de connexion ici
      }
    }
  }
  </script>
  
  <style>
  .login-container {
    margin: 50px auto;
    max-width: 500px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  label {
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 1.1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .btn-primary {
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
  }
  
  .btn-primary:hover {
    background-color: #0069d9;
    cursor: pointer;
  }
  </style>
  