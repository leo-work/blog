import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
import Index from '@/components/Index'
import MyNews from '@/components/user/MyNews'
import NewContent from '@/components/user/NewContent'
import First from '@/components/First'
import NewsDone from '@/components/user/NewsDone'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          component: First
        },
        {
          path: '/user/sendnews',
          component: NewsDone
        },
        {
          path: '/user/mynews',
          component: MyNews
        },
        {
          path: '/newsinfo/:id',
          name: 'NewContent',
          component: NewContent
        }
      ]
    },
    {
      path: '/user/mynews',
      name: 'MyNews',
      component: MyNews
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   console.log(to.path)
//   if (to.path === '/page') {
//     next('/page')
//   } else {
//     next('/')
//   }
// })
export default router
