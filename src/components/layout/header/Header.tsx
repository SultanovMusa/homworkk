import scss from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const logout = async () => {
		localStorage.removeItem('auth_token');
		navigate('/login');
	};

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.logo}>
							<h1>Sultanov 👑</h1>
						</div>
						<nav className={scss.nav}>
							<ul>
								<li>
									<Link to={'/'}>Home</Link>
								</li>
							</ul>
						</nav>
						<div className={scss.auth_buttons}>
							{localStorage.getItem('auth_token') ? (
								<>
									<button onClick={logout}>Logout</button>
								</>
							) : (
								<>
									<button onClick={() => navigate('/login')}> 🔙 Login</button>
									<button onClick={() => navigate('/registration')}>
										🔙 Registration
									</button>
								</>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
