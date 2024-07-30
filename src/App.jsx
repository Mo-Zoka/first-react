import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';

let x = createHashRouter([
  { path: '/', element: <Layout />, children: [
    { index: true , element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'portfolio', element: <Portfolio /> },
    { path: 'contact', element: <Contact /> },
    { path: '*', element: <Notfound /> }
  ] }
])

function App() {
  
  return (
    <RouterProvider router={x}></RouterProvider>
  )
}

export default App
