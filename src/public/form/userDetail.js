import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import './styles/collegeDetail.css';
export class userDetail extends Component {
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	continue = (e) => {
		const firstName = document.getElementById('first-name');
		const lastName = document.getElementById('last-name');
		const gender = document.getElementById('gender');
		const dob = document.getElementById('dob');
		const dobError = document.getElementById('dob-error')
		const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
		if (firstName.value === "" && lastName.value === "" && gender.value === "" && dob.value === "") {
			firstName.style.boxShadow = '0px 0px 15px 0px red';
			lastName.style.boxShadow = '0px 0px 15px 0px red';
			gender.style.boxShadow = '0px 0px 15px 0px red';
			dob.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} 
		else if(firstName.value === "") {
			firstName.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}
		else if(lastName.value === "") {
			lastName.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}
		else if(gender.value === "") {
			gender.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}
		else if(gender.value !== "" && gender.value !== "Male" && gender.value !== "Female") {
			alert("Only default values provided by us are accepted")
		}
		else if(dob.value === "") {
			dob.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		}
		else if(!dateRegex.test(dob.value)){
			dobError.style.display = "block"
		}
		
		else {
			e.preventDefault();
			this.props.nextStep();
		}
	};

	render() {
		const { values, handleChange } = this.props;
		const userErrorReset = () => {
			const firstName = document.getElementById('first-name');
		const lastName = document.getElementById('last-name');
		const gender = document.getElementById('gender');
		const dob = document.getElementById('dob');
        const dobError = document.getElementById('dob-error');
		const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
		 if(firstName.value !== "") {
			firstName.style.boxShadow = '';
		}
		  if(lastName.value !== "") {
			lastName.style.boxShadow = '';
		}
		  if(gender.value !== "") {
			gender.style.boxShadow = '';
		}
		 if(dob.value !== "") {
			dob.style.boxShadow = '';
		}
		 if(dateRegex.test(dob.value)){
			dobError.style.display = "none"
		}
		}
		return (
			<div>
				<Topbar />
				<div className="signup-bg col">
					<div className="signup-container" onChange={userErrorReset}>
						<button onClick={this.back} className="col-form-prev">
							<i className="fa fa-chevron-left" />
						</button>
						<div className="user-detail firstName">
							First Name:
							<input
								style={{ textTransform: 'capitalize' }}
								type="text"
								id="first-name"
								placeholder="Enter your First Name"
								onChange={handleChange('FirstName')}
								defaultValue={values.FirstName}
							/>
						</div>
						<div className="user-detail lastName">
							Last Name:
							<input
								style={{ textTransform: 'capitalize' }}
								type="text"
								id="last-name"
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
								id="gender"
							>
								<option value="" hidden>Select your Gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
						</div>
						<div className="user-detail dateOfBirth">
							Date of Birth:
							<div id="dob-error">Enter valid Date</div>
							<input
								className="dob"
								type="date"
								id="dob"
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
