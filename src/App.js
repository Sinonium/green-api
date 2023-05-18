import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router';
import { getData } from './service/api/getNotifications';
import './App.css';

const App = () => {
	const [isAuth, setAuth] = useState(localStorage.getItem('id'));
	const [login, setLogin] = useState(false);
	const logout = () => {
		localStorage.clear('id');
		localStorage.clear('token');
	};

	useEffect(() => {
		async function FetchData() {
			const token = localStorage.getItem('token');
			const data = await getData(isAuth, token);
			if (data) {
				const chats = JSON.parse(localStorage.getItem('chat')) ?? [];
				if(data?.body?.senderData?.chatId?.split('@')[0]) {
					var phoneNumber = `+${
						data?.body?.senderData?.chatId?.split('@')[0]
					}`;
				}
				if (!chats?.includes(phoneNumber) && phoneNumber) {
					const newChat = [...chats, phoneNumber];
					localStorage.setItem('chat', JSON.stringify(newChat));
					setLogin()
				}
			}
		}
		FetchData();
	}, []);

	useEffect(() => {
		setAuth(localStorage.getItem('id'));
	}, [login]);

	return (
		<div className='App'>
			<div className='App__wrapper'>
				{isAuth ? (
					<Switch>
						{privateRoutes.map((route) => (
							<Route
								path={route.path}
								exact={route.exact}
								component={(props) => (
									<route.component
										{...props}
										logout={logout}
										setLogin={setLogin}
									/>
								)}
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
								component={(props) => (
									<route.component {...props} setLogin={setLogin} />
								)}
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
