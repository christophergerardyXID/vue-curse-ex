import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import About from "../components/About.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HelloWorld,
    },
    {
        path: '/about',
        component: About,
    }
];

export const router = createRouter({
    routes,
    history: createWebHistory(),
});