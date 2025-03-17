import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/about" element={<About />}></Route>
  </>
  )
);


const App = () => {
  return(
    <RouterProvider router={router} />
  )
  
  
}

export default App