import React, { Component } from 'react';

require('./style.scss');

import pic from '_image/page/man.png'

class About extends React.Component{
	componentWillMount(){
		console.log(2222);
	}
	render(){
		return(
			<div className="about-content">
				this is about!
				<img src={pic} alt="" />

				<div className="iconfont icon-idcard"></div>
			</div>
		)
	}
}

export default About;