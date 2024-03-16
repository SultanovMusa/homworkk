import scss from './Login.module.scss';
import { useState } from 'react';
import { useLoginMutation } from '@/src/redux/api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [loginMutation] = useLoginMutation();

	const loginPost = async () => {
		const response = await loginMutation({
			email,
			password
		});
		if ('data' in response) {
			localStorage.setItem('auth_token', response.data.token);
			navigate('/');
		} else {
			console.error('Login failed:', response.error);
		}
	};

	return (
		<section className={scss.Login}>
			<div className="container">
				<div className={scss.content}>
					<h1>Login</h1>
					<input
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={loginPost}>Sing In</button>
				</div>
			</div>
		</section>
	);
};

export default Login;
