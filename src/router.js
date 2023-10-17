import { createRouter, createWebHistory } from "vue-router";

//Importo i componenti
import HomePage from "./pages/Home.vue";
import IndexPage from "./pages/Index.vue";
import ProjectShowPage from "./pages/ProjectShow.vue";
//Devo ovviamente importare ciò che scriviamo sotto


//Definisco le rotte
const routes = [{
  //HOME
  path: "/",
  name: "home",
  component: HomePage,
},
//ABOUT ME
{
  path: "/index",
  name: "projects",
  component: IndexPage,
},
//PROJECT SHOW
{
  path: "/projects/:slug",
  name: "project.show",
  component: ProjectShowPage,
},
  //REDIRECT su pagina esterna NON SI PUO' FARE SENZA BEFORE ENTER
  // {
  //   path: "/login",
  //   name: "login",
  //   beforeEnter(to, from, next) {
  //     window.location.href = "http://127.0.0.1:8000/login"
  //   }
];

//Qui creiamo l'istanza di router
const router = createRouter({
  //createWebHistory ci serve a gestire l'url quando cambiamo pagina
  history: createWebHistory(),
  routes
});

export { router };
