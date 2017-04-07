import app from './middleware'
import routerList from './routes/index'
import {sql} from './lib/mysql/index'
import {clientRedis} from './lib/redis/index'
import models from './models/index.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

// var olderToken = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh')

// 配置数据库和redis，模块
app.use(async (ctx, next) => {
  ctx.tools = {sql, clientRedis, crypto, jwt}
  ctx.models = models
  var olderToken = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh')
  try {
    var decoded = jwt.verify(olderToken, 'shhhhh')
    console.log(decoded)
  } catch (err) {
    console.log('errr')
    // err
  }
  // await next()
})

// 遍历所有的路由
routerList.map((routerValue) => {
  app.use(routerValue.routes(), routerValue.allowedMethods())
})

export default app
