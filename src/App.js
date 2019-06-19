import React from 'react';
import './App.css';
import {Result} from "./Result";
import {withRouter} from "react-router-dom";



// if(localStorage.getItem('token')){
//   axios.get(`https://api.stya.net/nim/byid?query=1`,{ headers: { "Auth-Token": localStorage.getItem("token")} }) // dummy untuk cek token masih valid
//   .then((response) =>{ 
//     if(response.data.code !== 2){
//       axios.post("https://api.stya.net/nim/login",login,headers) 
//       .then(res =>  (localStorage.setItem('token',res.data.token)))
//       console.log("tidak valid");
//     } else{
//       console.log("valid");
//     }
//   })
// } else{
//   axios.post("https://api.stya.net/nim/login",login,headers) 
//       .then(res =>  (localStorage.setItem('token',res.data.token)));
//   console.log("first");
// }



export class App extends React.Component{
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