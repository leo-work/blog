import Router from 'koa-router'
import {news} from '../controllers/index.js'
const router = new Router({
  prefix: '/news'
})


// 文章的增删改查需要用户登录验证
// {
//   session: '',
//   taken: {
//     username: '',
//     id: ''
//   }
// }

const endSend = async (ctx, next) => {
  let data = ctx.state.data
  console.log(data)
  let code = 200
  if (data === null) {
    code = 500
  }
  ctx.body = {data, code}
}

// 删除文章
router.post('/discard', news.discard, endSend)

// 新增文章
router.post('/add', news.addNews, endSend)

// 文章修改
router.post('/modify', news.modifyNews, endSend)

// 注册用户最新显示20条
router.post('/user/newslist', news.userNewsList, endSend)

// 首页获取数据
router.post('/newslist', news.newslist, endSend)

// 获取新闻的详情内容
router.get('/:id', news.newsDetails, endSend)

export default router
