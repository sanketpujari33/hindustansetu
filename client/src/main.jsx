import { StrictMode } from 'react'
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './i18n/translations.jsx';
import { store } from './Redux/store.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </StrictMode>,
)
