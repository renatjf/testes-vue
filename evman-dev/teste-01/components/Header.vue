<template>
  <header class="header">
    <h1>Header</h1>
    <ul class="nav-item">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/usuarios">Usuarios</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
h1 {
  flex-wrap: wrap;
}
.header {
  widows: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
}
.nav-item {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}
</style>
