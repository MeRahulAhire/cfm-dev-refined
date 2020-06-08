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
		document.getElementById('username').style.boxShadow = ""
	}
	passwordeHandler = e =>{
		this.setState({password: e.target.value});
		document.getElementById('password').style.boxShadow = ""
	}
	submitHandler = () => {
		const username = document.getElementById('username')
		const password = document.getElementById('password')
		if(username.value === "" && password.value === ""){
			username.style.boxShadow = "0px 0px 30px 5px rgba(213,0,0,1)"
			password.style.boxShadow = "0px 0px 30px 5px rgba(213,0,0,1)";
			navigator.vibrate(100);
		}
		else if(username.value === "") {
			username.style.boxShadow = "0px 0px 30px 5px rgba(213,0,0,1)";
			navigator.vibrate(100);
			
		}
		else if (password.value === "") {
			password.style.boxShadow = "0px 0px 30px 5px rgba(213,0,0,1)";
			navigator.vibrate(100);
			
		}
		
		else {
			console.log(JSON.stringify(this.state))
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
				</Helmet>
				<div className="login-bg">
					<div className="login-container">
						<div className="login-content">
							<h1>Login</h1>
							<div className="user-detail">
								Username/Email:
								<div className="login-error"></div>
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

