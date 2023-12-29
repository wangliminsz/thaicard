import { createRouter, createWebHistory } from "vue-router";

import thaiCard from "../views/thaiCard.vue"

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [

        {
            path: "/card",
            component: thaiCard,
        },

        {
            path: "/",
            component: thaiCard,
        },

        {
            path: "",
            component: thaiCard,
        },

    ],
});

export default router;