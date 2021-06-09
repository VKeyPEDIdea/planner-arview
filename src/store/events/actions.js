import * as actionTypes from './actionTypes';

export const addNewEvent = event => {
	return {
		type: actionTypes.ADD_NEW_EVENT,
		payload: {
			event,
		}
	};
};

export const deleteEvent = id => {
	return {
		type: actionTypes.DELETE_EVENT,
		payload: {
			id,
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

export const setDate = date => {
	return {
		type: actionTypes.SET_DATE,
		payload: {
			date,
		}
	};
};