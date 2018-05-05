import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from 'react-modal'
import COLORS from '../constants/Colors'
import STATUS from '../constants/Status'
import EditTodoForm from './EditTodoForm'

const Box = styled.div`
  margin-bottom: 10px;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 50px;
  width: 60%;
  background-color: ${props => (props.done ? COLORS.success : COLORS.outline)};
  color: ${COLORS.text};
`
const ActionsBox = styled.div`
  width: 30%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const ContentBox = styled.div`
  width: 70%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const TextButton = styled.p`
  color: ${COLORS.text};
  cursor: pointer;
`

const Text = styled.p`
  margin: 5px;
  flex: 1;
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
  onEditModalClose,
  onEditSubmit
}) => {
  return (
    <Box done={status === STATUS.DONE}>
      <ContentBox>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{dueDate}</Text>
      </ContentBox>

      <ActionsBox>
        <TextButton onClick={onEditClick}>Edit</TextButton>
        <TextButton
          onClick={() => {
            onToggleStatus(id)
          }}
        >
          {status === STATUS.DONE ? 'Mark pending' : 'Mark Done'}
        </TextButton>
        <TextButton onClick={() => onDeleteClick(id)}>X</TextButton>
      </ActionsBox>

      <Modal
        isOpen={editModalVisible}
        onRequestClose={onEditModalClose}
        style={customModalStyles}
        contentLabel="Example Modal"
      >
        <button onClick={onEditModalClose}>close</button>

        <EditTodoForm
          id={id}
          title={title}
          description={description}
          dueDate={dueDate}
          onSubmit={onEditSubmit}
          onComplete={onEditModalClose}
        />
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
  onEditModalClose: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired
}

const customModalStyles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background
  }
}

export default TodoItem
