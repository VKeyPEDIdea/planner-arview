import classes from './Button.module.sass';
import React from 'react';

const Button = props => {
	const {
		title,
		click,
		type
	} = props;

	let styles;
	switch (type) {
		case 'success':
			styles = [classes.button, classes.success].join(' ');
			break;
		case 'primary':
			styles = [classes.button, classes.primary].join(' ');
			break;
		default:
			styles = [classes.button];
			break;
	}

	return(
		<button className={styles} onClick={click}>{title}</button>
	);
}

export default Button;