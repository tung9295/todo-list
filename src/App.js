import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';

class App extends Component {
	constructor() {
		super();
		this.state = {
			newItem: '',
			todoItems : [
				{title: 'Mua bim bim', isComplete: false},
				{title: 'Mua gao', isComplete: false},
				{title: 'Do xang', isComplete: false},
				{title: 'Di choi', isComplete: false}
			]
		}
		this.onItemClicked = this.onItemClicked.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	// onItemClicked(index) {
	// 	console.log(this.state)
	// 	this.setState(state => {
	// 		return state.todoItems[index].isComplete = !state.todoItems[index].isComplete;
	// 	});
	// }
	onItemClicked(item) {
		const isComplete = item.isComplete;
		const { todoItems } = this.state;
		const index = todoItems.indexOf(item);
		this.setState({
			todoItems: [
				...todoItems.slice(0, index),
				{
					...item,
					isComplete: !isComplete
				},
				...todoItems.slice(index + 1)
			]
		});
		console.log(this.state.todoItems);
	}

	onKeyUp(event) {
		if (event.keyCode === 13) { // enter keycode === 13
			var text = event.target.value;
			if (!text) {
				return;
			}
			text = text.trim();
			if (!text) {
				return;
			}
			this.setState({
				newItem: '',
				todoItems: [
					{
						title: text,
						isComplete: false
					},
					...this.state.todoItems
				]
			});
		}
	}

	onChange(event) {
		this.setState({
			newItem: event.target.value
		});
	}

	render() {
		return (
			<div className="App">
				<div className="Header">
					<img alt="stick" src={tick} width={32}/>
					<input 
						type="text" 
						placeholder="Add something to do" 
						value={this.state.newItem}
						onChange={this.onChange}
						onKeyUp={this.onKeyUp}
						
					/>
				</div>
				{this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
					<TodoItem
						key={index}
						item={item}
						// onClick={() => this.onItemClicked(index)}/>)
						onClick={() => this.onItemClicked(item)}/>)
				}
				{this.state.todoItems.length === 0 && 'Nothing to do'}
			</div>
		)
	} 
}

export default App;
