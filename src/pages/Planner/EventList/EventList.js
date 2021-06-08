import React from 'react';
import { connect } from 'react-redux';
import EventItem from '../EventItem/EventItem';
import * as actions from '../../../store/';

const EventList = props => {
	const {
		events,
		deleteEvent,
		editEvent,
	} = props;
	const list = events.map(item => {
		return <EventItem
			key={item.eventId}
			id={item.eventId}
			title={item.title}
			budget={item.budget}
			address={item.address}
			time={item.time}
			notes={item.notes}
			onDelete={eventId => deleteEvent(eventId)}
			onEdit={eventId => editEvent(eventId)} />
	});

	return(
		<div>
			{list}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		events: state.events.list
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteEvent: id => dispatch(actions.deleteEvent(id)),
		editEvent: id => dispatch(actions.editEvent(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);