import React, { Suspense, Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

require('./style.scss')

const routers = [
	{
		path: '/home/testfirst',
		component: React.lazy(() => import(`_pages/Test`))
	},
	{
		path: '/home/testsecond',
		component: React.lazy(() => import(`_pages/Test/TestSecond`))
	},
	{
		path: '/home/about',
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
class HomeRouterRouter extends Component{
	render(){
		return(
			<BrowserRouter>
				<Route
					render={({ location }) => (
						<div>
							<Route
				              	exact
				              	path="/home"
				              	render={() => <Redirect to="/home/about" />}
				            />
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

export default HomeRouterRouter;