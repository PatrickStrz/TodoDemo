import React, { Component } from 'react'
import styled from 'styled-components'
import COLORS from './constants/Colors'
import STATUS from './constants/Status'
import CreateTodoForm from './components/CreateTodoForm'
import TodoItem from './components/TodoItem'
import Button from './components/Button'

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

const FilterButtonsBox = styled.div`
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

class App extends Component {
  state = {
    todos: [],
    editModalVisible: false,
    filterBy: null
  }
  render() {
    const getFilteredTodos = () => {
      switch (this.state.filterBy) {
        case null:
          return this.state.todos
        case STATUS.DONE:
          return this.state.todos.filter(todo => todo.status === STATUS.DONE)
        case STATUS.PENDING:
          return this.state.todos.filter(todo => todo.status === STATUS.PENDING)
      }
    }

    return (
      <SiteBox>
        <FilterButtonsBox>
          <Button
            active={this.state.filterBy === null}
            onClick={() => this._setFilter(null)}
          >
            ALL
          </Button>
          <Button
            active={this.state.filterBy === STATUS.PENDING}
            onClick={() => this._setFilter(STATUS.PENDING)}
          >
            PENDING
          </Button>
          <Button
            active={this.state.filterBy === STATUS.DONE}
            onClick={() => this._setFilter(STATUS.DONE)}
          >
            DONE
          </Button>
        </FilterButtonsBox>
        {getFilteredTodos().map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
            onDeleteClick={this._handleDeleteClick}
            status={todo.status}
            onToggleStatus={this._handleToggleStatus}
            onEditClick={this._showEditModal}
            editModalVisible={this.state.editModalVisible}
            onEditModalClose={this._hideEditModal}
            onEditSubmit={this._handleEditSubmit}
          />
        ))}
        <CreateTodoForm onSubmit={this._handleTodoSubmit} />
      </SiteBox>
    )
  }

  _setFilter = filterName => this.setState({ filterBy: filterName })

  _addToList = (todos, newTodo) => {
    return [...todos, newTodo]
  }

  _handleTodoSubmit = todo => {
    this.setState((prevState, props) => {
      return { todos: this._addToList(prevState.todos, todo) }
    })
  }
  _handleDeleteClick = () => {
    alert('clicked delete')
  }

  _handleToggleStatus = id => {
    const { todos } = this.state
    const indexOfTodo = todos.findIndex(todo => todo.id === id)
    const todo = todos[indexOfTodo]
    const status = todo.status === STATUS.DONE ? STATUS.PENDING : STATUS.DONE
    const updatedTodo = {
      ...todo,
      status
    }
    const newTodos = [
      ...todos.slice(0, indexOfTodo),
      updatedTodo,
      ...todos.slice(indexOfTodo + 1)
    ]
    this.setState({ todos: newTodos })
  }

  _handleDeleteClick = id => {
    const { todos } = this.state
    const indexOfTodo = todos.findIndex(todo => todo.id === id)
    const newTodos = [
      ...todos.slice(0, indexOfTodo),
      ...todos.slice(indexOfTodo + 1)
    ]
    this.setState({ todos: newTodos })
  }

  _handleEditSubmit = (id, title, description, dueDate) => {
    const { todos } = this.state
    const indexOfTodo = todos.findIndex(todo => todo.id === id)
    const todo = todos[indexOfTodo]
    const updatedTodo = {
      ...todo,
      title,
      description,
      dueDate
    }
    const newTodos = [
      ...todos.slice(0, indexOfTodo),
      updatedTodo,
      ...todos.slice(indexOfTodo + 1)
    ]
    this.setState({ todos: newTodos })
  }

  _showEditModal = () => this.setState({ editModalVisible: true })
  _hideEditModal = () => this.setState({ editModalVisible: false })
}

export default App
