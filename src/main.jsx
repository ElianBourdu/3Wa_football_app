import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { router } from './routing/routes.js'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  // </RouterProvider>
)
