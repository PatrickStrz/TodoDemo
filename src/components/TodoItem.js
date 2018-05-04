import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TodoItem = ({ title, description, dueDate, onDeleteClick, onToggle }) => (
  <div>
    <p>{title}</p>
    <p>{description}</p>
    <p>{dueDate}</p>
    <p onClick={onDeleteClick}>deleteButton</p>
  </div>
)

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoItem
