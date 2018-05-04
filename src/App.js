import React, { Component } from 'react'
import styled from 'styled-components'
import COLORS from './constants/Colors'

import CreateTodoForm from './components/CreateTodoForm'

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
      { title: '', description: '', dateCreated: '', dueDate: '', status: '' }
    ]
  }
  render() {
    return (
      <SiteBox>
        <CreateTodoForm onSubmit={this._handleTodoSubmit} />
        {this.state.todos.map(todo => <p>{todo.title}</p>)}
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
}

export default App
