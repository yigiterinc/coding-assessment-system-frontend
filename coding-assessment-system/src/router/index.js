import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/user/Home.vue'
import AssessmentView from "../views/user/AssessmentView";
import SurveyView from "@/views/user/TestView";
import TestBuilder from "@/views/admin/TestBuilder";

Vue.use(VueRouter);

const adminPath = "/admin";

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
  },
  {
    path: adminPath + "/test-builder",
    component: TestBuilder
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
