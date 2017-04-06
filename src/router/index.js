import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
import Index from '@/components/Index'
import MyNews from '@/components/user/MyNews'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
