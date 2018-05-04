import React, { Component } from "react"
import styled from "styled-components"
import COLORS from "./constants/Colors"

import CreateTodoForm from "./components/CreateTodoForm"

const SiteBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.background};
`

class App extends Component {
  state = {
    todos: [
      { title: "", description: "", dateCreated: "", dueDate: "", status: "" }
    ]
  }
  render() {
    return (
      <SiteBox>
        <CreateTodoForm />
      </SiteBox>
    )
  }
}

export default App
