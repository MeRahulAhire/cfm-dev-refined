import React, { Component } from 'react'
import UserDetail from './userDetail'
import Credential from './credential'
import ProfileDetail from './profileDetail'
import CollegeDetail from './collegeDetail'
import blankUser from '../assets/blank_user.webp'
// import ReviewForm from './ReviewForm'

export class Registration extends Component {
  
      state = {
      step: 1,
      CollegeName: '',
      Branch: '',
      YearOfAdmission: '',
  
      FirstName: '',
      LastName: '',
      Gender: '',
      DOB:'',
  
      Email:'',
      CountryFlag:'https://raw.githubusercontent.com/MeRahulAhire/country-calling-code-html/master/phone_icon.png',
      CountryCode:'',
      Phone:'',
      Username:'',
      Password:'',
      
      ProfilePic:blankUser,
      Description:''
    };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  CollegeNameHandler = () => {
    // this.setState({CollegeName: document.getElementsByClassName('pac-item').innerHTML})
    // setTimeout(this.setState({CollegeName: this.state.address}),10)
    this.setState({CollegeName: this.state.address})

    // state = { address: '' };
    // handleChange = (address) => {
    //   this.setState({ address });
    // };
    // this.setState({CollegeName: document.getElementById('pac-input').value})

  }
  countryFlagHandler = () =>{
			const select = document.querySelector('#country');
			this.setState({
				CountryFlag: `https://flagpedia.net/data/flags/h80/${select.selectedOptions[0].dataset.countrycode.toLowerCase()}.webp`
			});
  }
  profileImageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({ProfilePic: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  
  render() {
        const { step } = this.state;
        const {  Branch, CollegeName, YearOfAdmission, FirstName, LastName, Gender, DOB, Email, Phone, CountryFlag, CountryCode, Username, Password, ProfilePic, Description } = this.state;
        const values = { Branch, CollegeName, YearOfAdmission, FirstName, LastName, Gender, DOB, Email, Phone, CountryFlag, CountryCode, Username, Password, ProfilePic, Description };
        switch(step){
          case 1:
            return(
              <CollegeDetail
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              CollegeNameHandler={this.CollegeNameHandler}
              values={values}
                />
            )
          case 2:
            return(
              <UserDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
                />
            )  
            case 3:
              return(
                <Credential
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                countryFlagHandler={this.countryFlagHandler}
                values={values}
                />
                
              )
              case 4:
            return(
              <ProfileDetail
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              profileImageHandler={this.profileImageHandler}
              values={values}
              />
            )  
            case 5: return(
              <h1 style={{backgroundColor:'black', color:'white', height:'100vh'}}>Thanks for Submitting but we are under Contruction</h1>
            )
            default:
            return(
              <CollegeDetail
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
                />
            )

        }
    }
}

export default Registration