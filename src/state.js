import React, {Component} from "react";

class State extends Component {
    constructor(){
        super()
        this.state = {
            value : 0
        }

    this.plusClick = this.plusClick.bind(this)
    this.subtractClick = this.subtractClick.bind(this)
    this.clearClick = this.clearClick.bind(this)
     
    }
    
    plusClick (){
        this.setState({ value: this.state.value + 1 })
    }
    subtractClick (){
        this.setState({ value: this.state.value -  1 })
    }
    clearClick (){
        this.setState({ value: 0 })
    }
    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.plusClick} >Click To Add</button>
                <button onClick={this.subtractClick} >Click to subtract</button>
                <button onClick={this.clearClick} >Click to clear</button>
            </div>
        )
    }
}
export default State;