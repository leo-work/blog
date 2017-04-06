
// 登录验证
export async function login (ctx, next) {
  let {user} = ctx.models
  let {crypto} = ctx.tools
  let userinfo = ctx.request.body
  let userData = await user.getUserInfoByEmail(ctx.tools, userinfo.email)
  if (userData.length > 0) {
    let md5 = crypto.createHash('md5')
    md5.update(userinfo.password)
    if (md5.digest('hex') === userData[0].password) {
      // const secret = 'blog-token'       // 指定密钥
      // const token = jwt.sign({username: userData[0].username,
      //   userId: userData[0].id,
      //   email: userData[0].email
      // }, secret) // 签发token
      const token = 123
      // 保存redis中
      ctx.body = {
        code: 200,
        token: token,
        username: userData[0].username,
        userId: userData[0].id,
        email: userData[0].email
      }
    } else {
      ctx.body = {
        code: 201
      }
    }
  } else {
    ctx.body = {
      code: 202
    }
  }
}

// 注册
export async function register (ctx, next) {
  let {user} = ctx.models
  let {crypto} = ctx.tools
  let userinfo = ctx.request.body
  console.log(123123)
  let userData = await user.getUserInfoByEmail(ctx.tools, userinfo.email)
  console.log(userData)
  if (userData.length === 0) {
    let md5 = crypto.createHash('md5')
    md5.update(userinfo.password)
    let data = await user.registerUser(ctx.tools, {
      email: userinfo.email,
      password: md5.digest('hex'),
      username: userinfo.username
    })
    if (data !== null) {
      // const secret = 'blog-token'       // 指定密钥
      // let token = jwt.sign({name: '123123123', id: 123}, secret) // 签发token

      ctx.body = {
        code: 200,
        id: data.insertId,
        token: 1213
      }
    } else {
      ctx.body = {
        code: 201
      }
    }
  } else {
    ctx.body = {
      code: 202
    }
  }
}
