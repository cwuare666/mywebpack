import React from 'react';
import { render } from 'react-dom';

// ReactDom.render(
// 		<div>33333</div>,
// 		document.getElementById('root');
// 	)
const App = {
  run:function(){
    console.log(App)
   	render(
	    <div>33333</div>,
      	document.getElementById('root')
    )
  }
}
App.run();