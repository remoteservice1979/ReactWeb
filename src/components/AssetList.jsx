import React, {Component} from 'react';

export default class extends Component {
    render() {
        const assets = this.props.assets || [];
        const assetElements = assets.map((asset) =>
            <li key={asset.id}>{asset.name}</li>
        );

        return (
            <ul>{assetElements}</ul>
        );
    }
}
