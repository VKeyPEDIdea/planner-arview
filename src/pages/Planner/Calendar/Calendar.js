import classes from './Calendar.module.sass';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/UI/Button/Button';
import {
	setCurrentDate,
	selectCurrentDate
} from '../dateSlice';

const Calendar = props => {
	const currentDate = useSelector(selectCurrentDate);
	const [ choisedDate, setChoisedDate ] = useState(currentDate);
	const dispatch = useDispatch();

	const dateChangeHandler = e => {
		const date = e.target.value;
		dispatch(setCurrentDate(date));
		setChoisedDate(date);
	};

	return(
		<div>
			<div className={classes['input-date']} value={choisedDate}>
				<label>
				<p className={classes.label}>Текущая дата</p>
					<input type='date' value={choisedDate} onChange={e => dateChangeHandler(e)}/>
				</label>
			</div>
			<Link to='/createEvent' style={{textDecoration: 'none'}}>
				<Button type='primary' title='Добавить событие' />
			</Link>
		</div>
	);
};

export default Calendar;