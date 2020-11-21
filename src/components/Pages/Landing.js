import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../layout/Background';

export const Landing = () => {
	return (
		<div>
			<div class='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-grey'>
				<div class='col-md-5 p-lg-5 mx-auto my-5'>
					<h1 class='display-4 font-weight-normal text-light'>CV Analytics</h1>
					<p class='lead font-weight-normal text-light'>
						Seu sistema de auxilio para processos de recrutamento.
					</p>
				</div>

				<div class='d-md-flex flex-md-equal w-100 align-items-end'>
					<div class='bg-grey text-center text-white overflow-hidden mx-auto '>
						<Link to='/login/candidato' className='btn btn-primary mr-5 btn-lg'>
							Acessar Plataforma
						</Link>
					</div>
				</div>
			</div>
			<Background type='full' />
		</div>
	);
};

export default Landing;
