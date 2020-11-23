import React, { useContext } from 'react';
import ApplicationContext from '../../context/application/applicationContext';

const Background = ({ type }) => {
	const appContext = useContext(ApplicationContext);
	const { loading } = appContext;

	if (loading) {
		return (
			<div>
				<div className={`background-${type}`}></div>
				<div className={`overlay-dark absolute-center`}>
					<div class=' loader'></div>
				</div>
			</div>
		);
	}

	return <div className={`background-${type}`}></div>;
};

export default Background;
