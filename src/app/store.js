import { configureStore } from '@reduxjs/toolkit';
import eventSlice from '../pages/Planner/eventSlice';

export default configureStore({
	reducer: {
		events: eventSlice,
	}
});