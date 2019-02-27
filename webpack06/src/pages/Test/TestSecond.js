import React, { Component } from 'react';

require('./style.scss');

import pic from '_image/page/man.png';

class TestSecond extends React.Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){
		console.log(2222, this.props);
	}
	render(){
		return(
			<div className="about-content">
				this is testsecond!
				<img src={pic} alt="" />
				<div className="iconfont icon-idcard"></div>
			</div>
		)
	}
}
export default TestSecond;