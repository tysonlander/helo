insert into helo_users (username, password)
values(${username}, ${password})
returning id, username