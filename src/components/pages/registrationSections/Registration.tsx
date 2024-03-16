import scss from './Registration.module.scss';
import { useState } from 'react';
import { useRegistrationMutation } from '@/src/redux/api/auth';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userName, setUserName] = useState('');
	const navigate = useNavigate();
	const [registrationMutation] = useRegistrationMutation();

	const registrationPost = async () => {
		await registrationMutation({
			email,
			password,
			userName
		});
		navigate('/login');
	};

	return (
		<section className={scss.Registration}>
			<div className="container">
				<div className={scss.content}>
					<h1>Registration</h1>
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
					<input
						type="text"
						placeholder="userName"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					/>
					<button onClick={registrationPost}>Sing Up</button>
				</div>
			</div>
		</section>
	);
};

export default Registration;
