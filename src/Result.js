import React from 'react';
import axios from "axios";


function isNumber(s){
	for (let i = 0; i < s.length; i++) {
    	if(s[i] >= "0" && s[i] <="9"){

    	} else{
    		return false;
    	}
	}
	return true;
}


export class Result extends React.Component{
	constructor(props){
		super(props);
		this.state = {data : [],page: 0,prevPage : 0,availNext: true,query: ""}
	}


	componentWillReceiveProps(nextProps){
		this.setState({token : nextProps.token});
		this.setState({query : nextProps.query});
		this.setState({page: 0});
		this.setState({prevPage : 0});
		console.log("marimas");
	}

	componentDidUpdate(prevProps){
		if(prevProps.query !== this.state.query){
			if(isNumber(this.state.query)){
				axios.get(`https://api.stya.net/nim/byid?query=${this.state.query}&page=${this.state.page}`,
				{ headers: { "Auth-Token": this.props.token} })
		    	.then(res => this.setState({data : res.data.payload}));
		    } else {
		    	axios.get(`https://api.stya.net/nim/byname?name=${this.state.query}&page=${this.state.page}`,
				{ headers: { "Auth-Token": this.props.token}})
		    	.then(res => this.setState({data : res.data.payload}));
		    }
		} 
		console.log("lolo");
	}

	render(){
		if(this.state.data){
			return (
			<div>
			<table>
	        <thead>
	          <th>nama</th>
	          <th>nim tpb</th>
	          <th>nim jurusan</th>
	          <th>prodi</th>
	          </thead>
	        <tbody>      
	          { this.state.data.map(nim =><tr> <td>{nim.name}</td>
	                                      <td>{nim.nim_tpb}</td>
	                                      <td>{nim.nim_jur}</td>
	                                      <td>{nim.prodi}</td></tr>
	          )}
	        </tbody>
	    </table>
	    
			</div>
			)
		} else{
			return(
				<h2>Please Refresh</h2>)
		}
	}
	
}