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
	    	<AnimationRouter />
	    </div>,
      	document.getElementById('root')
    )
  }
}
App.run();