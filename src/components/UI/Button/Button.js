import classes from './Button.module.sass';
import React from 'react';

const Button = props => {
	const {
		title,
	} = props;

	return(
		<div className={classes.button}>{title}</div>
	);
}

export default Button;