import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import './styles/collegeDetail.css';
export class userDetail extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const { values, handleChange } = this.props;
		return (
			<div>
				<Topbar />
				<div className="signup-bg col">
					<div className="signup-container">
						<button onClick={this.back} className="col-form-prev">
							<i className="fa fa-chevron-left" />
						</button>
						<div className="user-detail firstName">
							First Name:
							<input 
							    style={{textTransform:'capitalize'}}
								type="text"
								placeholder="Enter your First Name"
								onChange={handleChange('FirstName')}
								defaultValue={values.FirstName}
							/>
						</div>
						<div className="user-detail lastName">
							Last Name:
							<input
							 	style={{textTransform:'capitalize'}}
								type="text"
								placeholder="Enter your Last Name"
								onChange={handleChange('LastName')}
								defaultValue={values.LastName}
							/>
						</div>
						<div className="user-detail gender">
							Gender:
							<select
								onChange={handleChange('Gender')}
								defaultValue={values.Gender}
								className="gender-select"
								name=""
								id=""
							>
								<option hidden>Select your Gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div className="user-detail dateOfBirth">
							Date of Birth:
							<input
								className="dob"
								type="date"
								placeholder="When did you Born?"
								onChange={handleChange('DOB')}
								defaultValue={values.DOB}
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

export default userDetail;
