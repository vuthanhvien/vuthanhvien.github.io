import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Container from './views/Container.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior:  ()=>{
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      component: Container,
      children: [
        {
          path: '/',
          component: Home,
          name: '',
        },
        {
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
          path: '/hobby/travel',
          name: 'travel',
          component: () => import('./views/Travel.vue')
        },
        {
          path: '/hobby/film',
          name: 'film',
          component: () => import('./views/Film.vue')
        },
        {
          path: '/hobby/book',
          name: 'book',
          component: () => import('./views/Book.vue')
        },
        {
          path: '/search',
          name: 'search',
         
          component: () => import('./views/Search.vue')
        },
      ]
    },
  ]
})
