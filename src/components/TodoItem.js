import React, { Component } from 'react';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

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
        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }

        let className = 'TodoItem';
        if (item.isComplete) {
            className += ' TodoItem-complete';
        }
        return (
            
            <div className={className}>
                <img onClick={onClick} src={url} width={32} alt="CLick"/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;