import React from 'react'
import { GiNoodles, GiFullPizza, GiHamburger, GiCoolSpices } from "react-icons/gi";
import { Link } from 'react-router-dom';


function Category() {
  return (
    <div className='container text-center'>
      <span>
        <Link to='/category/Japanese' style={{color : 'black'}}>
          <GiNoodles className='m-4' style={{ borderRadius: '70px', fontSize: '4rem', background: "white" }} />
        </Link>
      </span>
      <span>
        <Link to='/category/Italian' style={{color : 'black'}}>
          <GiFullPizza className='m-4' style={{ borderRadius: '70px', fontSize: '4rem', background: "white" }} />
        </Link>
      </span>
      <span>
        <Link to='/category/American' style={{color : 'black'}}>
          <GiHamburger className='m-4' style={{ borderRadius: '70px', fontSize: '4rem', background: "white" }} />
        </Link>
      </span>
      <span>
        <Link to='/category/Indian' style={{color : 'black'}}>
          <GiCoolSpices className='m-4' style={{ borderRadius: '70px', fontSize: '4rem', background: "white" }} />
        </Link>
      </span>
    </div>
  )
}

export default Category