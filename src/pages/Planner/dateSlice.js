import { createSlice } from '@reduxjs/toolkit';

export const dateSlice = createSlice({
	name: 'dates',
	initialState: {
		currentDate: null,
	},
	reducers: {
		setCurrentDate: (state, action) => {
			state.currentDate = action.payload.date;
		},
	}
});

export const { setCurrentDate } = dateSlice.actions;

export default dateSlice.reducer;