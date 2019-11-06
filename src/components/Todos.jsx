import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.jsx';

class Todos extends React.Component {
    render() {
        return this.props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete}/>
        });
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
}

export default Todos;