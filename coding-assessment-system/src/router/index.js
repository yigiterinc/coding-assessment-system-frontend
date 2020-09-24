import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AssessmentView from "../views/AssessmentView";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assessment/:sessionId',
    name: 'Assessment',
    component: AssessmentView,
  },
  {
    path: '*',
    component: Home // TODO, replace this with a not found component
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
