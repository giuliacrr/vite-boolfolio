import { createRouter, createWebHistory } from "vue-router";

//Importo i componenti
import HomePage from "./pages/Home.vue";
import ProjectsPage from "./pages/Index.vue";
import ProjectShowPage from "./pages/ProjectShow.vue";
import NotFoundPage from "./pages/NotFound.vue";
import ContactsPage from "./pages/Contacts.vue";
//Devo ovviamente importare ciò che scriviamo sotto


//Definisco le rotte
const routes = [{
  //HOME
  path: "/", //URI
  name: "home",//NOME DA ASSEGNARE
  component: HomePage,//
},
//ABOUT ME
{
  path: "/index",
  name: "projects",
  component: ProjectsPage,
},
//PROJECT SHOW
{
  path: "/projects/:slug",
  name: "project.show",
  component: ProjectShowPage,
},
  ,
//PROJECT SHOW
{
  path: "/contacts",
  name: "contacts",
  component: ContactsPage,
},
//REDIRECT su pagina esterna NON SI PUO' FARE SENZA BEFORE ENTER
{
  path: "/login",
  name: "login",
  beforeEnter(to, from, next) {
    window.location.href = "http://127.0.0.1:8000/login"
  }
},
//ROTTA 404 NOT FOUND
{ // QUESTA ROTTA VA SCRITTA SEMPRE ALLA FINE
  path: "/:pathMatch(.*)*",
  name: "not-found",
  component: NotFoundPage,
},
];

//Qui creiamo l'istanza di router
const router = createRouter({
  //createWebHistory ci serve a gestire l'url quando cambiamo pagina
  history: createWebHistory(),
  routes
});

export { router };
