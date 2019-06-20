import React from 'react';
import './App.css';
import Post from './Components/Post/Post'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Nav from './Components/Nav/Nav'
import Auth from './Components/Auth/Auth'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Auth/>
      <Dashboard/>
      <Form/>
      <Post/>
    </div>
  );
}

export default App;
