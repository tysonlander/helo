const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body
    const db = req.app.get('db')
    const { session } = req
    const userFound = await db.check_username({username})
    if (userFound[0]) return res.status(409).send('There is already an account associated with this username.')
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const createdUser = await db.register_user({
      username,
      password: hash
    })
    session.user = {
      id: createdUser[0].id, 
      firstName: createdUser[0].username,
    }
    res.status(200).send(session.user)
  },
  login: async (req, res) => {
    const {username, password} = req.body
    const db = req.app.get('db')
    const  { session } = req
    const userFound = await db.check_username({username})
    if(!userFound[0]) return res.status(401).send('That user does not exist') 
    const authenticated = bcrypt.compareSync(password, userFound[0].password)
    if(authenticated){
      session.user = {
        id: userFound[0].id, 
        username:userFound[0].username
       }
      res.status(200).send(session.user)
    } else{
      return res.status(401).send('Whoa there cowboy! Please try a different username or password')
    }
  }
}