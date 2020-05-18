import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './public/index'
import About from './public/about'
import Login from './public/login'
// import UserDetail  from './public/form/userDetail'
// import CollegeDetail from './public/form/collegeDetail'
// import ProfileDetail from './public/form/profileDetail'
import Registration from './public/form/registration'

export class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/" component={Index} exact />
						<Route path="/about" component={About} exact />
						<Route path="/login" component={Login} exact />
						{/* <Route path="/signup" component={CollegeDetail} exact />
						<Route path="/signup1" component={UserDetail} exact />
						<Route path="/signup2" component={ProfileDetail} exact /> */}
						<Route path="/signup" component={Registration} exact />
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
