
export async function getUserInfoByEmail ({sql, clientRedis}, email) {
  let data = await sql.getSqlData({
    sqlQuery: 'select * from t_user where email = ?',
    arg: [email]
  })

  return data
}

export async function registerUser ({sql, clientRedis}, {username, password, email}) {
  let data = await sql.getSqlData({
    sqlQuery: 'insert into t_user (username, password, email) values(?, ?, ?)',
    arg: [username, password, email]
  })

  return data
}
