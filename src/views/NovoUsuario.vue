<template>
  <div class="container">
    <h1>Novo Usuário</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form-group">
        <label for="">Nome</label>
        <input type="text" class="form-control" v-model="usuario.nome" />
      </div>
      <div class="form-group">
        <label for="">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nome: '',
        email: '',
        senha: ''
      }
    }
  },

  methods: {
    enviarFormulario() {
      console.log(this.usuario)
    }
  }
}
</script>
