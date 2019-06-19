import React from 'react';


export class Navigation extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			page : 0,
			availNext : true
		}
		this.handleClick = this.handleClick.bind(this);

	}

	componentWillReceiveProps(nextProps){
		this.setState({page : nextProps.page});
		this.setState({availNext : nextProps.availNext});
	}

	handleClick(e){
		this.props.onChange(e.target.value-1);
	}
	render(){
		if(this.state.page === null){
			return (<h1>boom</h1>); // dummy
		} else if(this.state.page === 0 && this.state.availNext) {
			return(
				<ul className="Navigation">
					<li > {this.state.page+1} </li>
					<li onClick={this.handleClick} value={this.state.page+2} className="ableNav"> {this.state.page+2} </li>
					<li onClick={this.handleClick} value={this.state.page+2} className="ableNav"> Next </li>
				</ul>
		)}else if(this.state.page === 0 && !this.state.availNext){
			return(
				<ul class="Navigation">				
					<li> {this.state.page+1}</li>
				</ul>
		)} else if (this.state.availNext){
				return(
				<ul className="Navigation">
					<li onClick={this.handleClick} value={this.state.page} className="ableNav"> Prev </li>
					<li onClick={this.handleClick} value={this.state.page} className="ableNav">{this.state.page}</li>
					<li>{this.state.page+1}</li>
					<li onClick={this.handleClick} value={this.state.page+2} className="ableNav">{this.state.page+2}</li>
					<li onClick={this.handleClick} value={this.state.page+2} className="ableNav"> Next </li>
				</ul>
		)} else {
				return(
				<ul className="Navigation">
					<li onClick={this.handleClick} value={this.state.page} className="ableNav"> Prev </li>
					<li>{this.state.page+1}</li>
				</ul>
		)}
	}

}