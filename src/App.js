import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router';
import './App.css'

const App = () => {
	const [isAuth, setAuth] = useState(localStorage.getItem('key')) 
	return (
		<div className='App'>
			<div className='App__wrapper'>
				{isAuth ? (
					<Switch>
						{privateRoutes.map((route) => (
							<Route
								path={route.path}
								exact={route.exact}
								component={route.component}
								key={route.path}
							/>
						))}
						<Redirect to={'/'} />
					</Switch>
				) : (
					<Switch>
						{publicRoutes.map((route) => (
							<Route
								path={route.path}
								exact={route.exact}
								component={route.component}
								key={route.path}
							/>
						))}
						<Redirect to={'/login'} />
					</Switch>
				)}
			</div>
		</div>
	);
};

export default App;
