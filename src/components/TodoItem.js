import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import COLORS from '../constants/Colors'
import STATUS from '../constants/Status'

const Box = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 50px;
  width: 60%;
  background-color: ${props => (props.done ? COLORS.success : COLORS.outline)};
  color: ${COLORS.text};
`

const TextButton = styled.p`
  color: ${COLORS.text};
  cursor: pointer;
`

const Par = styled.p`
  margin: 5px;
`

const TodoItem = ({
  id,
  title,
  description,
  dueDate,
  onDeleteClick,
  onEditClick,
  onChangeStatus,
  onToggleStatus,
  status,
  onEditButtonClick
}) => {
  return (
    <Box done={status === STATUS.DONE}>
      <Par>{title}</Par>
      <Par>{description}</Par>
      <Par>{dueDate}</Par>
      <TextButton onClick={onEditButtonClick}>Edit</TextButton>
      <TextButton
        onClick={() => {
          onToggleStatus(id)
        }}
      >
        {status === STATUS.DONE ? 'Mark pending' : 'Mark Done'}
      </TextButton>
      <TextButton onClick={() => onDeleteClick(id)}>X</TextButton>
    </Box>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onToggleStatus: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  onEditButtonClick: PropTypes.string.isRequired,
  editModalVisible: PropTypes.bool.isRequired,
  onEditModalClose: PropTypes.func.isRequired
}

export default TodoItem
