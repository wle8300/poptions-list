import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reactFastclick from 'react-fastclick'

reactFastclick()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
