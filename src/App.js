import React from 'react';
import axios from "axios";
import './App.css';
import {Result} from "./Result";
import qs from 'qs';


const login = qs.stringify({
      username: 'bmusuko',
      password: 'gorengtoba12'
});

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};


if(localStorage.getItem('token')){
  axios.get(`https://api.stya.net/nim/byid?query=1`,{ headers: { "Auth-Token": localStorage.getItem("token")} }) // dummy untuk cek token masih valid
  .then(function(response){ 
    if(response.data.code !== 2){
      axios.post("https://api.stya.net/nim/login",login,headers) 
      .then(res =>  (localStorage.setItem('token',res.data.token)))
    }
  })
} else{
  axios.post("https://api.stya.net/nim/login",login,headers) 
      .then(res =>  (localStorage.setItem('token',res.data.token)));

}



export class App extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      query : "",
      status: "",
      token : localStorage.getItem("token")}

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = (e) =>{
    this.setState({query: e.target.value})
  }

  render(){
    return(
      <div>
      <input type="text" onChange={this.handleUserInput} placeholder="Search"/>
      <h1>{}</h1>
      <br />
      <br />
      <Result query ={this.state.query} token = {localStorage.getItem("token")} /> 
      </div>  )}

}