import React, { useState } from 'react';
import './index.css';
import { login } from '../../service/api/login';

const Login = ({ setLogin }) => {
	const [id, setId] = useState('');
	const [token, setToken] = useState('');
	const handleSubmit = async (e) => {
		localStorage.setItem('id', id);
		localStorage.setItem('token', token);
		e.preventDefault();
		login(id, token)
		setLogin(true);
	};
	return (
		<div className='login'>
			<div className='login__wrapper'>
				<form onSubmit={(e) => handleSubmit(e)} className='login-form'>
					<h2>Login</h2>
					<div className='form-group'>
						<label htmlFor='username'>IdInstance</label>
						<input
							type='text'
							id='username'
							value={id}
							onChange={(e) => setId(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>ApiTokenInstance</label>
						<input
							type='password'
							id='password'
							value={token}
							onChange={(e) => setToken(e.target.value)}
						/>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
