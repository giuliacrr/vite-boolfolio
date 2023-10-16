<script>
import axios from "axios";
import { ref } from 'vue';

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
        delete results.data;

        //Salviamo invece i dati per la paginazione in pagination
        this.pagination = results;
      });
    },
    getImageUrl(project) {
      return `http://127.0.0.1:8000/storage/${project.image}`;
    },
    //Chiedi florian
    
    // getDate(project){
    //   const time = project.publication_time;
    //   const formatDate = (time) => {
    //   const date = new Date(time);
    //   const year = date.getFullYear();
    //   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Aggiungi 1 al mese perché i mesi sono zero-based
    //   const day = date.getDate().toString().padStart(2, '0');
    //   return `${year}/${month}/${day}`;
    //   };

    //   const formattedDate = ref(formatDate(time));

    //   return {
    //   formattedDate,
    //   };
    // }
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<template>
  <header>
    <nav class="container">
      <div class="py-3 d-flex">
        LOGO

        <ul class="ms-auto d-flex list-unstyled">
          <li><a href="http://127.0.0.1:8000/login">Accedi</a></li>
        </ul>
      </div>
    </nav>
  </header>

  <main>
    <div class="container">

    <div class="text-center mb-5">
      <h1>I miei progetti</h1>
      <p>Ecco la lista dei miei progetti</p>
    </div>

    <hr>

    <div class="mt-5">
      <div class="card mb-3 card-index transp-bg" v-for="project in projects" style="width:100%;">
          <div class="row g-0 transp-bg rounded">
            <div class="col-md-4">
              <img :src="getImageUrl(project)" class="img-fluid rounded-start repo-img" alt="repo">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title primaryc-text fw-bold">{{project.name}}</h4>
                <p><span class="fw-bold primaryc-text">Type:</span > {{ project?.type.name ?? "No types" }}</p>
                <p class="card-text mt-5"><small class="text-body-secondary">{{getDate(project.publication_time)}}</small></p>
                <div class="d-flex align-items-center">
                  <span class="badge" v-for="techs in project.technologies">{{techs.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  </main>
</template>

<style lang="scss"></style>
