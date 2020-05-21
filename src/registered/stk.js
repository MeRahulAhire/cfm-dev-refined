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
// =============================================

import React, { Component } from 'react'
import Location from './Location'
export class Parent extends Component {
	
	state={
		step:1,
		location:''
	}
	locationHandler = () => {
		this.setState({location: this.state.address})
	}
	render() {
		const { step } = this.state;
		const { location} = this.state;
		const values = {location}
		switch(step){
			case 1:
				return (
			
					<Location
					locationHandler={this.locationHandler}
					value={value}
					/>
				
			)
			case 2:
				return(
					// other component..
				)
		}
	}
}

export default Parent

import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';

export class Location extends Component {
	constructor(props) {
		super(props);
		state = { address: '' };
	}

	handleChange = (address) => {
		this.setState({ address });
	};
	render() {
		const { values, locationHandler } = this.props;   //<------Here----
		locationHandler()                                 //<------Here----
		return (
			<div>
			<PlacesAutocomplete
			value={this.state.address}
			onChange={this.handleChange}
			shouldFetchSuggestions={this.state.address.length > 2}
			>
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				<div >
					<input
						{...getInputProps({
							placeholder: 'Search Your College',
							className: 'typo'
						})}
					/>
					<div className="autocomplete-dropdown-container">
						{loading && <div />}
						{suggestions.map((suggestion) => {
							// const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
							const style = suggestion.active
								? { backgroundColor: '#42a5f5', cursor: 'pointer' }
								: { backgroundColor: '#ffffff', cursor: 'pointer' };
							return (
								<div
									className="suggestion"
									{...getSuggestionItemProps(suggestion, {
										style
									})}
								>
									<i className="loc_marker material-icons">location_on</i>
									<div className="loc_span">
										<span className="suggestion_dropdown">{suggestion.description}</span>
									</div>
									<div className="loc_continue">...</div>
								</div>
							);
						})}
					</div>
				</div>
				)}
			</PlacesAutocomplete>	
			</div>
		)
	}
}

export default Location
