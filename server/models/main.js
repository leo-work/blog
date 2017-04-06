
export async function getIndexData ({sql, clientRedis}) {
  // 优先在redis如果没有数据库里拿
  // await clientRedis.del('newslist')
  let data = await clientRedis.lrange('newslist', 0, -1)
  if (data.length === 0 || data === null) {
    data = await sql.getSqlData({
      sqlQuery: 'select name from t_user'
    })
    await clientRedis.del('newslist')
    data.map(async (value) => {
      await clientRedis.lpush('newslist', JSON.stringify(value))
    })
  } else {
    let val = 0
    data.map((value) => {
      data[val] = JSON.parse(value)
      val++
    })
    console.log('redis')
  }
  return data
}

