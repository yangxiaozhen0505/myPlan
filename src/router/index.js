import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Time from '@/components/Time'
import Add from '@/components/Add'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/time',
      component: Time,
      children:[
        {
          path: 'add-time',
          component: Add
        }
        ]
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '*',
      redirect:'/home'
    }
  ]
})
