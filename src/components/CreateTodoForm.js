import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../constants/Colors'

const Box = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 25%;
  border: 2px solid ${COLORS.outline};
  border-radius: 2px;
`

const Input = styled.input`
  width: 75%;
  font-size: 20px;
  border: 2px solid ${COLORS.outline};
  border-radius: 2px;
  background-color: ${COLORS.outline};
  color: ${COLORS.text};
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  padding: 10px;
  color: ${COLORS.main};
  cursor: pointer;
  border: 2px solid ${COLORS.main};
  border-radius: 2px;
`

export default class CreateTodoForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    description: '',
    createdAt: '',
    dueDate: ''
  }
  render() {
    const { onSubmit } = this.props
    return (
      <Box>
        <Input
          type="text"
          placeholder="Title"
          value={this.state.title}
          name="title"
          onChange={this._handleTitleChange}
        />
        <Input
          type="text"
          placeholder="Description"
          value={this.state.description}
          name="description"
          onChange={this._handleDescriptionChange}
        />
        <Input
          type="text"
          placeholder="Due Date"
          value={this.state.dueDate}
          name="dueDate"
        />
        <p>{this.state.title}</p>
        <Button onClick={this._handleSubmit}>Submit</Button>
      </Box>
    )
  }

  _handleTitleChange = e => {
    this.setState({ title: e.target.value })
  }
  _handleDescriptionChange = e => {
    this.setState({ description: e.target.value })
  }
  _clearValues = () =>
    this.setState({ title: '', description: '', createdAt: '', dueDate: '' })

  _handleSubmit = () => {
    const { title, description } = this.state
    this.props.onSubmit({ title, description })
    this._clearValues()
  }
}
