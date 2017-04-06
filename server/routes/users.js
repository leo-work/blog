import Router from 'koa-router'
import {user} from '../controllers/index.js'
const router = new Router({
  prefix: '/user'
})

router.post('/login', user.login)

router.post('/register', user.register)

export default router
