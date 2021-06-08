import * as actionTypes from './actionTypes';

export const getPlannerEvents = () => {
	return dispatch => {

	}
};

export const getEventSuccess = list => {
	return {
		type: actionTypes.GET_EVENTS_SUCCESS,
		payload: {
			list,
		}
	};
};

export const getEventFailed = error => {
	return {
		type: actionTypes.GET_EVENTS_FAILED,
		payload: {
			error,
		}
	};
};

export const addNewEvent = event => {
	return {
		type: actionTypes.ADD_NEW_EVENT,
		payload: {
			event,
		}
	};
};

export const deleteEvent = eventId => {
	return {
		type: actionTypes.DELETE_EVENT,
		payload: {
			eventId,
		}
	};
};

export const editEvent = event => {
	return {
		type: actionTypes.EDIT_EVENT,
		payload: {
			event,
		}
	};
};