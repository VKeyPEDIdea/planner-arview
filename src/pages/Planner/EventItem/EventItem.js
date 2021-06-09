import classes from './EventItem.module.sass';
import React from 'react';
import ButtonIcon from '../../../components/UI/ButtonIcon/ButtonIcon';
import { Link } from 'react-router-dom';

const EventItem = props => {
	const {
		id,
		title,
		budget,
		address,
		time,
		notes,
		onDelete,
	} = props;

	return(
		<div className={classes['event-item']}>
			<div className={classes.header}>
				<p className={classes.title}>{title}</p>
				<div className={classes.actions}>
					<ButtonIcon title='delete' click={onDelete} />
					<Link to={`/editEvent?${id}`}>
						<ButtonIcon title='edit' />
					</Link>
				</div>
			</div>
			{budget ? <p><span className={classes.label}>Бюджет:</span> {budget} руб</p> : null}
			{address ? <p><span className={classes.label}>Адрес:</span> {address}</p>: null}
			{time ? <p><span className={classes.label}>Время:</span> {time}</p> : null}
			{notes ? <p><span className={classes.label}>Заметки:</span> {notes}</p> : null}
		</div>
	);
}

export default EventItem;