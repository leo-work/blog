
export async function addComment (ctx, next) {
  let {news} = ctx.models
  let data = await news.getUserBlogNews(ctx.tools)

  ctx.state = {
    title: 'leo的博客',
    body: data
  }
  await ctx.render('userblog', {
  })
}

/**
 * 登录验证
 * @export
 * @param {any} ctx 上下文
 * @param {any} next 传递上下文
 */
export async function discard (ctx, next) {
  let {user, md5} = ctx.models
  let userinfo = ctx.request.body
  md5.update(userinfo.password)
  let data = await user.login(ctx.tools, userinfo.account)
  if (md5.digest('hex') === data.password) {
    ctx.body = {
      message: 'login success!',
      code: 200
    }
  } else {
    ctx.body = {
      message: 'login fail!',
      code: 201
    }
  }
  ctx.body = data
}
