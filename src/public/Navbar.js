import React, { Component } from 'react';
import './styles/navbar.css';
import { Link } from 'react-router-dom';

class navbar extends Component {
	render() {
		const navslide = () => {
			const burger = document.querySelector('.burger');
			const nav = document.querySelector('.nav-links');
			const navLinks = document.querySelectorAll('.nav-links li');
			nav.classList.toggle('nav-active');

			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = '';
				} else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
				}
			});

			burger.classList.toggle('toggle');
		};

		return (
			<div>
				<nav>
					<div className="logo">
						<h3>College Facemash</h3>
					</div>
					<ul className="nav-links">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/login">Login / Signup</Link>
						</li>
					</ul>
					<div className="burger" onClick={navslide}>
						<div className="line1" />
						<div className="line2" />
						<div className="line3" />
					</div>
				</nav>
			</div>
		);
	}
}

export default navbar;
