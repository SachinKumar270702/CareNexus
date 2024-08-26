import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

import SignIn from './components/SignIn/SignIn.jsx'
import Hospital from './components/Hospital/Hospital.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> } >
      <Route path='/home' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='register' element={<SignIn/>} />
      <Route path='Hospitals' element={<Hospital/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
