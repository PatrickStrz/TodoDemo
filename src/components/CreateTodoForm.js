import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import COLORS from "../constants/Colors"

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 25%;
  border: 1px solid ${COLORS.outline};
  border-radius: 5px;
`

export default class CreateTodoForm extends Component {
  render() {
    return <FormBox>Hi This is a todo form!</FormBox>
  }
}
