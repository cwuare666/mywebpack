import React, { Component } from 'react';
import {  Link  } from 'react-router-dom';

import pic from '_image/page/man.png';

class Login extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		console.log(2222, this.props);
	}
	render(){
		return(
			<div style={{width: '100px', height: '300px', background: 'green'}}>
				<Link to="/home">go_home</Link>
				this is login!
			</div>
		)
	}
}
export default Login;