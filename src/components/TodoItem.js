import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from 'react-modal'
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
  onChangeStatus,
  onToggleStatus,
  status,
  onEditClick,
  editModalVisible,
  onEditModalClose
}) => {
  return (
    <Box done={status === STATUS.DONE}>
      <Par>{title}</Par>
      <Par>{description}</Par>
      <Par>{dueDate}</Par>
      <TextButton onClick={onEditClick}>Edit</TextButton>
      <TextButton
        onClick={() => {
          onToggleStatus(id)
        }}
      >
        {status === STATUS.DONE ? 'Mark pending' : 'Mark Done'}
      </TextButton>
      <TextButton onClick={() => onDeleteClick(id)}>X</TextButton>
      <Modal
        isOpen={editModalVisible}
        onRequestClose={onEditModalClose}
        style={customModalStyles}
        contentLabel="Example Modal"
      >
        <button onClick={onEditModalClose}>close</button>
        <div>I am a modal</div>
      </Modal>
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
  status: PropTypes.string.isRequired,
  onEditClick: PropTypes.func.isRequired,
  editModalVisible: PropTypes.bool.isRequired,
  onEditModalClose: PropTypes.func.isRequired
}

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default TodoItem
