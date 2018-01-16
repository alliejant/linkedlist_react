import React, { Component } from "react";

class UserSignupForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        };
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
        
    }
    
    componentWillReceiveProps(nextProps){
        if (this.props.username===null && nextProps.username){
            console.log("password in componentWillRecieve", nextProps.password)
            this.props.login({username: nextProps.username,   
                               password: nextProps.password})
            //this.props.history.push('/homepage');
        }
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-area">
                    <label>
                        Email:
                        <input
                            type="email"
                            placeholder="email"
                            onChange={this.handleChange}
                            name="email"
                            value={this.state.email}
                        />
                    </label>
                </div>
                <div className="input-area">
                    <label>
                        First Name:
                        <input
                            type="text"
                            placeholder="First Name"
                            onChange={this.handleChange}
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </label>
                </div>
                <div className="input-area">
                    <label>
                        Last Name
                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={this.handleChange}
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </label>
                </div>
                <div className="input-area">
                    <label>
                        username:
                        <input
                            type="text"
                            placeholder="username"
                            onChange={this.handleChange}
                            name="username"
                            value={this.state.username}
                        />
                    </label>
                </div>
                <div className="input-area">
                    <label>
                        password:
                        <input
                            type="text"
                            placeholder="password"
                            onChange={this.handleChange}
                            name="password"
                            value={this.state.password}
                        />
                    </label>
                </div>
                <input type="submit" value="I'm in!" />
            </form>
        );
    }
}

export default UserSignupForm;
