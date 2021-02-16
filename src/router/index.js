
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
// import Home from '../views/Home.vue'

import Aboutme from "../views/Aboutme.vue";
import Career from "../views/Career.vue";
import Projectpage from "../views/Projectpage.vue";
import Skillpage from "../views/Skillpage.vue";

export default new VueRouter({
    mode: 'history',
    scrollBehavior: function (to) {
        if (to.hash) {
            return {
                selector: to.hash, behavior: 'smooth',
            }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'Aboutme',
            component: Aboutme
        },
        {
            path: '/',
            name: 'Career',
            component: Career
        },
        {
            path: '/',
            name: 'Projectpage',
            component: Projectpage
        },
        {
            path: '/',
            name: 'Skillpage',
            component: Skillpage
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
});