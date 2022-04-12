<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button type="submit" class="btn btn-primary brn-block">Logar</button>
      <router-link :to="{ name: 'novo.usuario' }">
        Não possui um cadastro? Cadastre-se aqui
      </router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      usuario: {
        email: '',
        senha: ''
      }
    }
  },

  methods: {
    efetuarLogin() {
      axios
        .post('http://localhost:8000/auth/login', this.usuario)
        .then(resposta => console.log(resposta))
        .catch(erro => console.log(erro))
    }
  }
}
</script>
