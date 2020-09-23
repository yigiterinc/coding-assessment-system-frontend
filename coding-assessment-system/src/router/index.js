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
    path: '/assessment',
    name: 'Assessment',
    component: AssessmentView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
