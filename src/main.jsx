import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Payment from './Pages/Payment/Payment.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
