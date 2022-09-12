import React from 'react';
import {Component} from 'react';
function New(props) {
    const {lName,fName} = props;
    return (
        <h1>My Name is {fName} {lName}</h1>
    )
};


class name extends Component{
    render() {
        return(
            <div>
                <h1>I have been trying to learn react in a while man i need my ass hired</h1>
            </div>
        )
    }
}

export default New