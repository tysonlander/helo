import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


class Nav extends Component {
  
  handleHome = () => {
    this.props.history.push('/dashboard')
  }
  handleNewPost = () => {
    this.props.history.push('/post/:postid')
  }
  handleLogout = () => {
    this.props.history.push('/')
  }

  
  render(){
    return(
    <div>
      <h1>{this.props.username}</h1>
      <button onClick={this.handleHome}>Home</button>
      <button onClick={this.handleNewPost}>New Post</button>
      <button onClick={this.handleLogout}>Logout</button>
    </div>)
  }
}

function mapStateToProps(reduxState){
  return {
    username: reduxState.userInfo.username,
    profilePicture: reduxState.userInfo.profilePicture
  }
}

export default withRouter(connect(mapStateToProps)(Nav)) 