import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
// import { Practice } from './Practice.jsx';
// import Profile from './Profile'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practice /> */}
    {/* <Profile /> */}
  </StrictMode>,
)
