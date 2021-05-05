
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Main from '../components/Main.vue'
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: "SignUp",
        component: SignUp
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router