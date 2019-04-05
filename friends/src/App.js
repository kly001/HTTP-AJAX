import React, { Component } from 'react';
import './App.css';
import axios from "axios"
import {Route} from "react-router-dom"

import FriendList from "./components/FriendList"
import InputForm from "./components/InputForm"

class App extends Component {
  constructor() {
    super()
    this.state={
      friends:[],
      newFriend: {
        name: "",
        age: "",
        email: "",
      }
    }
  }

  componentDidMount =() => {
    axios.get("http://localhost:5000/friends")
      .then((response) => {
        console.log(response)
        this.setState({friends:response.data})
      })
      .catch((error) => {
        console.log(error)
      })

  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
     <h1> My FriendList</h1>
     <InputForm/>
      <Route 
        path="/friend-form" component={InputForm}/>
      <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
