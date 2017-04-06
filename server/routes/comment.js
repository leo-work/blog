import Router from 'koa-router'
import {comment} from '../controllers/index.js'
const router = new Router({
  prefix: '/comment'
})

/**
 * 首先判断用户的登录情况
 */

// 删除评论只有博主才能删除
router.get('/discard', comment.discard)

// 新增评论
router.get('/add', comment.addComment)

export default router
