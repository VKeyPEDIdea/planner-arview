import classes from './ButtonIcon.module.sass';
import React from 'react';

const ButtonIcon = props => {
	const {
		title,
		click
	} = props;

	return(
		<div className={classes.button} onClick={click}>
			<i className='material-icons'>{title}</i>
		</div>
	);
}

export default ButtonIcon;