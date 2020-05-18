import React, { Component } from 'react';
import './styles/login.css';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
export class login extends Component {

	
	render() {
        // const {username, password}= this.state
		return (
			<div>
				<Navbar />
				<Helmet>
					<title>College Facemash - Login</title>
					<meta name="theme-color" content="#512da8" />
					<meta name="description" content="Login to college Facemash" />
				</Helmet>
				<div className="login-bg">
					<div className="login-container">
						<div className="login-content">
							<h1>Login</h1>
							<div className="user-detail">
								Username/Email:
								<input
									type="text"
									id="username"
									placeholder="Enter your Email or Username"
									
								/>
							</div>
							<div className="user-detail">
								Password:
								<input
									type="password"
									id="password"
									placeholder="Enter your Password"
									
								/>
							</div>
							<div className="forget-password">Forgot Password?</div>
							<button className="login-btn">Get In</button>
							<Link to="/signup">
								<div className="register">Dont have Account? Register here</div>
                            </Link>
                            
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default login;

