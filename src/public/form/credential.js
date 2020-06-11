import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import CountrySelect from './lib-component/countrySelect';
import './styles/credential.css';
export class credential extends Component {
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	continue = (e) => {
		const email = document.getElementById('email')
		const country = document.getElementById('country')
		const img = document.getElementById('img')
		const tel = document.getElementById('tel')
		const username = document.getElementById('username')
		const password = document.getElementById('password')
		const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		const usernameRegex = /^[a-z0-9_.]{3,16}$/
		const emailError = document.getElementById('email-error')
		const usernameError = document.getElementById('username-error')
		if(email.value === '' && country.value === '' && tel.value === '' && username.value ==='' && password.value === ''){
			email.style.boxShadow = '0px 0px 15px 0px red';
			img.style.boxShadow = '0px 0px 15px 0px red';
			tel.style.boxShadow = '0px 0px 15px 0px red';
			username.style.boxShadow = '0px 0px 15px 0px red';
			password.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}
		else if (email.value === ''){
			email.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);

		}
		else if (!emailRegex.test(email.value)){
			emailError.style.display = "block"
			navigator.vibrate(100);
		}
		else if (country.value === ''){
			img.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}
		else if (tel.value === ''){
			tel.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}
		else if (username.value === ''){
			username.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}
		else if(!usernameRegex.test(username.value)){
			usernameError.style.display = 'block'
			navigator.vibrate(100);
		}

		else if (password.value === ''){
			password.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}

		else{

			e.preventDefault();
			this.props.nextStep();
		}
	};

	

	render() {
		const { values, handleChange, countryFlagHandler } = this.props;
		const credentialErrorReset = () => {
			const email = document.getElementById('email')
		const country = document.getElementById('country')
		const img = document.getElementById('img')
		const tel = document.getElementById('tel')
		const username = document.getElementById('username')
		const password = document.getElementById('password')
		const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		const usernameRegex = /^[a-z0-9_.]{3,16}$/
		const emailError = document.getElementById('email-error')
		const usernameError = document.getElementById('username-error')
		if (email.value !== ''){
			email.style.boxShadow = '';

		}
		if (emailRegex.test(email.value)){
			emailError.style.display = "none"
		}
		if (country.value !== ''){
			img.style.boxShadow = '';
		}
		if (tel.value !== ''){
			tel.style.boxShadow = '';
		}
		if (username.value !== ''){
			username.style.boxShadow = '';
		}
		if(usernameRegex.test(username.value)){
			usernameError.style.display = 'none'
		}
		if (password.value !== ''){
			password.style.boxShadow = '';
		}

		}
		return (
			<div>
				<Topbar />
				<div className="signup-bg">
					<div className="signup-container" onChange={credentialErrorReset}>
						<button onClick={this.back} className="col-form-prev">
							<i className="fa fa-chevron-left" />
						</button>
						<div className="user-detail email">
							Email:
							<div id="email-error">Enter Valid Email Address</div>
							<input
								type="email"
								id="email"
								placeholder="your-email@example.com"
								onChange={handleChange('Email')}
								defaultValue={values.Email}
							/>
						</div>
						<div className="phone">
							Phone:
							<CountrySelect
								values={values}
								handleChange={handleChange}
								countryFlagHandler={countryFlagHandler}
							/>
						</div>
						<div className="user-detail username">
							Username:
							<div id="username-error">username should only contain letters, numbers, underscore and fullstop</div>
							<input
								type="text"
								placeholder="Create your Unique username"
								id="username"
								onChange={handleChange('Username')}
								defaultValue={values.Username}
							/>
						</div>
						<div className="user-detail password">
							Password:
							<input
								type="password"
								id="password"
								placeholder="Create password for CFM"
								onChange={handleChange('Password')}
								defaultValue={values.Password}
							/>
						</div>
						<div className="btn-next">
							<button onClick={this.continue} className="col-form-next">
								<i className="fa fa-chevron-right" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default credential;
