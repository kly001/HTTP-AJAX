import React from "react"

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           newFriend:{
               name: "",
               age: "",
               email:"",
           } 
        }
    } 

changeHandler = (event) => {
    console.log("Working")
    this.setState({[event.target.name]: event.target.value})
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
                placeholder="Email"
                value={this.state.newFriend.email}
            />     
            </form>
        </div>
     )
   } 
}
export default InputForm