import classes from './Calendar.module.sass';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import * as actions from '../../../store/';

const Calendar = props => {
	const { currentDate, setDate } = props;
	const [ choisedDate, setChoisedDate ] = useState(currentDate);

	const dateChangeHandler = e => {
		setDate(e.target.value);
		setChoisedDate(e.target.value);
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

const mapStateToProps = state => {
	return {
		events: state.events.list,
		currentDate: state.events.currentDate,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setDate: date => dispatch(actions.setDate(date))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);