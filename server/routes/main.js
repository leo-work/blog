import Router from 'koa-router'
import {main} from '../controllers/index.js'
const router = new Router()

router.get('/', main.getIndex)

export default router
