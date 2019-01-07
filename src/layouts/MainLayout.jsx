import React, {Component} from 'react';
import Header from "../components/Header/Header";

export class MainLayout extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
