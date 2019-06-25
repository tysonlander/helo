create table helo_users (
  id serial PRIMARY KEY,
  username varchar(200),
  password text,
  profilePicture text
)

create table helo_posts (
 id serial PRIMARY key,
 author_id int references helo_users (id)
 post_title,
 
)