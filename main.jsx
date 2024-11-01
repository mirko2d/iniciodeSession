import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './context/contextProvider.jsx'
import App from './app.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ContextProvider>
            <App />
      </ContextProvider>
  </StrictMode>,
)