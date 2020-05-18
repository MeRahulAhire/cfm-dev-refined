import React, { Component } from 'react';
import Navbar from './Navbar';
import './styles/index.css';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
export class index extends Component {
	render() {
		return (
			<div>
                <Helmet>
                    <title>College Facemash - Home</title>
                    <link rel="canonical" href="https://collegefacemash.com/"/>
					<meta name="theme-color" content="#512da8"/>
                 </Helmet>
				<Navbar />
				<section className="head">
					<div className="head-image-container">
						<div className="content">
							<h1>Welcome to College Facemash</h1>
							<p>inspired from the movie social network</p>
						</div>
					</div>
				</section>
				<section className="middle">
					<div className="middle-image-container">
						<div className="bg-adjust">
							<div className="content">
								<h1>A site for every College Student</h1>
								<p>
									A new personal and private social networking site for every college and its student
								</p>
								<Link to="/about">
									<button className="index-to-about">Know More</button>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="bottom">
					<div className="bottom-image-container">
						<div className="content">
							<h1>Poke, Rate, Comment! </h1>
							<p>
								Connect with your friends with an eve teasing manner like never before on every
								college's own private social network
							</p>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default index;
