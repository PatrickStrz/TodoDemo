import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import STATUS from './constants/Status'
import TodoItem from './components/TodoItem'

configure({ adapter: new Adapter() })

const todos = [
  {
    id: '1',
    status: STATUS.PENDING,
    title: 'pending todo',
    description: 'description 1',
    dueDate: ''
  },
  {
    id: '2',
    status: STATUS.DONE,
    title: 'completed todo',
    description: 'description 1',
    dueDate: ''
  },
  {
    id: '3',
    status: STATUS.DONE,
    title: 'completed todo',
    description: 'description 1',
    dueDate: ''
  }
]

const setData = wrapper => {
  wrapper.setState({ todos })
}
const setFilterBy = (wrapper, filterBy) => {
  wrapper.setState({ filterBy })
}

describe('<App/>', () => {
  it('should render App wrapper', () => {
    const wrapper = shallow(<App />)
  })

  it('should render 3 TodoItems when filterBy state === null ', () => {
    const wrapper = shallow(<App />)
    setData(wrapper)
    setFilterBy(wrapper, null)
    expect(wrapper.find('TodoItem')).toHaveLength(3)
  })

  it('should render 2 TodoItems when filterBy state === DONE ', () => {
    const wrapper = shallow(<App />)
    setData(wrapper)
    setFilterBy(wrapper, STATUS.DONE)
    expect(wrapper.find('TodoItem')).toHaveLength(2)
  })

  it('should render 1 TodoItem when filterBy state === PENDING ', () => {
    const wrapper = shallow(<App />)
    setData(wrapper)
    setFilterBy(wrapper, STATUS.PENDING)
    expect(wrapper.find('TodoItem')).toHaveLength(1)
  })
})
