import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './styles/about.css';
import {Helmet} from "react-helmet";
import vidmiddle from './assets/about-sec-2.webm';
import vidlast from './assets/about-sec-3.webm';

export class about extends Component {
	render() {
		return (
			<div>
				 <Helmet>
				   	<meta charset="utf-8" />
                    <title>College Facemash - About</title>
					<meta name="theme-color" content="#512da8"/>
					<link rel="canonical" href="https://collegefacemash.com/"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
					<meta name="description" content="Know more what College Facemash is all about..."/>
					<meta name="title" content="College Facemash - About" />

					<meta property="og:image" content="https://i.ibb.co/KXRQJc3/icon-512x512.png" />
					<meta property="og:title" content="College Facemash - About"/>
					<meta property="og:description" content="Know more what College Facemash is all about..."/>
					<meta property="og:url" content="https://test.collegefacemash.com"/>
					<meta property="og:site_name" content="College Facemash"/>

					<meta name="twitter:title" content="College Facemash - About"/>
					<meta name="twitter:description" content="Know more what College Facemash is all about..."/>
					<meta name="twitter:image" content="https://i.ibb.co/KXRQJc3/icon-512x512.png"/>
					<meta name="twitter:card" content="College_Facemash_about"/>
					<meta name="twitter:image:alt" content="College Facemash Logo - Alt"/>
                 </Helmet>
				<Navbar />
				<section className="about-top">
					<div className="about-top-image">
						<div className="content">
							<h1>Express Yourself</h1>
							<p>College facemash is all about expresssing the best you are</p>
						</div>
					</div>
				</section>
				<div className="about-middle vid-demo">
					<video src={vidmiddle} muted autoPlay loop className="vid-middle" />
					<div className="content-wrap">
					<div className="content">
						<h1>Vote for your favourite</h1>
						<p>To know more</p>
						<Link to="/login">
							<button className="index-to-about">Login / Signup</button>
						</Link>
					</div>
				</div>
					</div>
				<div className="about-last vid-demo">
					<video src={vidlast} muted autoPlay loop className="vid-last"/>
					<div className="content-wrap">
					<div className="content">
						<h1>Rate Who's<br/>
						H<svg id="Capa_1" data-name="Capa 1"
	     	viewBox="0 0 649.99 791.6"style={{width:'3rem', height:'3rem'}}>
		   <defs>
			   {/* <style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#Íîâûé_îáðàçåö_ãðàäèåíòà_7);}</style> */}
			   <linearGradient id="linear-gradient" x1="413.17" y1="752.83" x2="413.17" y2="4.2" gradientUnits="userSpaceOnUse">
				   <stop offset="0" stop-color="#ff4a00"/>
				   <stop offset="0.25" stop-color="#ff6d00"/>
				   <stop offset="0.76" stop-color="#ffae00"/>
				   <stop offset="0.99" stop-color="#ffc700"/>
			   </linearGradient>
			   <linearGradient id="Íîâûé_îáðàçåö_ãðàäèåíòà_7" x1="404.95" y1="795.8" x2="404.95" y2="313.32" gradientUnits="userSpaceOnUse">
				   <stop offset="0" stop-color="#ff8300"/>
				   <stop offset="1" stop-color="#ffec00"/>
			   </linearGradient>
		   </defs>
	   
		   <path style={{fill:'url(#linear-gradient)'}} class="cls-1" d="M271.15,752.83c-49.9-103.83-23.32-163.3,15-219.35,42-61.38,52.8-122.15,52.8-122.15s33,42.92,19.82,110c58.33-64.92,69.32-168.34,60.52-208C551.14,405.52,607.47,605,531.55,752.83,935.39,524.34,632,182.46,579.2,144c17.6,38.51,20.94,103.71-14.63,135.34C504.36,51,355.49,4.2,355.49,4.2c17.61,117.74-63.8,246.48-142.34,342.68-2.75-46.94-5.69-79.35-30.36-124.27-5.56,85.29-70.73,154.8-88.38,240.26C70.51,578.59,112.33,663.32,271.15,752.83Z" transform="translate(-88.17 -4.2)"/>
		   <path style={{fill:'url(#Íîâûé_îáðàçåö_ãðàäèåíòà_7)'}} class="cls-2" d="M419.5,313.32c8.79,39.63-2.2,143-60.53,208,13.2-67.12-19.81-110-19.81-110S328.35,472,286.36,533.4c-38.36,56.05-64.93,115.52-15,219.35-6.4-3.61,51.66,41.85,149.34,43,43.79.53,112.92-44.1,111.06-43C607.65,604.92,551.32,405.45,419.5,313.32Z" transform="translate(-88.17 -4.2)"/>
	   </svg>T</h1>
						<p>Compare, Rate, Vote, Comment and many more...</p>
						
					</div>
					</div>
				</div>
			</div>
		);
	}
}

export default about;
