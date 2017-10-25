import Vue from 'vue'
import Router from 'vue-router'
import app from '@/components/title'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'title',
      component: title
    }
  ]
})
