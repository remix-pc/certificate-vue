import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// eslint-disable-next-line no-unused-vars
function AdminAuth(next){
  if(localStorage.getItem('token') != undefined){
    console.log(this.$globalToken);
    this.axios.get("https://localhost:7083/validate", this.$globalToken).then(res => {
    console.log(res);
    next()
    }).catch(err => {
      console.log(err.response);
      next("/login")
    })
  }else {
    next("/login")
  }
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/login",
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
