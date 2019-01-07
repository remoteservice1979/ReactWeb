import React, {Component} from 'react';
import {reduxConnect} from "../../hoc";
import * as actions from './actions.home';
import {MainLayout} from "../../layouts/MainLayout";

class Calculator extends Component {
    componentDidMount() {
        // this.props.fetchAssets();
    }

    render() {
        // const assets = this.props.assets;

        return (
            // <MainLayout>
               <div> Hi </div>
            // </MainLayout>
        );
    }
}

const mapStateToProps = state => state.Calculator;

export default reduxConnect(Calculator, actions, mapStateToProps)
