<script>
import axios from "axios";
import dayjs from "dayjs";
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
    //L'immagina si trova sul server backend e quindi ci serve accesso all'immagine
    //con un percorso assoluto attraverso la funzione getImageUrl che richiameremo nell'html.
    getImageUrl(project) {
      return `http://127.0.0.1:8000/storage/${project.image}`;
    },
    formatDate(date){
      return dayjs(date).format('DD/MM/YYYY');
    }
  },
  mounted() {
    this.fetchData();
  },
}
</script>

<template>
  <div class="container text-center mb-5 secondaryc-text">
    <h1>Benvenuti in: Projects!</h1>
    <p>Quale progetto vuoi vedere?</p>
  </div>

<hr>

  <div class="container">
    <div class="mt-5">
      <div class="card mb-3 card-index transp-bg" v-for="project in projects">
        <div class="row g-0 transp-bg rounded">
          <div class="col-md-4">
            <img :src="getImageUrl(project)" class="img-fluid rounded-start repo-img" alt="repo">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title primaryc-text fw-bold">{{project.name}}</h4>
              <p>
                <span class="fw-bold primaryc-text">Type:</span >
                  {{ project?.type.name ?? "No types" }}
              </p>
              <p class="card-text mt-5">
                <small class="text-body-secondary">
                  {{formatDate(project.publication_time)}}
                </small>
              </p>
              <div class="d-flex align-items-center">
                <span class="badge primaryc-text" v-for="techs in project.technologies">{{techs.name}}</span>
              </div>
              <div class="mt-5">
                <router-link :to="{name: 'project.show', params: {slug:project.slug}}"><button class="btn primaryc-btn text-white me-2">Show more</button></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Per visualizzare gli altri progetti-->
    <div class="m-auto mb-5 next-prev-page text-center">
      <a v-for="linkPage in pagination.links"
        class="btn btn-link"
        :class="{'active':linkPage.label == pagination.current_page}"
        @click="fetchData(linkPage.url)"
        v-html="linkPage.label">
      </a>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.repo-img {
    aspect-ratio: 4/3;
    object-fit: cover;
    width: 100%;
}

.next-prev-page {
  a {
    color:orange;
  }
  .active {
    background-color: #132e4e;
  }
}

.card {
  border : 1px solid #ff9143;
}
</style>