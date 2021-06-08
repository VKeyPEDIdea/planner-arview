import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';

const Calendar = props => {
	return(
		<div>
			<Link to='/createEvent' style={{textDecoration: 'none'}}>
				<Button title='Добавить событие' />
			</Link>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		events: state.events.list
	};
};

export default connect(mapStateToProps)(Calendar);