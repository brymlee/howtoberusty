import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Input from "../presentational/Input.jsx";

class HowToBeRustyContainer extends Component{
    constructor(){
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.id]: event.target.value });
    }

    render(){
        const { seo_title } = this.state;
        return (
            <button className="foo-button mdc-button">
                Button
            </button>
        );
    }
}
export default HowToBeRustyContainer;
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<HowToBeRustyContainer />, wrapper) : false;
