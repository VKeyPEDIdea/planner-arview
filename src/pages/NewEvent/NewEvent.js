import classes from './NewEvent.module.sass';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/index';
import { useState } from 'react';
import { getRandomEventId } from '../../utilities/getRandomEventId';
import { Link, withRouter } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import InputText from '../../components/UI/InputText/InputText';
import InpuSelect from '../../components/UI/InputSelect/InputSelect';
import InputTime from '../../components/UI/InputTime/InputTime';

const NewEvent = props => {
	const {
		createEvent,
		history,
		date
	} = props;

	const [ title, setTitle ] = useState('');
	const [ type, setType ] = useState('1');
	const [ place, setPlace ] = useState('');
	const [ time, setTime ] = useState('');
	const [ cost, setCost ] = useState('');
	const [ notes, setNotes ] = useState('');

	const onSaveHandler = e => {
		e.preventDefault();
		createEvent({
			date,
			id: getRandomEventId(),
			title,
			type,
			address: place,
			time,
			budget: cost,
			notes
		});
		history.push('/');
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
	};

	let fields;
	if (type === '1') fields = (
		<InputText
			label='Сколько денег будет потрачено'
			change={event => costChangeHandler(event)}
			value={cost}/>
	);

	if (type === '2') fields = (
		<>
			<InputText
				label='Куда идти?'
				change={event => placeChangeHandler(event)}
				value={place}/>
			<InputTime
				label='Во сколько?'
				change={event => timeChangeHandler(event)}
				value={time} />
		</>
	);

	if (type === '3') {
		fields = (
			<InputText
				label='Пометки / Другое'
				change={event => notesChangeHandler(event)}
				value={notes}/>
		);
	}

	return(
		<>
			<h1>Новое событие</h1>
			<form>
				<InputText
						label='Название события'
						change={event => titleChangeHandler(event)}
						value={title}/>
				<InpuSelect
					label='Тип события'
					change={event => typeChangeHandler(event)}
					optionList={[
						{title: 'Праздник', value: '1'},
						{title: 'Мероприятие', value: '2'},
						{title: 'Пометка', value: '3'},
					]}
					value={type}
					name='eventType'/>
				{fields}
				<div className={classes.actions}>
					<Button type='success' title='Сохранить' click={e => onSaveHandler(e)} />
					<Link to='/' style={{textDecoration: 'none'}}>
						<Button title='Отмена'/>
					</Link>
				</div>
			</form>
		</>
	);
};

const mapStateToProps = state => {
	return {
		date: state.events.currentDate,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createEvent: newEvent => dispatch(actions.addNewEvent(newEvent)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewEvent));