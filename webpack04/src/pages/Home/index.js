import React, { Component } from 'react';

require('./style.scss');

import nofind from '_image/404.png';

class Home extends React.Component{
	componentWillMount(){
		console.log(111);
	}
	render(){
		return(
			<div className="about-content">
				this is home!
				<img src={nofind} alt="" />
			</div>
		)
	}
}

export default Home;