import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuid from 'uuid/v1'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import COLORS from '../constants/Colors'
import STATUS from '../constants/Status'
import Button from './Button'

const Box = styled.div`
  margin-top: 25px;
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

export default class CreateTodoForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    description: '',
    createdAt: '',
    dueDate: moment()
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
        <Button style={{ marginTop: 20 }} onClick={this._handleSubmit}>
          Submit
        </Button>
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

  _clearValues = () =>
    this.setState({
      title: '',
      description: '',
      createdAt: '',
      dueDate: moment()
    })

  _handleSubmit = () => {
    const { title, description, dueDate } = this.state
    if (!title || !description || !dueDate) {
      alert('you must comlete all fields')
      return
    }
    this.props.onSubmit({
      title,
      description,
      id: uuid(),
      status: STATUS.PENDING,
      dueDate: dueDate.toString()
    })
    this._clearValues()
  }
}
