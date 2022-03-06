import Vue from "vue";
import VueRouter from "vue-router";

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad("Home"),
  },
  {
    path: "/about",
    name: "About",
    component: lazyLoad("About"),
  },
  {
    path: "/creator",
    name: "Creator",
    component: lazyLoad("Creator"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: "",
  routes,
});

export default router;
