import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../containers/Home/Home"
import Login from "../containers/Login/Login"
import {PrivateRoute} from "../components/PrivateRoute";
import {reduxConnect} from "../hoc";
import {Admin} from "../containers/Admin/Admin";
import {fetchLoggedInUser} from "../containers/Login/actions.login";

class Routes extends Component {
    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.props.fetchLoggedInUser();
        }
    }

    render() {
        return (
            <Switch>
                <PrivateRoute path="/home" component={Home} isAuthenticated={this.props.isAuthenticated}/>
                <PrivateRoute path="/admin" component={Admin} isAuthenticated={this.props.isAuthenticated}/>
                <Route path="/login" component={Login}/>
                <Redirect from="/" to="/home"/>
            </Switch>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.userSession.loggedIn
});

export default reduxConnect(Routes, {fetchLoggedInUser}, mapStateToProps)

