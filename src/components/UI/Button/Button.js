import classes from './Button.module.sass';
import React from 'react';

const Button = props => {
	const {
		title,
		click
	} = props;

	return(
		<button className={classes.button} onClick={click}>{title}</button>
	);
}

export default Button;