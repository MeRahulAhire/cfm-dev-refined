import React, { Component } from 'react';
import './styles/locationInput.css';

export class locationInput extends Component {
	render() {
		const { values, CollegeNameHandler } = this.props;

		function initAutocomplete() {
			var input = document.getElementById('pac-input');
			var searchBox = new window.google.maps.places.SearchBox(input);
		}
		initAutocomplete();
		return (
			<input
				value={values.CollegeName}
				onInput={CollegeNameHandler}
				id="pac-input"
				className="controls"
				type="text"
				placeholder="Search your College"
			/>
		);
	}
}

export default locationInput;
