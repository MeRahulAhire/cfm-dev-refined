import React, { Component } from 'react';
import './styles/reviewForm.css';
import Topbar from './lib-component/topbar';

export class reviewForm extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const {
			values: {
				CollegeName,
				Branch,
				YearOfAdmission,

				FirstName,
				LastName,
				Gender,
				DOB,

				Email,
				CountryCode,
				Phone,
				Username,
				Password,

				ProfilePic,
				Description
			}
		} = this.props;
		return (
			<div className="page">
				<Topbar />
				<div className="review-page">
					<div className="review-check-container">
						<div className="review-banner">Review Your Details</div>
						<div className="details">
							<div className="image-review-container">
								<div className="img-holder">
									<img src={ProfilePic} alt="" className="review-profile-img" />
								</div>
							</div>
							<div className="char-box">
								<span className="hlg-bold">
									First Name <span>:</span>{' '}
								</span>
								<span className="label-value">{FirstName}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Last Name : </span>
								<span className="label-value">{LastName}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Gender : </span>
								<span className="label-value">{Gender}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Date of Birth : </span>
								<span className="label-value">{DOB}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Your College : </span>
								<span className="label-value-college">{CollegeName}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Branch : </span>
								<span className="label-value">{Branch}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Year of Admission : </span>
								<span className="label-value">{YearOfAdmission}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Email : </span>
								<span className="label-value">{Email}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Phone No : </span>
								<span className="label-value">
									{CountryCode}
									{Phone}
								</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Username : </span>
								<span className="label-value">{Username}</span>
							</div>
							<div className="char-box">
								<span className="hlg-bold">Your Description : </span>
								<span className="label-value">{Description}</span>
							</div>
							<hr />
							<p className="message">
								For your personal safety we haven't displayed your password here. Make Sure you have
								choosen a appropriate, strong and a rememberable Password
							</p><hr/>
							<p className="message signup">
								By Signing up, you naturally agree to privacy policies and t&c
							</p>
						</div>
						<div className="review-action">
							<button onClick={this.back} className="goBack">
								Go Back
							</button>
							<button className="reg-submit">
								Sign Up <i class="fa fa-user-plus" />
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default reviewForm;
