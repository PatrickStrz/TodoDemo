import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../constants/Colors'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import Button from './Button'

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
  background-color: ${COLORS.background};
  color: ${COLORS.text};
`

const Label = styled.p`
  color: ${COLORS.outline};
  font-size: 17px;
`

export default class EditTodoForm extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    onComplete: PropTypes.func
  }

  state = {
    title: this.props.title,
    description: this.props.description,
    dueDate: moment(this.props.dueDate)
  }

  render() {
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
        <Label>Pick a due date:</Label>
        <DatePicker
          selected={this.state.dueDate}
          onChange={this._handleDueDateChange}
        />
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
  _handleDueDateChange = date => this.setState({ dueDate: date })

  _handleSubmit = () => {
    const { onSubmit, onComplete } = this.props
    const { title, description, dueDate } = this.state
    if (!title || !description || !dueDate) {
      alert('you must comlete all fields')
      return
    }
    onSubmit(this.props.id, title, description, dueDate.toString())
    onComplete()
  }
}
