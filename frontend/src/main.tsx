import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/all" replace />} />
        <Route element={<MainLayout />}>
          <Route path='/:category' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
