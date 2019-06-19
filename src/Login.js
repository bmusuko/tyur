import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import './Login.css';
import axios from "axios";
import qs from 'qs';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

export class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username : "",
			password : "",
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this); 
	}

	handleClick(){
		let body = qs.stringify({
      		username: this.state.username,
      		password: this.state.password
		})
		axios.post("https://api.stya.net/nim/login",body,headers) 
		.then(response => {
			alert(response.data.token);
			if(response.data.status === "OK"){
				console.log("success");
				this.props.history.push('/search',{ token: response.data.token, username:this.state.username})
			} else{
				console.log(response.data.status);
			}
		})
	}

	handleUsername(e){
		this.setState({username : e.target.value})
	}

	handlePassword(e){
		this.setState({password : e.target.value})
	}

	render(){
		return(
			<div className="container">
				<div>
					<span className="loginTitle"> Login </span>
					<div>
					<input className="input" type ="text" name="username" placeholder="username" onChange ={this.handleUsername} required />
					<input className="input" type ="password" name="password" placeholder="password" onChange ={this.handlePassword} required/>
					<button className="loginBtn" onClick={this.handleClick}> Login </button>
					</div>
				<h5><Link to="/register">Sign up here</Link></h5>
				</div>
			</div>)
	}
}

export default withRouter(Login);