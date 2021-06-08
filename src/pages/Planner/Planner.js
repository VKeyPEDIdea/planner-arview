import classes from './Planner.module.sass';
import React from 'react';
import EventList from './EventList/EventList';
import Calendar from './Calendar/Calendar';

const Planner = props => {
	return (
		<div className={classes['planner-container']}>
			<h1>Планировщик</h1>
			<div className={classes.layout}>
				<div className={classes.calendar}>
					<Calendar />
				</div>
				<div className={classes['event-list']}>
					<EventList />
				</div>
			</div>
		</div>
	);
};

export default Planner;