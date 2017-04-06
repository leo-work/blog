
// 删除文章
export async function discard (ctx, next) {
  let {news} = ctx.models
  ctx.state.data = await news.discard(ctx.tools, ctx.request.body)
  await next()
}
// 新增文章
export async function addNews (ctx, next) {
  let {news} = ctx.models
  ctx.state.data = await news.addNews(ctx.tools, ctx.request.body)
  await next()
}
// 文章修改
export async function modifyNews (ctx, next) {
  let {news} = ctx.models
  ctx.state.data = await news.modifyNews(ctx.tools, ctx.request.body)
  await next()
}
// 后台用户最新显示20条
export async function userNewsList (ctx, next) {
  let {news} = ctx.models
  ctx.state.data = await news.userNewsList(ctx.tools, ctx.request.body)
  await next()
}
// 首页获取数据
export async function newslist (ctx, next) {
  let {news} = ctx.models
  console.log(ctx.request.body)
  ctx.state.data = await news.newslist(ctx.tools, ctx.request.body)
  await next()
}
// 获取新闻的详情内容
export async function newsDetails (ctx, next) {
  let {news} = ctx.models
  ctx.state.data = await news.newsDetails(ctx.tools, ctx.request.body)
  await next()
}
