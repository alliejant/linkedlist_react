import React, { Component } from "react";
import { Link } from "react-router-dom";

//??????check the link bellow and the rerouting????
//I updated the form ...check it??
//CHECK THE SIGN UP BTN AND THE ON CLICK REROUT????
class UserLoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username:"",
			password: ""
		};
	}
	handleChange(e) {
		e.preventDefault();
		this.setState({ currentText: e.target.value.slice(0, 15) });
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.login(this.state);
		//this.setState({ currentText: "" });
		//!!!!...added this rerouting here...!!!!
		this.props.history.push('./homepage');
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					placeholder="Username"
					onChange={this.handleChange.bind(this)}
					value={this.state.username}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					placeholder="Pasword"
					onChange={this.handleChange.bind(this)}
					value={this.state.password}
				/>
				<button type="submit" onclick=()=>this.props.history.push('./signup')>Sign Up</button>
				<button type="submit">Log In</button>
			</form>

			<Link to {'/companies/signin'}>{Sign in as company}</Link>
		);
	}
}

export default NewToDoForm;
class UserLoginForm extends Component {}
