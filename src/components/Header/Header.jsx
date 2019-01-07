import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import './Header.css'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {reduxConnect} from "../../hoc";
import {LinkContainer} from "react-router-bootstrap";
import {logout} from "../../containers/Login/actions.login";

class Header extends Component {
    constructor(props) {
        super(props);

        this.logoutRequest = this.logoutRequest.bind(this);
    }

    logoutRequest() {
        this.props.logout();
    }

    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/home">
                            <img src={logo} alt="logo"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/home">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/admin">
                            <NavItem eventKey={2}>Admin</NavItem>
                        </LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title={this.props.firstName + " " + this.props.lastName}
                                     id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Settings</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3} onClick={this.logoutRequest}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    firstName: state.userSession.user.firstName,
    lastName: state.userSession.user.lastName
});

export default reduxConnect(Header, {logout}, mapStateToProps)
