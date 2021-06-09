import React from 'react';
import { connect } from 'react-redux';
import EventItem from '../EventItem/EventItem';
import * as actions from '../../../store/';

const EventList = props => {
	const {
		events,
		deleteEvent,
		currentDate
	} = props;
	const list = events
		.filter(event => event.date === currentDate)
		.map(item => {
			return <EventItem
				key={item.id}
				id={item.id}
				title={item.title}
				budget={item.budget}
				address={item.address}
				time={item.time}
				notes={item.notes}
				onDelete={() => deleteEvent(item.id)}/>
	});

	return(
		<div>
			{list.length > 0 ? list : <p>Событий на дату нет</p>}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		events: state.events.list,
		currentDate: state.events.currentDate,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteEvent: id => dispatch(actions.deleteEvent(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);