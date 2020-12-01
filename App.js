/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import Button from "./components/Button"
import TodoList from './components/TodoList';
import TabBar from './components/TabBar';

let todoIndex = 0

class App extends Component {
	constructor() {
		super()

		this.state = {
			inputValue: "",
			todos: [],
			type: "All"
		}

		this.submitTodo = this.submitTodo.bind(this)
		this.toggleComplete = this.toggleComplete.bind(this)
		this.deleteTodo = this.deleteTodo.bind(this)
		this.setType = this.setType.bind(this)
	}

	inputChange(inputValue) {
		this.setState({
			inputValue: inputValue
		})
	}

	submitTodo() {
		if(!this.state.inputValue) {
			return
		}

		const todo = {
			title: this.state.inputValue,
			index: todoIndex++,
			complete: false
		}

		const todos = [...this.state.todos, todo]
		this.setState({
			inputValue: "",
			todos
		})
	}

	toggleComplete(index) {
		let {todos} = this.state
		todos.forEach((todo) => {
			if(todo.index === index) {
				todo.complete = !todo.complete
			}
		})
		this.setState({
			todos
		})
	}

	deleteTodo(index) {
		let {todos} = this.state
		todos = todos.filter((todo) => (todo.index !== index))
		this.setState({
			todos
		})
	}

	setType(type) {
		this.setState({
			type
		})
	}

	render() {
		const {inputValue} = this.state

		return (
			<View style={Styles.container}>
				<ScrollView keyboardShouldPersistTaps="always" style={Styles.content}>
					<Header />
					<Input
						inputValue={inputValue}
						inputChange={(text) => this.inputChange(text)} />
					<TodoList 
						todos={this.state.todos}
						toggleComplete={this.toggleComplete}
						deleteTodo={this.deleteTodo}
						type={this.state.type} />
					<Button onSubmit={this.submitTodo} />
				</ScrollView>

				<TabBar type={this.state.type} setType={this.setType} />
			</View>
		)
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5"
	},
	content: {
		flex: 1,
		paddingTop: 60
	}
})

export default App;
