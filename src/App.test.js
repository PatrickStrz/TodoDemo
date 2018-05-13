import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<App/>', () => {
  it('should render App wrapper', () => {
    const app = shallow(<App />)
    console.log(app.debug())
  })
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
