import classes from './InpuSelect.module.sass';
import React from 'react';

const InpuSelect = props => {
	const {
		label,
		change,
		optionList,
		value,
		name
	} = props;

	const list = optionList.map(opt => {
		return <option value={opt.value}>{opt.title}</option>
	});

	return(
		<>
			<label className={classes.input}>
				<p className={classes.label}>{label}</p>
				<select
					value={value}
					onChange={change}
					name={name}>
						{list}
				</select>
			</label>
		</>
	);
}

export default InpuSelect;