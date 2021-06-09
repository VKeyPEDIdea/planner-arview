import classes from './InputText.module.sass';
import React from 'react';

const InputText = props => {
	const {
		change,
		value,
		label
	} = props;
	return(
		<label className={classes.field}>
			<p className={classes.label}>{label}</p>
			<input
				className={classes.input}
				onChange={change}
				value={value}
				type='text'/>
		</label>
	);
}

export default InputText;