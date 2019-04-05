import React, { Component } from 'react';
import './App.css';
import axios from "axios"


import FriendList from "./components/FriendList"
import InputFriend from "./components/InputFriend"


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

  changeHandler = (event) => {
    this.setState(({
        friend: {[event.target.name]:event.target.value}
    }))  
  }
  

  
  render() {
    console.log(this.state)
    return (
      <div className="App">
     <h1> My FriendList</h1>
     <InputFriend addFriend={this.addFriend}/>
      <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
