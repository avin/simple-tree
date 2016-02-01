import React from 'react';
import ReactDOM from 'react-dom';
import Tree from './Tree';

export default React.createClass({
    getInitialState() {
        return {
            showChildren: false
        };
    },
    handleClick(){

        //Подвигаем горизонтальный скрол окна к позиции элемента
        $('html, body').animate({
            scrollLeft: $(ReactDOM.findDOMNode(this)).offset().left,
        }, 200);

        console.log($(ReactDOM.findDOMNode(this)).offset().left)

        //Меняем видимость потомков
        this.setState({
            showChildren: !this.state.showChildren
        });
    },
    render(){
        let children;
        let icon;

        if (this.state.showChildren) {
            children = (
                <Tree treeData={this.props.item.children}/>
            )
        }

        //Ставим иконку в зависимости от наличия потомков...
        if (this.props.item.children.length) {

            //... и в зависимости от статуса видимости потомков
            if (children) {
                icon = (
                    <i className="fa fa-fw fa-angle-down"/>
                );
            } else {
                icon = (
                    <i className="fa fa-fw fa-angle-right"/>
                );
            }
        } else {
            icon = (
                <i className="fa fa-fw fa-leaf"/>
            );
        }

        return (
            <li>
                <a onClick={this.handleClick}>{icon}{this.props.item.name}</a>
                {children}
            </li>
        )
    }
})