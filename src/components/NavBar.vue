<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse">
      <NavBarLoggedIn v-if="usuarioEstaLogado" />
      <NavBarLoggedOut v-else />
    </div>
  </nav>
</template>

<script>
import NavBarLoggedIn from './NavBarLoggedIn'
import NavBarLoggedOut from './NavBarLoggedOut'

export default {
  components: {
    NavBarLoggedIn,
    NavBarLoggedOut
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
