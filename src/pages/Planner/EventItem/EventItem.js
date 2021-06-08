import classes from './EventItem.module.sass';
import React from 'react';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon';
import { Link } from 'react-router-dom';

const EventItem = props => {
	const {
		title,
		budget,
		address,
		time,
		notes,
		onDelete,
		onEdit
	} = props;

	return(
		<div className={classes['event-item']}>
			<div className={classes.header}>
				<p className={classes.title}>{title}</p>
				<div className={classes.actions}>
					<ButtonIcon title='delete' click={onDelete} />
					<Link to='/editEvent/'>
						<ButtonIcon title='edit' click={onEdit} />
					</Link>
				</div>
			</div>
			{budget ? <p>Бюджет: {budget} руб</p> : null}
			{address ? <p>Адрес: {address}</p>: null}
			{time ? <p>Время: {time}</p> : null}
			{notes ? <p>Заметки: {notes}</p> : null}
		</div>
	);
}

export default EventItem;