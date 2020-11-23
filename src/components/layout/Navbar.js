import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from '../../context/application/applicationContext';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
	const applicationContext = useContext(ApplicationContext);
	const { token, user, logout } = applicationContext;

	if (!token)
		return (
			<div class='container navbarcont'>
				<nav class='navbar navbar-expand-lg navbar-dark bg-black'>
					<a class='navbar-brand' href='#'>
						<h1 class='display-4'>{title}</h1>
					</a>
				</nav>
			</div>
		);
	else if (token && user && user.type === 'recrutador')
		return (
			<div class='container navbarcont'>
				<nav className='navbar navbar-expand-lg navbar-dark bg-black'>
					<a class='navbar-brand' href='#'>
						<h1 class='display-4'>{title}</h1>
					</a>

					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse ' id='navbarNav'>
						<ul class='navbar-nav ml-auto'>
							<li class='nav-item active pb-0'>
								<Link to='/perfil' className='nav-link'>
									Meu Perfil <span class='sr-only'>(current)</span>
								</Link>
							</li>
							<li class='nav-item'>
								<Link to='/painel' className='nav-link'>
									Painel do Recrutador <span class='sr-only'>(current)</span>
								</Link>
							</li>
							<li class='nav-item'>
								<Link onClick={logout} className='nav-link'>
									Sair <span class='sr-only'>(current)</span>
									<i class='fas fa-arrow-right'></i>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	else if (token && user && user.type === 'candidato') {
		return (
			<div class='container navbarcont'>
				<nav className='navbar navbar-expand-lg navbar-dark bg-black'>
					<a class='navbar-brand' href='#'>
						<h1 class='display-4'>{title}</h1>
					</a>

					<button
						class='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse ' id='navbarNav'>
						<ul class='navbar-nav ml-auto'>
							<li class='nav-item active pb-0'>
								<Link to='/perfil' className='nav-link'>
									Meu Perfil <span class='sr-only'>(current)</span>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
};

Navbar.defaultProps = {
	title: 'CV Analytics',
	showOptions: false,
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	showOptions: PropTypes.bool.isRequired,
};

export default Navbar;
