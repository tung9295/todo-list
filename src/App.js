import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todoItems : [
				{title: 'Mua bim bim', isComplete: false},
				{title: 'Mua gao', isComplete: false},
				{title: 'Do xang', isComplete: false},
				{title: 'Di choi', isComplete: false}
			]
		}
		this.onItemClicked = this.onItemClicked.bind(this);
	}

	onItemClicked(index) {
		// console.log(this.state)
		this.setState(state => {
			return state.todoItems[index].isComplete = !state.todoItems[index].isComplete;
		});
	}

	render() {
		// console.log('Rendering...')
		return (
			<div className="App">
			{this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) => 
				<TodoItem key={index} item={item} onClick={() => this.onItemClicked(index)}/>)}
			{this.state.todoItems.length === 0 && 'Nothing to do'}
			</div>
		)
	}
}

export default App;
