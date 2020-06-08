import React, { Component } from 'react';
import './styles/locationInput.css';

export class locationInput extends Component {
	render() {
		const { values, CollegeNameHandler } = this.props;
		return (
			<div >
				<div id="college-format">select proper address from dropdown suggestion</div>
				<input
					defaultValue={values.CollegeName}
					onChange={CollegeNameHandler}
					id="pac-input"
					className="controls"
					type="text"
					placeholder="Search your College"
				/>
			</div>
		);
	}
}

export default locationInput;
