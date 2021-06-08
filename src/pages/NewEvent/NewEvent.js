import classes from './NewEvent.module.sass';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/index';
import { useState } from 'react';
import { getRandomEventId } from '../../utilities/getRandomEventId';
import { Link, withRouter } from 'react-router-dom';

const NewEvent = props => {
	const {
		createEvent,
	} = props;

	const [ title, setTitle ] = useState('');
	const [ type, setType ] = useState(1);
	const [ place, setPlace ] = useState('');
	const [ time, setTime ] = useState('');
	const [ cost, setCost ] = useState('');
	const [ notes, setNotes ] = useState('');

	const onSaveHandler = e => {
		e.preventDefault();
		createEvent({
			eventId: getRandomEventId(),
			title,
			type,
			address: place,
			time,
		});
	};

	const titleChangeHandler = event => {
		setTitle(event.target.value);
	};

	const typeChangeHandler = event => {
		setType(event.target.value);
	};

	const placeChangeHandler = event => {
		setPlace(event.target.value);
	};

	const timeChangeHandler = event => {
		setTime(event.target.value);
	};

	const costChangeHandler = event => {
		setCost(event.target.value);
	};

	const notesChangeHandler = event => {
		setNotes(event.target.value);
	}

	let fields;
	if (type === '1') fields = (
		<>
			<label className={classes.input}>
				<p className={classes.label}>Сколько денег будет потрачено</p>
				<input
					onChange={event => costChangeHandler(event)}
					value={cost}
					type='text'/>
			</label>
		</>
	);

	if (type === '2') fields = (
		<>
			<label className={classes.input}>
				<p className={classes.label}>Куда идти?</p>
				<input
					onChange={event => placeChangeHandler(event)}
					value={place}
					type='text'/>
			</label>
			<label className={classes.input}>
				<p className={classes.label}>Во сколько?</p>
				<input
					onChange={event => timeChangeHandler(event)}
					value={time}
					type='time' />
			</label>
		</>
	);

	if (type === '3') {
		fields = (
			<label className={classes.input}>
				<p className={classes.label}>Пометки / Другое</p>
				<input
					onChange={event => notesChangeHandler(event)}
					value={notes}
					type='textarea'/>
			</label>
		);
	}

	return(
		<>
			<h1>Новое событие</h1>
			<form>
				<label className={classes.input}>
					<p className={classes.label}>Название события</p>
					<input
						value={title}
						onChange={event => titleChangeHandler(event)}
						type='text'/>
				</label>
				<label className={classes.input}>
					<p className={classes.label}>Тип события</p>
					<select
						value={type}
						onChange={event => typeChangeHandler(event)}
						name='eventType'>
						<option value='1'>Праздник</option>
						<option value='2'>Мероприятие</option>
						<option value='3'>Пометка</option>
					</select>
				</label>
				{fields}
				<button onClick={onSaveHandler}>Сохранить</button>
				<Link to='/' style={{textDecoration: 'none'}}>
					<button>Отмена</button>
				</Link>
			</form>
		</>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		createEvent: newEvent => dispatch(actions.addNewEvent(newEvent)),
	};
};

export default connect(null, mapDispatchToProps)(withRouter(NewEvent));