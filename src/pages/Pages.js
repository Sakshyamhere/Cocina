import React from 'react'
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';
import RId from '../components/RId';
import Search from './Search';
import Searched from '../components/Searched';
import Category from './Category';
import Ofcategory from '../components/Ofcategory';


function Pages() {
  return (
    <div>
      <Search/>
      <Category/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/category/:category" element={<Ofcategory/>}></Route>
      {/* rid : recipe id */}
      <Route path='/search/:search' element={<Searched/>} />
      <Route path="/rid/:rid" element={<RId/>}></Route>
      </Routes>
      
      </div>
  )
}

export default Pages