import React, { Component } from "react";
import LoginPage from "./pages/LoginPage";

import "./App.css";

class App extends Component {
	render() {
		const test = this.props.user.username || null;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to LinkedList</h1>
					{test}
				</header>
				<LoginPage />
			</div>
		);
	}
}

export default App;
