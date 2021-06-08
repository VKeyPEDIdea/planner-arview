import classes from './EditEvent.module.sass';
import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/';

const EditEvent = props => {
	const { createEvent } = props;
	const [ title, setTitle ] = useState('');
	const [ type, setType ] = useState('1');
	const [ place, setPlace ] = useState('');
	const [ time, setTime ] = useState('');

	const onSaveHandler = e => {
		e.preventDefault();
		createEvent({
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
	return(
		<>
			<h1>Редактирование события</h1>
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
				<Link to='/createEvent' style={{textDecoration: 'none'}}>
					<Button title='Сохранить' onClick={onSaveHandler}/>
				</Link>
				<Link to='/' style={{textDecoration: 'none'}}>
					<Button title='Отмена'/>
				</Link>
			</form>
		</>
	);
};

const mapStateToProps = state => {
	return {

	};
};

const mapDispatchToProps = dispatch => {
	return {
		editEvent: event => dispatch(actions.editEvent(event))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);