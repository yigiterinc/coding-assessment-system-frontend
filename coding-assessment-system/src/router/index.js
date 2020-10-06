import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AssessmentView from "../views/AssessmentView";
import SurveyView from "@/views/Test";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assessment/:sessionId/:questionNo',
    name: 'AssessmentView',
    component: AssessmentView,
  },
  {
    path: '/survey/:questionNo',
    name: 'SurveyView',
    component: SurveyView
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
