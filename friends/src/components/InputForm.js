import React from "react"

class InputForm extends React.Component {
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
          <h2>Add New Friend</h2>
            <form>
            <input
                type="text"
                name="name"
                onChange = {this.changeHandler}
                placeholder="Name"
                value={this.state.friend.name}
            />
            </form>
        </div>
     )
   } 
}
export default InputForm