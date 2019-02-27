import React, { Component } from 'react';
import { 
	BrowserRouter,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom';

import HomeRouterRouter from '_src/router/HomeRouter.js';

require('./style.scss');

import nofind from '_image/404.png';

class Home extends React.Component{
	componentWillMount(){
		console.log(111);
	}
	render(){
		console.log(this.props.match, 'this.props.match')
		const match = this.props.match;
		return(
			<div className="home-content">
				<ul>
	    			<li>
	    				<Link to={`${match.url}`}>首页</Link>
	    			</li>
	    			<li>
	    				<Link to={`${match.url}/about`}>关于</Link>
	    			</li>
	    			<li>
	    				<Link to={`${match.url}/testfirst`}>test01</Link>
	    			</li>
	    			<li>
	    				<Link to={`${match.url}/testsecond`}>test02</Link>
	    			</li>
	    		</ul>
				this is home!
				<div className="content">
					<HomeRouterRouter />
				</div>
			</div>
		)
	}
}

export default Home;