import classes from './EditEvent.module.sass';
import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import * as actions from '../../store/';
import InputText from '../../components/UI/InputText/InputText';
import InputTime from '../../components/UI/InputTime/InputTime';
import InpuSelect from '../../components/UI/InputSelect/InputSelect';

const EditEvent = props => {
	const {
		editEvent,
		location,
		history,
		events,
		date
	} = props;

	const {
		id,
		title: name,
		type: variant,
		place: address,
		time: clock,
		budget,
		notes: otherText
	 } = events.find(item => {
		return item.id === location.search.slice(1);
	});
	const [ title, setTitle ] = useState(name);
	const [ type, setType ] = useState(variant);
	const [ place, setPlace ] = useState(address);
	const [ time, setTime ] = useState(clock);
	const [ cost, setCost ] = useState(budget);
	const [ notes, setNotes ] = useState(otherText);

	const onSaveHandler = e => {
		e.preventDefault();
		editEvent({
			date,
			id,
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
			<h1>Редактирование события</h1>
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
					<Button type='success' title='Сохранить' click={e => onSaveHandler(e)}/>
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
		events: state.events.list,
		date: state.events.currentDate
	};
};

const mapDispatchToProps = dispatch => {
	return {
		editEvent: event => dispatch(actions.editEvent(event))
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditEvent));