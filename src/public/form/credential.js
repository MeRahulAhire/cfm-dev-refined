import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import CountrySelect from './lib-component/countrySelect';
import './styles/credential.css';
export class credential extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	

	render() {
		const { values, handleChange, countryFlagHandler } = this.props;

		return (
			<div>
				<Topbar />
				<div className="signup-bg">
					<div className="signup-container">
						<button onClick={this.back} className="col-form-prev">
							<i className="fa fa-chevron-left" />
						</button>
						<div className="user-detail email">
							Email:
							<input
								type="email"
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
							<input
								type="text"
								placeholder="Create your Unique username"
								id=""
								onChange={handleChange('Username')}
								defaultValue={values.Username}
							/>
						</div>
						<div className="user-detail password">
							Password:
							<input
								type="password"
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
