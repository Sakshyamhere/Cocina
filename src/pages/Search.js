import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

function Search() {
const nav = useNavigate()
const [value, setValue] = useState('')
    const handelSearch = (e) => {
        e.preventDefault();
        nav('/search/' + value )
    }
    const handelChange = (e) => {
       
        setValue(e.target.value)
    }

  return (
    <div className='d-flex'>
      <span>
        <Link to='/' style={{color : 'black'}}>
      <FaHome className='m-3 mt-4' style={{fontSize : '3rem' , borderRadius: '100px' , background : 'white'}}/>
      </Link>
      </span>
        <form onSubmit={handelSearch} className="d-flex container" role="search" style={{width : '40rem', marginTop : '20px' , padding : '10px' , height : '4rem' }}>
        <input onChange={handelChange} value={value} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  )
}

export default Search