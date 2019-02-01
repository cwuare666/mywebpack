import React from 'react';
import { render } from 'react-dom';
import AnimationRouter from './router';

import { Link } from 'react-router-dom';

require('_rootPath/commonStyle.scss');

// render(
// 		<div>33333</div>,
// 		document.getElementById('root')
// 	)
const App = {
  run:function(){
    console.log(App)
   	render(
	    <div>
	    	{/*<nav>
	    		<ul>
	    			<li>
	    				<Link to="/home">首页</Link>
	    			</li>
	    			<li>
	    				<Link to="/about">关于</Link>
	    			</li>
	    		</ul>
	    	</nav>*/}
	    	<AnimationRouter />
	    </div>,
      	document.getElementById('root')
    )
  }
}
App.run();