import React from 'react';
import {reduxConnect} from "../../hoc";
import * as actions from "./actions.login";
import {Redirect} from "react-router-dom";
import logo from "../../assets/logo.png";
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {username, password} = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const {loggedIn} = this.props.userSession;
        const {username, password, submitted} = this.state;
        const {from} = this.props.location.state || {from: {pathname: "/"}};

        if (loggedIn) {
            return <Redirect to={from}/>;
        }

        return (
            <div className="login">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                        <div id="logo" className="logo text-center">
                            <img src={logo} alt="Logo"/>
                        </div>
                        <div className="login-overlay">
                            <form onSubmit={this.handleSubmit} name="loginForm" className="login-form" id="loginForm">
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="glyphicon glyphicon-user"/>
                                        </span>
                                        <input type="text" required="required" name="username"
                                               tabIndex="1" placeholder="username" className="form-control"
                                               value={username} onChange={this.handleChange}/>
                                        {submitted && !username &&
                                        <div className="help-block">Username is required</div>
                                        }
                                    </div>
                                </div>
                                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="glyphicon glyphicon-lock"/>
                                        </span>
                                        <input type="password" required="required" name="password"
                                               tabIndex="2" placeholder="password" className="form-control"
                                               id="password" value={password}
                                               onChange={this.handleChange}/>
                                        {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                        }
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="_submit" value="Sign In"
                                           className="btn btn-login form-control" tabIndex="3"
                                           id="signInBtn"/>
                                </div>
                                <div className="form-group form-footer">
                                    <div className="text-right">
                                        <a href="/session/forgotPassword">Forgot Username or
                                            Password?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userSession: state.userSession,
});

export default reduxConnect(Login, actions, mapStateToProps)
