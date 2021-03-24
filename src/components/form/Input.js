import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

const Input = ({ label, name, hideFirst = false, ...rest }) => {
	if (rest.mask)
		return (
			<div className='form-group'>
				<label htmlFor={name}>{label}</label>
				<MaskedInput id={name} name={name} className='form-control' {...rest} />
			</div>
		);
	else if (rest.options) {
		return (
			<div className='form-group'>
				<label htmlFor={name}>{label}</label>
				<select className='form-control' id={name} name={name} {...rest}>
					{hideFirst === true ? null : <option value=''></option>}
					{rest.options.map(opt => (
						<option value={opt.value}>{opt.label ?? opt.value}</option>
					))}
				</select>
			</div>
		);
	} else
		return (
			<div className='form-group'>
				<label htmlFor={name}>{label}</label>
				<input id={name} name={name} className='form-control' {...rest} />
			</div>
		);
};

Input.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default Input;
