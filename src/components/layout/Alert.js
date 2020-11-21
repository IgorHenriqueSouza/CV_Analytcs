import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;
	if (alert)
		return (
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-exclamation-triangle'></i> {alert.msg}
			</div>
		);
	else return null;
};

export default Alert;
