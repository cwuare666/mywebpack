import React from 'react';
import { render } from 'react-dom';
import AnimationRouter from './router';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import todoApp from '_redux/reducers'

import { Link } from 'react-router-dom';

require('_src/index.scss');

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
 	 middleware.push(createLogger());
}
const store = createStore(
  	todoApp,
  	applyMiddleware(...middleware)
)
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