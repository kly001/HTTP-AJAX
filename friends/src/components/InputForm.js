import React from "react"

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            friendList:[],
           newFriend:{
               name: "",
               age: "",
               email:"",
           } 
        }
    } 

changeHandler = (event) => {
    this.setState(prevState =>({
        friend: {...prevState.friend, [event.target.name]:event.target.value}
    }) )
}


   render(){
    return(
        <div>
          <h2>New Friend</h2>
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="name"
                onChange = {this.changeHandler}
                placeholder="Name"
                value={this.state.newFriend.name}
            />

            <input
                type="number"
                name="age"
                onChange = {this.changeHandler}
                placeholder="Age"
                value={this.state.newFriend.age}
            />

            <input
                type="text"
                name="email"
                onChange = {this.changeHandler}
                placeholder="email"
                value={this.state.newFriend.email}
            />
            <button type="submit">Add New Friend</button>      
            </form>
        </div>
     )
   } 
}
export default InputForm