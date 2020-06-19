import React, { Component } from 'react';
import Navbar from './Navbar';
import './styles/index.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export class index extends Component {
	render() {
		return (
			<div>
				<Helmet>					
					<meta charset="utf-8" />
                    <title>College Facemash</title>
					<meta name="theme-color" content="#512da8"/>
					<link rel="canonical" href="https://collegefacemash.com/"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
					<meta name="description" content="Collge Facemash - every college's own and private site for getting connected fun and eve teasing manner like never before"/>
					<meta name="title" content="College Facemash" />

					<meta property="og:image" content="https://i.ibb.co/KXRQJc3/icon-512x512.png" />
					<meta property="og:title" content="College Facemash"/>
					<meta property="og:description" content="Collge Facemash - every college's own and private site for getting connected fun and eve teasing manner like never before"/>
					<meta property="og:url" content="https://test.collegefacemash.com"/>
					<meta property="og:site_name" content="College Facemash"/>

					<meta name="twitter:title" content="College Facemash"/>
					<meta name="twitter:description" content="Collge Facemash - every college's own and private site for getting connected fun and eve teasing manner like never before"/>
					<meta name="twitter:image" content="https://i.ibb.co/KXRQJc3/icon-512x512.png"/>
					<meta name="twitter:card" content="College_Facemash_home"/>
					<meta name="twitter:image:alt" content="College Facemash Logo - Alt"/>
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
