import React, { Component } from 'react';
import './App.css';
import axios from "axios"

import FriendList from "./components/FriendList"
import Friend from "./components/Friend"


class App extends Component {
  constructor() {
    super()
    this.state={
      friends:[]
    }
  }

  componentDidMount =() => {
    axios.get("http://localhost:5000/friends")
      .then((response) => {
        console.log(response)
        this.setState({friends:response.data})
      })
      .catch((error) => {
        console.log("There is an error here !")
        this.setState({friends:error.data})
      })

  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
     <h1>My FriendList</h1>
      <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
