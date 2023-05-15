import React, { useState } from 'react';
import './index.css'

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
   const handleSubmit = () => {
      localStorage.setItem('key', username)
   }
	return (
		<div className='login'>
			<div className='login__wrapper'>
				<form onSubmit={handleSubmit} className='login-form'>
					<h2>Login</h2>
					<div className='form-group'>
						<label htmlFor='username'>IdInstance</label>
						<input
							type='text'
							id='username'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>ApiTokenInstance</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
