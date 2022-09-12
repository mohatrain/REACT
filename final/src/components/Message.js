import { Component } from "react";

class Message extends Component{
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} and I have a simple message for you please read this message: {this.props.messageContent}</h1>
            </div>
        )
    }
}
export default Message