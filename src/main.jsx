import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyProvider from './router/Router'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider/>
  </StrictMode>,
)
