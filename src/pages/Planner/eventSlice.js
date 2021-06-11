import { createSlice } from '@reduxjs/toolkit';
import { storage } from '../../services/storage';

export const eventSlice = createSlice({
	name: 'events',
	initialState: {
		list: [],
		error: false, 
		loading: false,
	},
	reducers: {
		initLoadingEvents: state => {
			state.loading = true;
		},
		loadEventsSuccess: (state, action) => {
			state.list = action.payload;
			state.loading = false;
		},
		loadEventsError: (state, action) => {
			state.error = action.payload.error;
			state.load = false;
		},
		addNew: (state, action) => {
			state.list = state.list.concat(action.payload.event);
		},
		remove: (state, action) => {
			state.list = state.list.filter(event => {
				return event.id !== action.payload.id
			});
		},
		edit: (state, action) => {
			state.list = state.list
				.filter(event => event.id !== action.payload.event.id)
				.concat(action.payload.event);
		},
	},
});

export const {
	addNew,
	remove,
	edit,
	initLoadingEvents,
	loadEventsSuccess,
	loadEventsError,
} = eventSlice.actions;

export const selectEventList = state => state.events.list;
export const selectGetEventsByDate = state => {
	console.log(state);
	return state.events.list.filter(event => {
		return event.date;
	})
};

export const getEventsList = () => dispatch => {
	dispatch(initLoadingEvents());
	const list = storage('events');
	dispatch(loadEventsSuccess(list));
};

export default eventSlice.reducer;