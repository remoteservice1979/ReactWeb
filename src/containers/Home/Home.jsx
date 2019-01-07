import React, {Component} from 'react';
import {reduxConnect} from "../../hoc";
import * as actions from './actions.home';
import {MainLayout} from "../../layouts/MainLayout";
import AssetList from "../../components/AssetList";

class Home extends Component {
    componentDidMount() {
        this.props.fetchAssets();
    }

    render() {
        const assets = this.props.assets;

        return (
            <MainLayout>
                <h2>Asset List</h2>
                <AssetList assets={assets} />
            </MainLayout>
        );
    }
}

const mapStateToProps = state => state.home;

export default reduxConnect(Home, actions, mapStateToProps)
