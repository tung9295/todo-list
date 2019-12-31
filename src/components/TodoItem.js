import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.onItemClick = this.onItemClick.bind(this);
    // }
    // onItemClick() {
    //     console.log(this.props.item)
    // }
    render() {
        const { item, onClick} = this.props;
        let className = 'TodoItem';
        if (item.isComplete) {
            className += ' TodoItem-complete';
        }
        return (
            <div onClick={onClick} className={className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;