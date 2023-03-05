import { createRouter, createWebHistory } from "vue-router";
import FirstComponent from "../views/FirstComponent.vue";
import SecondComponent from "../views/SecondComponent.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeVue.vue"),
        alias: "/",
    },
    {
        path: "/first",
        name: "FirstComponent",
        component: FirstComponent,
    },
    {
        path: "/calc",
        name: "SecondComponent",
        component: SecondComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
