import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "@/pages/TheHome";
import AboutPage from "@/pages/TheAbout";
import NotFound from "@/pages/NotFound";


const routerHistory = createWebHashHistory();

const routers = createRouter({
    history: routerHistory,
    routes : [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
        },
        {
            path: '/:CatchAll(.*)',
            name: '404',
            component: NotFound,
        },
    ]
})

export default routers;