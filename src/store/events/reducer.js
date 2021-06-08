import { storage } from '../../services/storage';
import * as actionTypes from './actionTypes';

const initialState = {
	list: storage('events') || [],
	error: false, 
	loading: false,
};

const reducer = (state = initialState, action) => {
	const updatedState = { ...state };
	switch(action.type) {
		case actionTypes.ADD_NEW_EVENT:
			const updatedList = updatedState.list.concat(action.payload.event);
			storage('events', updatedList)
			return { ...updatedState, list: updatedList };
		case actionTypes.DELETE_EVENT:

		default:
			return state;
	}
};

export default reducer;