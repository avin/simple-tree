import _ from 'lodash';
import React from 'react';
import TreeItem from './TreeItem';

export default React.createClass({

    render(){
        let treeItems = _.map(this.props.treeData, (treeItem, key) => {
            return (
                <TreeItem item={treeItem} key={key}/>
            )
        });

        return (
            <ul>{treeItems}</ul>
        )
    }
})