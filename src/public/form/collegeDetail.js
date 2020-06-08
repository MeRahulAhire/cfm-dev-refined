import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import './styles/collegeDetail.css';
import LocationInput from './lib-component/locationInput';
export class collegeDetail extends Component {
	continue = (e) => {
		// const { values } = this.props
		const pacInput = document.getElementById('pac-input');
		const branch = document.getElementById('branch');
		const yob = document.getElementById('yob');
		// const collegeSpaceErr = document.getElementById('college-space-err')
		const collegeFormatErr = document.getElementById('college-format')
		const commaRegex = /[,]/g	
		const spaceRegex = /[ X]/
		if (pacInput.value === "" && branch.value === "" && yob.value === ""){
			pacInput.style.boxShadow = "0px 0px 15px 0px red";
			branch.style.boxShadow = "0px 0px 15px 0px red";
			yob.style.boxShadow = "0px 0px 15px 0px red";
			navigator.vibrate(100);
		}
		else if(pacInput.value === ""){
		  pacInput.style.boxShadow = "0px 0px 15px 0px red";
		  navigator.vibrate(100);
		}
		else if (commaRegex.test(pacInput.values)){
			collegeFormatErr.style.display = "block";
			navigator.vibrate(100);
		}
		
		else{
			e.preventDefault();
		this.props.nextStep();
		}
	};
	render() {
		const errorReset = () => {
			const pacInput = document.getElementById('pac-input');
			const branch = document.getElementById('branch');
			const yob = document.getElementById('yob');
			// const collegeSpaceErr = document.getElementById('college-space-err')
			const collegeFormatErr = document.getElementById('college-format')
			const commaRegex = /[,]/g
			const spaceRegex = /[ X]/
			 if(pacInput.value !== ""){
				pacInput.style.boxShadow = "";
							
			}
			
			else if (commaRegex.test(pacInput.values) === true){
				collegeFormatErr.style.display = "none";
				
			}
			if(branch.value !== ""){
				branch.style.boxShadow = "";
							
			}
			if(yob.value !== ""){
				yob.style.boxShadow = "";
							
			}
			// else{
			// 	return null
			// }
		}
		const { values, handleChange, CollegeNameHandler } = this.props;
		// this.errorReset()
		return (
			<div>
				<Topbar />
				<div className="signup-bg col">
					<div className="signup-container" onChange={errorReset}>
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
							<input
								type="number"
								id="yob"
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
