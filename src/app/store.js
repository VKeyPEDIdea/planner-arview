import { configureStore } from '@reduxjs/toolkit';
import dateSlice from '../pages/Planner/dateSlice';
import eventSlice from '../pages/Planner/eventSlice';

export default configureStore({
	reducer: {
		events: eventSlice,
		currentDare: dateSlice,
	}
});