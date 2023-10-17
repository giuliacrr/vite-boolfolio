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
          <li><router-link :to="{ name:'home' }" class="secondaryc-text">Home</router-link></li>
          <li><router-link :to="{ name:'projects' }" class="secondaryc-text">Projects</router-link></li>
          <!--Questo accedi ci porterà al server Laravel-->
          <li><a href="http://127.0.0.1:8000/login">Accedi</a></li>
        </ul>
      </div>
    </nav>
  </header>
  

    <main>
      <!--Qui dovrebbe apparire il contenuto che noi scriviamo nelle singole pagine!-->
      <router-view>

      </router-view>
    </main>

  <footer class="secondaryc-btn py-5">

  </footer>
</template>

<style lang="scss"></style>
