import React, { Component } from "react";
import SignupFormContainer from "../../containers/SignupFormContainer";

class UserAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
    
	render() {
		return <SignupFormContainer />;
	}
}

export default UserAuth;
