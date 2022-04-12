<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" v-if="usuarioEstaLogado">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/gerentes" class="nav-link">
            Gerentes
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="efetuarLogout">
            Logout
          </a>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto" v-else>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cadastre-se" class="nav-link">
            Cadastre-se
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    efetuarLogout() {
      localStorage.removeItem('token')
      this.$router.push({ name: 'login' })
    }
  },

  computed: {
    usuarioEstaLogado() {
      return Boolean(localStorage.getItem('token'))
    }
  }
}
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
