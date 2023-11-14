import React from 'react'
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';
import Recipie from '../components/Recipie';

function Pages() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/recipie/:recipie" element={<Recipie/>}></Route>
      </Routes>
      
      </div>
  )
}

export default Pages