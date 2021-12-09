import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    ///COLLEGE API///
    {
        path: "/courses",
        name: "course_index",
        component: () => import("./pages/College/Course.vue")
    },
    {
        path: "/lecturers",
        name: "lecturer_index",
        component: () => import("./pages/College/Lecturer.vue")
    },
    {
        path: "/enrolments",
        name: "enrolment_index",
        component: () => import("./pages/College/Enrolment.vue")
    }
    //////////////////
]
});