import React from 'react'
import ReactDOM from 'react-dom/client'
// importaciones de redux
import { Provider } from 'react-redux'
// importaciones de react-router-dom
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
    
    
  </React.StrictMode>,
)
