import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import './styles/collegeDetail.css';
import LocationInput from './lib-component/locationInput';
export class collegeDetail extends Component {
	continue = (e) => {
		const pacInput = document.getElementById('pac-input');
		const branch = document.getElementById('branch');
		const yoa = document.getElementById('yoa');
		const yoaError = document.getElementById('yoa-error');
		const collegeFormatErr = document.getElementById('college-format');
		const commaRegex = /[,]/;
		if (pacInput.value === '' && branch.value === '' && yoa.value === '') {
			pacInput.style.boxShadow = '0px 0px 15px 0px red';
			branch.style.boxShadow = '0px 0px 15px 0px red';
			yoa.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} else if (pacInput.value === '') {
			pacInput.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} else if (!commaRegex.test(pacInput.value)) {
			collegeFormatErr.style.display = 'block';
			navigator.vibrate(100);
		} else if (branch.value === '') {
			branch.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} else if (yoa.value === '') {
			yoa.style.boxShadow = '0px 0px 15px 0px red';
			navigator.vibrate(100);
		} else if (yoa.value < 2015) {
			yoaError.style.display = 'block';
			navigator.vibrate(100);
		} else if (yoa.value > new Date().getFullYear()) {
			yoaError.style.display = 'block';
			yoaError.innerHTML = 'Please enter current valid year';
			navigator.vibrate(100);
		} else if (isNaN(yoa.value)) {
			yoaError.style.display = 'block';
			yoaError.innerHTML = 'Please only enter numbers';
		}
		 else {
			e.preventDefault();
			this.props.nextStep();
		}
	};
	render() {
		const colErrorReset = () => {
			const pacInput = document.getElementById('pac-input');
			const branch = document.getElementById('branch');
			const yoa = document.getElementById('yoa');
			const yoaError = document.getElementById('yoa-error');
			const collegeFormatErr = document.getElementById('college-format');
			const commaRegex = /,/;
			if (pacInput.value !== '') {
				pacInput.style.boxShadow = '';
			} else if (commaRegex.test(pacInput.value)) {
				collegeFormatErr.style.display = 'none';
			}
			if (branch.value !== '') {
				branch.style.boxShadow = '';
			}
			if (yoa.value !== '') {
				yoa.style.boxShadow = '';
			} 
			 if (yoa.value >= 2015) {
				yoaError.style.display = 'none';
			}  if (yoa.value <= new Date().getFullYear()) {
				yoaError.style.display = 'none';
			}
		};
		const { values, handleChange, CollegeNameHandler } = this.props;

		return (
			<div>
				<Topbar />
				<div className="signup-bg col">
					<div className="signup-container" onChange={colErrorReset}>
						<div className="college-heading">Register With CFM</div>
						<div className="college-search">
							Select Your College:
							<LocationInput values={values} CollegeNameHandler={CollegeNameHandler} />
						</div>
						<div className="user-detail branch">
							Type your Branch:
							<input
								type="text"
								id="branch"
								placeholder="CS,Mech,Civil,BCA,Medical,etc"
								onChange={handleChange('Branch')}
								defaultValue={values.Branch}
							/>
						</div>
						<div className="user-detail year-of-admission">
							Year of Admission?:
							<div id="yoa-error">sorry you are too old to apply</div>
							<input
								type="number"
								id="yoa"
								placeholder="2017,2018 or 2020?"
								onChange={handleChange('YearOfAdmission')}
								defaultValue={values.YearOfAdmission}
							/>
						</div>
						<div className="btn-next">
							<button className="col-form-next" onClick={this.continue}>
								<i className="fa fa-chevron-right" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default collegeDetail;
