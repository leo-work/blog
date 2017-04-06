
// 删除新闻
export async function discard ({sql}, {id}) {
  let data = await sql.getSqlData({
    sqlQuery: 'update t_news set isShow = 1 where id = ?',
    arg: [id]
  })
  return data
}

// 添加新闻
export async function addNews ({sql}, {title, content, userId, sendTime, username}) {
  let data = await sql.getSqlData({
    sqlQuery: 'insert into t_news (title, content, userId, sendTime, username) values(?, ?, ?, ?, ?)',
    arg: [title, content, userId, sendTime, username]
  })
  return data
}

// 修改新闻
export async function modifyNews ({sql}, {id, title, content, userId, sendTime, username}) {
  let data = await sql.getSqlData({
    sqlQuery: 'update t_news set title = ?, content = ?, userId = ?, sendTime = ?, username = ? where id = ?',
    arg: [title, content, userId, sendTime, username, id]
  })
  return data
}

// 后台用户最新显示20条
export async function userNewsList ({sql}, {page, userId}) {
  let data = await sql.getSqlData({
    sqlQuery: 'select * from  t_news where userId = ? and isShow = 0 order by id desc limit ?, ?',
    arg: [userId, (page - 1) * 20, page * 20]
  })
  return data
}

// 首页获取数据
export async function newslist ({sql}, {page}) {
  let data = await sql.getSqlData({
    sqlQuery: 'select * from  t_news where isShow = 0 order by id desc limit ?, ?',
    arg: [(page - 1) * 20, page * 20]
  })
  return data
}

// 首页获取数据
export async function newsDetails ({sql}, {id}) {
  let data = await sql.getSqlData({
    sqlQuery: 'select * from  t_news where id = ?',
    arg: [id]
  })
  return data
}
