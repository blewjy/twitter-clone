
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Main from '../components/Main.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'main',
        component: Main
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router