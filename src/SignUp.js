import React from "react";
import {withRouter} from "react-router-dom";
import "./Login.css";
import axios from "axios";
import qs from 'qs';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

class SignUp extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this); 
		this.state = {username: "",password: ""}
	}

	handleClick(){
		let body = qs.stringify({
      		username: this.state.username,
      		password: this.state.password
		})
		axios.post("https://api.stya.net/nim/register",body,headers) 
		.then(res => {
			alert(res.data.status);
			if(res.data.code === 0){
				(this.props.history.push("/"));	
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
					<span className="loginTitle"> Sign Up </span>
					<div>
					<input className="input" type ="text" name="username" placeholder="username" onChange={this.handleUsername} required />
					<input className="input" type ="password" name="password" placeholder="password" onChange={this.handlePassword} required/>
					<button className="SignUpBtn" onClick={this.handleClick} > Sign Up </button>
					</div>
				</div>
			</div>)

	}
}

export default withRouter(SignUp);