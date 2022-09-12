import { Component } from "react";
class ClassEvent extends Component{
    handleClick(){
        console.log("This is a class based componet You really have to learn react")
    }
    render() {
        return (
            <div>
                This is Class based components
                <button onClick={this.handleClick()}>TAP ME IF YOU WANT</button>
            </div>
        )
    }
}
export default ClassEvent