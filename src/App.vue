

<template>
  <div class="main-wrapper">
    <div class="menu">
      <router-link to="/">Home1</router-link>

    </div>
    <div class="map-wrapper">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  components: {},
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
}
.menu {
  display: flex;
  flex-direction: column;
}
.menu a {
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
}
.menu .router-link-exact-active {
  background-color: lightgray;
}
.map-wrapper {
  height: 75vh;
  width: 100%;
}
</style>
