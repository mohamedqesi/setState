import React, {Component} from "react";

class State extends Component {
    constructor(){
        super()
        this.state = {
            value : 0,
            name: null,
            age: null            
        }

    this.plusClick = this.plusClick.bind(this)
    this.subtractClick = this.subtractClick.bind(this)
    this.clearClick = this.clearClick.bind(this)
    this.change = this.change.bind(this)


     
    }
    
    plusClick (){
        this.setState({ value: this.state.value + 1 })
    };
    subtractClick (){
        this.setState({ value: this.state.value -  1 })
    };
    clearClick (){
        this.setState({ value: 0 })
    };
    change(event) {
        let x = event.target.id;
        this.setState({ [x]: event.target.value })
    };

/*    changeage(event) {
        this.setState({ age: event.target.value })
    };*/

    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.plusClick} >Click To Add</button>
                <button onClick={this.subtractClick} >Click to subtract</button>
                <button onClick={this.clearClick} >Click to clear</button>

                <h1>Your name is: {this.state.name}</h1>
                <h1>You are: {this.state.age} years old</h1>

                <input type="text" id = "name" onChange = {this.change} placeholder="Yourname" />

                <input type="number" id="age" onChange = {this.change} placeholder="Yourage" />
            </div>
        )
    }
}
export default State;