import React, { Component } from 'react';

export class App extends Component {
	state = {
		location: ''
	};

	handleChange = (e) => {
		this.setState({ location: e.target.value });
	};
	render() {
        function initAutocomplete() {
			var input = document.getElementById('pac-input');
			var searchBox = new window.google.maps.places.SearchBox(input);
		}
		initAutocomplete();
		return (
			<input
				defaultValue={this.state.location}
				onChange={this.handleChange}
				id="pac-input"
				className="controls"
				type="text"
				placeholder="Search your College"
			/>
		);
	}
}

export default App;
