import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../constants/Colors'
import STATUS from '../constants/Status'

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 50px;
  width: 60%;
  border: 2px solid ${COLORS.outline};
  border-radius: 2px;
  background-color: ${COLORS.outline};
  color: ${COLORS.text};
`

const TodoItem = ({
  id,
  title,
  description,
  dueDate,
  onDeleteClick,
  onEditClick,
  onToggle,
  status
}) => (
  <Box>
    <p>{title}</p>
    <p>{description}</p>
    <p>{dueDate}</p>
    <p onClick={onToggle}>
      {status === STATUS.DONE ? 'Mark pending' : 'Mark Done'}
    </p>
    <p onClick={onDeleteClick}>deleteButton</p>
  </Box>
)

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
}

export default TodoItem
