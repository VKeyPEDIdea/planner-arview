import { storage } from '../../services/storage';
import * as actionTypes from './actionTypes';

const initialState = {
	list: storage('events') || [],
	currentDate: null,
	error: false, 
	loading: false,
};

const reducer = (state = initialState, action) => {
	const updatedState = { ...state };
	let updatedList;
	switch(action.type) {
		case actionTypes.ADD_NEW_EVENT:
			updatedList = updatedState.list.concat(action.payload.event);
			storage('events', updatedList)
			return { ...updatedState, list: updatedList };
		case actionTypes.DELETE_EVENT:
			updatedList = updatedState.list.filter(event => {
				return event.id !== action.payload.id
			});
			storage('events', updatedList);
			return { ...updatedState, list: updatedList };
		case actionTypes.EDIT_EVENT:
			updatedList = updatedState.list
				.filter(event => event.id !== action.payload.event.id)
				.concat(action.payload.event);
			storage('events', updatedList);
			return { ...updatedState,	list: updatedList	};
		case actionTypes.SET_DATE:
			return { ...updatedState, currentDate: action.payload.date};
		default:
			return state;
	}
};

export default reducer;