import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Terminal } from './components/Terminal'

ReactDOM.render(
  <BrowserRouter>
    <Terminal />
  </BrowserRouter>,
  document.getElementById('root')
)