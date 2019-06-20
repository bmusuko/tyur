import React from 'react';
import './App.css';
import {Result} from "./Result";
import {withRouter} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);
    const token = this.props.location.state.token;
    this.state = { 
      query : "",
      status: "",
      token : token}

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = (e) =>{
    this.setState({query: e.target.value})
  }

  render(){
    return(
      <div className="App">
      <input type="text" onChange={this.handleUserInput} placeholder="Search"/>
      <h1>Hello, {this.props.location.state.username}</h1>
      <br />
      <br />
      <Result query ={this.state.query} token = {this.state.token} /> 
      </div>  )}

}

export default withRouter(App);