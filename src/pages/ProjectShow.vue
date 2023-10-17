<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
data(){
  return {
    project: {},
  };
},
methods: {
  fetchData(){                                       
    axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.slug)
    .then((response)=> {this.project = response.data});
  },
  getImageUrl(project) {
      return `http://127.0.0.1:8000/storage/${project.image}`;
    },
    formatDate(date){
      return dayjs(date).format('DD/MM/YYYY');
    },
},
mounted(){
  this.fetchData();
},
}
</script>

<template>
  <div class="container">
    <h1 class="text-center secondaryc-text pb-2">Dettagli del progetto</h1>

    <div class="card mb-3 card-index transp-bg">
          <div class="row g-0 transp-bg rounded">
            <div class="col-md-4">
              <img :src="getImageUrl(project)" class="img-fluid rounded-start repo-img" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ project.name }}</h5>
                <p class="card-text">{{project.description}}</p>
                <span class="fw-bold primaryc-text">Type:</span>
                  
                <p><a class="card-text">{{project.url}}</a></p>
                <p class="card-text"><small class="text-body-secondary">{{formatDate(project.publication_time)}}</small></p>
                <div class="d-flex align-items-center">
                  <!--vfor-->
                  <span class="badge primaryc-text" v-for="techs in project.technologies">{{techs.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<style lang="scss" scoped>

.repo-img {
    aspect-ratio: 4/3;
    object-fit: cover;
    width: 100%;
}

a {
    color:#132e4e;
  }

.card {
  border : 1px solid #ff9143;
}
</style>