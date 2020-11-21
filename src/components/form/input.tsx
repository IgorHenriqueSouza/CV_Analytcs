import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

const Input = ({ label, name, ...rest }) => {
	if (rest.mask)
		return (
			<div className='input-block'>
				<label htmlFor={name}>{label}</label>
				<MaskedInput id={name} {...rest} />
			</div>
		);
	else if (rest.options) {
		return (
			<div className='input-block'>
				<label htmlFor={name}>{label}</label>
				<select id={name} {...rest}>
					<option value=''></option>
					{rest.options.map(opt => (
						<option value={opt.value}>{opt.label ?? opt.value}</option>
					))}
				</select>
			</div>
		);
	} else
		return (
			<div className='input-block'>
				<label htmlFor={name}>{label}</label>
				<input id={name} {...rest} />
			</div>
		);
};

Input.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default Input;
