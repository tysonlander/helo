import React, {Component} from 'react'
import axios from 'axios'
import {updateUser} from '../../Redux/reducer'
import { connect } from 'react-redux';

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }

  }

  handleRegister = (e) => {
    e.preventDefault()
    const {username, password} = this.state
    axios
      .post('/auth/register', {username, password})
      .then((res) => {
        this.props.updateUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.log(err)
      })
    // e.target.password.value = ''
  }

  handleLogin = () => {
    // e.preventDefault()
    const {username, password} = this.state
    axios.post('/auth/login', {username, password})
      .then((res) => {
        this.props.updateUser(res.data) // this send the res data to the state so for this user session
        // console.log(res.data) 
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        console.log(err)
      })
    // e.target.username.value = ''
    // e.target.password.value = ''
  }
  
  handleLoginInfoUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render(){
    return(
    <div>
      <input
            type='text'
            name='username'
            placeholder='username'
            onChange={this.handleLoginInfoUpdate}
          />
      <input
            type='text'
            name='password'
            placeholder='password'
            onChange={this.handleLoginInfoUpdate}
          />
      <button onClick={this.handleRegister}>Register</button>
      <button onClick={this.handleLogin}>Login</button>
    </div>
    )
  }
}

export default connect(null, {updateUser})(Auth) 