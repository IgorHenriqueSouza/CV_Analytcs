import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const GerenciadorListItem = ({
	label,
	description,
	location,
	id,
	type,
	...rest
}) => {
	let url = 'editarVaga/' + id;

	if (type == 'vaga')
		return (
			<div>
				<div className='courses-container'>
					<div className='course'>
						<div className='course-preview'>
							<h5>{label}</h5>
							<small className=''>{location}</small>
						</div>
						<div className='course-info'>
							<small>{description}</small>
							<Link to={url}>
								<button className='btn'>Editar</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	else return <div></div>;
	// 	return (
	// 		<div className='input-block'>
	// 			<label htmlFor={name}>{label}</label>
	// 			<input id={name} {...rest} />
	// 		</div>
	// 	);
};

export default GerenciadorListItem;
