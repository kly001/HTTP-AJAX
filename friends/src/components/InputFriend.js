import React from "react"
import Axios from "axios";

class InputFriend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          friend:{
               name: "",
               age: "",
               email:"",
           } 
        }
    } 



   render(){
    return(
        <div>
            <button type="submit">Add New Friend</button> 
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="name"
                onChange = {this.changeHandler}
                placeholder="Name"
                value={this.state.friend.name}
            />

            <input
                type="number"
                name="age"
                onChange = {this.changeHandler}
                placeholder="Age"
                value={this.state.friend.age}
            />

            <input
                type="text"
                name="email"
                onChange = {this.changeHandler}
                placeholder="Email"
                value={this.state.friend.email}
            />     
            </form>
        </div>
     )
   } 
}
export default InputFriend