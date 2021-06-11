import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
	name: 'events',
	initialState: {
		// list: storage('events') || [],
		// currentDate: null,
		list: [],
		error: false, 
		loading: false,
	},
	reducers: {
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

export const { addNew, remove, edit } = eventSlice.actions;

export default eventSlice.reducer;