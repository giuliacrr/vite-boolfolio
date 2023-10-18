<script>
export default {
}
</script>

<template>
  <div class="container">
    <h1 class="text-center secondaryc-text">404</h1>
    <h1 class="secondaryc-text text-center">Woops! Mi sa che ti sei perso!</h1>
    <p class="text-white text-center">Ritorna alla <router-link class="secondaryc-text" :to="{ name:'home' }">Home Page</router-link></p>
  </div>
</template>

<style lang="scss" scoped></style>