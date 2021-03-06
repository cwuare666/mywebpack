import React, { Suspense, Component } from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

require('./style.scss')

//import Homes from 'pages/Home';
//import About from '../pages/About';

//const Home = React.lazy(() => import('../pages/Home'));
//const About = React.lazy(() => import('../pages/About'));

const routers = [
	{
		path: '/home',
		component: React.lazy(() => import(`_pages/Home`))
	},{
		path: '/about',
		component: React.lazy(() => import(`_pages/About`))
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
				              	render={() => <Redirect to="/home" />}
				            />
				            <ul>
				    			<li>
				    				<Link to="/home">首页</Link>
				    			</li>
				    			<li>
				    				<Link to="/about">关于</Link>
				    			</li>
				    		</ul>
				    		<div>
								<TransitionGroup>
									<CSSTransition
										key={location.key}
										classNames="fade"
										timeout={300}
									>
										<Suspense fallback={<div>Loading...</div>}>
											<Switch location={location}>
												{
													routers.map((item, index) => {
														return (
															<Route key={`router${index}`} exact path={item.path} component={item.component} />
														)
													})
												}
												{/*<Route exact path="/home" component={Home} />
												<Route path="/about" component={About} />*/}
											</Switch>
										</Suspense>
									</CSSTransition>
								</TransitionGroup>
							</div>
						</div>
					)}
				>

				</Route>
			</BrowserRouter>
		)
	}
}

export default AnimationRouter;