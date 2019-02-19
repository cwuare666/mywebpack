import React from 'react';
import { render } from 'react-dom';
import AnimationRouter from './router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import todoApp from '_redux/reducers'

import { Link } from 'react-router-dom';

require('_rootPath/commonStyle.scss');

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
 	 middleware.push(createLogger());
}
const store = createStore(
  	todoApp,
  	applyMiddleware(...middleware)
)
//store.dispatch(getAllProducts())

//let store = createStore(todoApp);


// render(
// 		<div>33333</div>,
// 		document.getElementById('root')
// 	)
const App = {
  run:function(){
    console.log(App)
   	render(
	    <Provider store={store}>
	    	<AnimationRouter />
	    </Provider>,
      	document.getElementById('root')
    )
  }
}
App.run();