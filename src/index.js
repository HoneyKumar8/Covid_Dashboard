import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Covid_Dashboard">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
 