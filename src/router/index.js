import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import UserDetailView from '../views/UserDetailView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: UsersView },
    { path: '/users/:id', name: 'user-detail', component: UserDetailView, props: true },
  ],
  scrollBehavior(){ return { top: 0 } }
})