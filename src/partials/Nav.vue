<template>
  <nav class="navbar is-dark" role="navigation">
    <div class="navbar-brand">
        <router-link class="navbar-item is-danger" to="/"><strong>Movie-Shop</strong></router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-danger" to="/signup"><strong>Sign up</strong></router-link>
            <router-link class="button is-light" to="/signin"><strong>Sign in</strong></router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: "navi"
};
</script>

<style lang="scss" scoped>
</style>
