import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    }, {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/whoiam',
      name: 'whoiam',
      component: () => import('./views/Whoiam.vue')
    },{
      path: '/post/:id',
      name: 'post',
      component: () => import('./views/Post.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/programming',
      name: 'programming',
      component: () => import('./views/Programming.vue')
    },
    {
      path: '/hobby',
      name: 'hobby',
      component: () => import('./views/Hobby.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
  ]
})
