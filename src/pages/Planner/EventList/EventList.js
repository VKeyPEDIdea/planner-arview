import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventItem from '../EventItem/EventItem';
import {
	getEventsList,
	selectEventList,
	selectGetEventsByDate,
	remove,
} from '../eventSlice';

import {
	selectCurrentDate
} from '../dateSlice';

const EventList = props => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getEventsList());
	}, [dispatch]);

	// const currentDate = useSelector(selectCurrentDate);
	const events = useSelector(selectEventList);
		// .filter(event => {
		// 	console.log(currentDate);
		// 	return event.date === currentDate;
		// });

	// const list = selectGetEventsByDate(currentDate)
	const list = events ? events.map(item => {
			return <EventItem
				key={item.id}
				id={item.id}
				title={item.title}
				budget={item.budget}
				address={item.address}
				time={item.time}
				notes={item.notes}
				onDelete={() => dispatch(remove(item.id))}/>
	}) : null;

	return(
		<div>
			{list ? list : <p>Событий на дату нет</p>}
		</div>
	);
};

export default EventList;