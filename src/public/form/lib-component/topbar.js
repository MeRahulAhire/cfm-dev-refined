import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './styles/topbar.css';
export class topbar extends Component {
	render() {
		return (
			<>
				<Helmet>
					<meta name="theme-color" content="#000" />
					<title>College Facemash - Signup</title>
					<link rel="canonical" href="https://collegefacemash.com/" />
					<meta name="description" content="Signup to college Facemash" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link
						href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
						rel="stylesheet"
						integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
						crossorigin="anonymous"
					/>
				</Helmet>
				<div className="topbar">
					<h3>College Facemash</h3>
				</div>
			</>
		);
	}
}

export default topbar;
