import classes from './InputTime.module.sass';
import React from 'react';

const InputTime = props => {
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
				type='time'/>
		</label>
	);
}

export default InputTime;