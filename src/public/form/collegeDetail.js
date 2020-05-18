import React, { Component } from 'react';
import Topbar from './lib-component/topbar';
import './styles/collegeDetail.css';
import LocationInput from './lib-component/locationInput';
export class collegeDetail extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange, CollegeNameHandler } = this.props;
		
		return (
			<div>
				<Topbar />
				<div className="signup-bg col">
					<div className="signup-container">
						<div className="college-heading">Register With CFM</div>
						<div className="college-search">
							Select Your College:
							<LocationInput values={values} handleChange={handleChange} CollegeNameHandler={CollegeNameHandler} />
						</div>
						<div className="user-detail branch">
							Type your Branch:
							<input
								type="text"
								placeholder="CS,Mech,Civil,BCA,Medical,etc"
								onChange={handleChange('Branch')}
								defaultValue={values.Branch}
							/>
						</div>
						<div className="user-detail year-of-admission">
							Year of Admission?:
							<input
								type="number"
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
