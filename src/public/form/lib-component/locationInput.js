import React, { Component } from 'react';
import './styles/locationInput.css';

export class locationInput extends Component {
	render() {
		const { values, CollegeNameHandler } = this.props;
		return (
			<input
				defaultValue={values.CollegeName}
				onChange={CollegeNameHandler}
				id="pac-input"
				className="controls"
				type="text"
				placeholder="Search your College"
			/>
		);
	}
}

export default locationInput;
