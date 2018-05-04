import React, { Component } from 'react'
import styled from 'styled-components'
import COLORS from './constants/Colors'

import CreateTodoForm from './components/CreateTodoForm'
import TodoItem from './components/TodoItem'

const SiteBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.background};
  /* ignore highlights in browser:  */
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`

class App extends Component {
  state = {
    todos: [
      /* todoShape:
      {
        id: '',
        title: '',
        description: '',
        dateCreated: '',
        dueDate: '',
        status: ''
      }
      */
    ]
  }
  render() {
    return (
      <SiteBox>
        {this.state.todos.map(todo => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
            onDeleteClick={this._handleDeleteClick}
            status={todo.status}
            onEditPress={() => alert('clicked edit')}
          />
        ))}
        <CreateTodoForm onSubmit={this._handleTodoSubmit} />
      </SiteBox>
    )
  }

  addToList = (todos, newTodo) => {
    return [...todos, newTodo]
  }

  _handleTodoSubmit = todo => {
    this.setState((prevState, props) => {
      return { todos: this.addToList(prevState.todos, todo) }
    })
  }
  _handleDeleteClick = () => {
    alert('clicked delete')
  }
}

export default App
