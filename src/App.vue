<script>
import axios from "axios";

//ricordiamoci di importare axios dopo averlo installato, per poterlo usare

export default {
  data() {
    return {
      projects: [],
      pagination: {},
    };
  },
  methods: {
    fetchData(url) {
      axios.get(url ?? "http://127.0.0.1:8000/api/projects")
      .then((response) => {
        const results = response.data;

        //Salviamo i progetti in projects
        this.projects = results.data;

        //Cancelliamo la chiave data dall'oggetto siccome non ci serve per la parte della pagination
        
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="text-center">
      <h1>I miei progetti</h1>
      <p>Ecco la lista dei miei progetti</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
