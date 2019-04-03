import React, { Component } from 'react';
import './App.css';
import axios from "axios"


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
      })


  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
     <h1>My FriendList</h1>
      <p>NAME:</p>
      <p>AGE:</p>
      <p>EMAIL:</p>   
      </div>
    );
  }
}

export default App;
