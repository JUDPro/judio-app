import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import Messenger from '../views/Messenger.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/Messenger",
    name: "Messenger",
    component: Messenger
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
