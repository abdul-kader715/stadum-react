import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/css/themify-icons.css'
import '../src/styles/style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
