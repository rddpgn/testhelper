import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import AppController from "./layouts/app/AppController";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppController />
  </React.StrictMode>
)
