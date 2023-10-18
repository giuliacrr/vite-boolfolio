<script>



//ricordiamoci di importare axios dopo averlo installato, per poterlo usare

export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>

<template>
  <header>
    <nav class="container">
      <div class="py-3 d-flex">
        LLOGO
        <!--Aggiungo i link per navigare nelle altre pagine-->
        <ul class="ms-auto d-flex list-unstyled gap-5">
          <!--Router-link mi da la possibilità di inserire con :to i link per le rotte
          E' come se fosse route(rotta) di laravel-->
          <li><router-link :to="{ name:'home' }" class="secondaryc-text">Home</router-link></li>
          <li><router-link :to="{ name:'projects' }" class="secondaryc-text">Projects</router-link></li>
          <li><router-link :to="{ name:'contacts' }" class="secondaryc-text">Contact me</router-link></li>
          <!--Questo accedi ci porterà al server Laravel-->
          <li><a href="http://127.0.0.1:8000/login">Accedi</a></li>
        </ul>
      </div>
    </nav>
  </header>
  

    <main>
      <!--router-view è come @yield di laravel. Ci va dentro tutto quello che mettiamo nelle routes.-->
      <router-view>
      </router-view>
    </main>

</template>

<style lang="scss"></style>
