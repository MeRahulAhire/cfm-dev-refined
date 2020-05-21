// import React, { Component } from 'react';
// import './styles/locationInput.css';

// export class locationInput extends Component {
// 	render() {
// 		const { values, CollegeNameHandler } = this.props;

// 		function initAutocomplete() {
// 			var input = document.getElementById('pac-input');
// 			var searchBox = new window.google.maps.places.SearchBox(input);
// 		}
// 		initAutocomplete();

// 		return (
// 			<input
// 				value={values.CollegeName}
// 				onChange={CollegeNameHandler}
// 				id="pac-input"
// 				className="controls"
// 				type="text"
// 				placeholder="Search your College"
// 			/>
// 		);
// 	}
// }

// export default locationInput;

import React, { Component } from 'react';
import './styles/locationInput.css';
import PlacesAutocomplete from 'react-places-autocomplete';

export class locationInput extends Component {
	// constructor(props) {
	// super(props);
	state = { address: '', addressCopy: '' };
	// }

	handleChange = (address) => {
		this.setState({ address });
	};

	addressCopyHandler = () => {
		// this.setState({addressCopy: this.state.address});
		this.props.CollegeNameHandler()
	}
	render() {
		const { values, CollegeNameHandler } = this.props;
		// CollegeNameHandler()
		// this.addressCopyHandler();

		console.log(values.CollegeName);
		// CollegeNameHandler()
		return (
			<div>
				<PlacesAutocomplete
					value={this.state.address}
					onChange={this.handleChange}
					shouldFetchSuggestions={this.state.address.length > 3}
				>
					{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
						<div>
							<input onChange={this.addressCopyHandler}
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
		);
	}
}

export default locationInput;
