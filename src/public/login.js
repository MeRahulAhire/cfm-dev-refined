import React, { Component } from 'react';
import './styles/login.css';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
export class login extends Component {
	state ={
		username:'',
		password:''
	}
	usernameHandler = e =>{
		this.setState({username: e.target.value})
		document.getElementById('username').style.boxShadow = "";
		const spaceRegex = /[ X]/
		if (!spaceRegex.test(document.getElementById('username').value)){
			document.getElementById('loginError').style.display = "none"
		}
	}
	passwordeHandler = e =>{
		this.setState({password: e.target.value});
		document.getElementById('password').style.boxShadow = ""
	}
	submitHandler = () => {
		const username = document.getElementById('username')
		const password = document.getElementById('password')
		const spaceRegex = /[ X]/
		if(username.value === "" && password.value === ""){
			username.style.boxShadow = "0px 0px 15px 0px red"
			password.style.boxShadow = "0px 0px 15px 0px red";
			navigator.vibrate(100);
		}
		else if(username.value === "") {
			username.style.boxShadow = "0px 0px 15px 0px red";
			navigator.vibrate(100);
			
		}
		else if (spaceRegex.test(username.value)){
			document.getElementById('loginError').style.display = "block"
			navigator.vibrate(100);

		}
		else if (password.value === "") {
			password.style.boxShadow = "0px 0px 15px 0px red";
			navigator.vibrate(100);
			
		}
		
		else {
			alert(JSON.stringify(this.state))
		}
		
	}
	render() {
        const {username, password}= this.state
		return (
			<div>
				<Navbar />
				<Helmet>
					<title>College Facemash - Login</title>
					<meta name="theme-color" content="#512da8" />
					<meta name="description" content="Login to college Facemash" />

					<meta charset="utf-8" />
                    <title>College Facemash - Login</title>
					<meta name="theme-color" content="#512da8"/>
					<link rel="canonical" href="https://collegefacemash.com/"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
					<meta name="description" content="Login with College Facemash to continuing your virtual online College experience"/>
					<meta name="title" content="College Facemash - Login" />

					<meta property="og:image" content="https://i.ibb.co/KXRQJc3/icon-512x512.png" />
					<meta property="og:title" content="College Facemash - Login"/>
					<meta property="og:description" content="Login with College Facemash to continuing your virtual online College experience"/>
					<meta property="og:url" content="https://test.collegefacemash.com"/>
					<meta property="og:site_name" content="College Facemash"/>

					<meta name="twitter:title" content="College Facemash - Login"/>
					<meta name="twitter:description" content="Login with College Facemash to continuing your virtual online College experience"/>
					<meta name="twitter:image" content="https://i.ibb.co/KXRQJc3/icon-512x512.png"/>
					<meta name="twitter:card" content="College_Facemash_login"/>
					<meta name="twitter:image:alt" content="College Facemash Logo - Alt"/>
				</Helmet>
				<div className="login-bg">
					<div className="login-container">
						<div className="login-content">
							<h1>Login</h1>
							<div className="user-detail">
								Username/Email:
								<div id="loginError" className="login-error">spaces not allowed</div>
								<input
								onChange={this.usernameHandler}
								value={username}
									type="text"
									id="username"
									placeholder="Enter your Email or Username"
									
								/>
							</div>
							<div className="user-detail">
								Password:
								<input
								onChange={this.passwordeHandler}
								value={password}
									type="password"
									id="password"
									placeholder="Enter your Password"
									
								/>
							</div>
							<div className="forget-password">Forgot Password?</div>
							<button className="login-btn" onClick={this.submitHandler}>Get In</button>
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

