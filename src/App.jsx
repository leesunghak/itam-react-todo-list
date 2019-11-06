import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 0,
        title: '빨래하기',
        completed: false,
      },
      {
        id: 1,
        title: '게임하기',
        completed: true,
      },
      {
        id: 2,
        title: '운동',
        completed: false,
      },
    ]
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }

}

export default App;
