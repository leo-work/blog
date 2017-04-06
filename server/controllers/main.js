
export async function getIndex (ctx, next) {
  let {main} = ctx.models
  let data = await main.getIndexData(ctx.tools)

  ctx.state = {
    title: '文章列表',
    body: data
  }
  console.log('state', ctx.state)
  await ctx.render('index', {
  })
}
