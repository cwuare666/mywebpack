import React, { Suspense, Component } from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

require('./style.scss')

const routers = [
	{
		path: '/home',
		component: React.lazy(() => import(`_pages/Home`))
	},{
		path: '/login',
		component: React.lazy(() => import(`_pages/Login`))
	}
]

import { 
	BrowserRouter,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom';
class AnimationRouter extends Component{
	render(){
		return(
			<BrowserRouter>
				<Route
					render={({ location }) => (
						<div>
							<Route
				              	exact
				              	path="/"
				              	render={() => <Redirect to="/login" />}
				            />
				    		<TransitionGroup>
								<CSSTransition
									key={location.key}
									classNames="fade"
									timeout={300}
								>
									<Suspense fallback={<div>Loading...</div>}>
										<Switch location={location}>
											{/*{
												routers.map((item, index) => {
													return (
														<Route key={`router${index}`} path={item.path} component={item.component} />
													)
												})
											}*/}
											<Route exact path='/login' component={React.lazy(() => import(`_pages/Login`))} />
											<Route path='/home' component={React.lazy(() => import(`_pages/Home`))} />
										</Switch>
									</Suspense>
								</CSSTransition>
							</TransitionGroup>
						</div>
					)}
				>

				</Route>
			</BrowserRouter>
		)
	}
}

export default AnimationRouter;