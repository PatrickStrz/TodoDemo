import React from 'react'
import ReactDOM from 'react-dom'
import CreateTodoForm from './CreateTodoForm'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import moment from 'moment'

configure({ adapter: new Adapter() })

const setInputState = (wrapper, selector, value) => {
  const input = wrapper.find(selector)
  input.simulate('change', { target: { value } })
}

describe('<CreateTodoForm/>', () => {
  test('setting state when user types in form', () => {
    const wrapper = shallow(<CreateTodoForm onSubmit={() => {}} />)

    setInputState(wrapper, '[name="title"]', 'title text')
    expect(wrapper.state().title).toBe('title text')

    setInputState(wrapper, '[name="description"]', 'description text')
    expect(wrapper.state().description).toBe('description text')
  })
})
