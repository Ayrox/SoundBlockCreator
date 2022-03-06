import Vue from "vue";
import VueRouter from "vue-router";

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/SoundBlockCreator/",
    name: "Home",
    component: lazyLoad("Home"),
  },
  {
    path: "/SoundBlockCreator/about",
    name: "About",
    component: lazyLoad("About"),
  },
  {
    path: "/SoundBlockCreator/creator",
    name: "Creator",
    component: lazyLoad("Creator"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/SoundBlockCreator/",
  routes,
});

export default router;
