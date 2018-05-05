import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import COLORS from '../constants/Colors'
import STATUS from '../constants/Status'

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
  ${props =>
    props.active &&
    css`
      color: ${COLORS.text};
      background-color: ${COLORS.main};
    `};
`

export default Button
