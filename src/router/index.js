import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Abilities from "../pages/Abilities.vue"
import contact from "../pages/contact.vue"
import Experiences from "../pages/Experiences.vue"
import Project from "../pages/Project.vue"
const routes = [{

    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/Abilities",
    component: Abilities,
    name: "Abilities",

},{
    path: "/contact",
    component: contact,
    name: "contact",

},{
    path: "/Experiences",
    component: Experiences,
    name: "Experiences",

},{
    path: "/Project",
    component: Project,
    name: "Project",

}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass:"active",
    scrollBehavior (to, from, savedPosition) {
        if(to.hash) {
            return{
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return{ x: 0, y: 0};
    },
    routes,
});

export default router;