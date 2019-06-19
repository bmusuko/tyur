import React from 'react';
import axios from "axios";
import {Navigation} from "./Navigation";

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
		this.state = {data : [],query: "",test:false}
		this.changePage = this.changePage.bind(this);
	}


	changePage(newPage){
		this.setState({page : newPage})
	}

	componentWillReceiveProps(nextProps){
		this.setState({token : nextProps.token});
		this.setState({query : nextProps.query});
		this.setState({page: 0});
	}

	componentDidUpdate(prevProps,prevState){
		if(prevProps.query !== this.state.query || prevState.page !== this.state.page){
			if(isNumber(this.state.query)){
				axios.get(`https://api.stya.net/nim/byid?query=${this.state.query}&page=${this.state.page}`,
				{ headers: { "Auth-Token": this.props.token} })
		    	.then((response) =>{
		    		this.setState({data : response.data.payload})
		    		axios.get(`https://api.stya.net/nim/byid?query=${this.state.query}&page=${this.state.page+1}`,
					{ headers: { "Auth-Token": this.props.token} })
		    		.then((res) =>{
		    			if(Object.keys(res.data.payload).length > 0){
		    				this.setState({availNext : true});
		    			} else{
		    				this.setState({availNext : false});
		    			}
		    		})
		    	});
		    } else {
		    	axios.get(`https://api.stya.net/nim/byname?name=${this.state.query}&page=${this.state.page}`,
				{ headers: { "Auth-Token": this.props.token}})
		    	.then((response) =>{
		    		this.setState({data : response.data.payload})
		    		axios.get(`https://api.stya.net/nim/byname?name=${this.state.query}&page=${this.state.page+1}`,
					{ headers: { "Auth-Token": this.props.token} })
		    		.then((res) =>{
		    			if(Object.keys(res.data.payload).length > 0){
		    				this.setState({availNext : true});
		    			} else{
		    				this.setState({availNext : false});
		    			}
		    		})
		    	});
		    }
		} 
	}


    componentDidMount() {
        this.timer = setInterval(() => this.setState(prevState => ({ test: !prevState.test })),5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


	render(){
		if(Object.keys(this.state.data).length > 0){
			return (
			<div>
		    	<h1>{this.state.availNext}</h1>
		    	<h1>{true}</h1>
		    	<h1>{false}</h1>
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
		    	<Navigation page={this.state.page} availNext={this.state.availNext} onChange={this.changePage}/>
			</div>
			)
		} else if (!this.state.query){
			return(<h2>type something like "13517" or "andika "</h2>)
		} else if (Object.keys(this.state.data).length === 0){
			return(<h2>No result</h2>)
		} else{
			return(<h2>Please Refresh</h2>)
		}
	}
	
}