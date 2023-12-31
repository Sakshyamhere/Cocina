import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Searched() {
  const [search, setsearch] = useState({results : []})
  const apiKey = "19c06f1f942c41bcaf6be5abedf29be2";
  const params = useParams();


  useEffect(() => {
    getsearch(params.search);
  }, [params.search]);

  const getsearch = async (searchParam) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchParam}`
    );
    const data = await api.json();
    console.log(data)
    setsearch(data);
  };

  return (
  <div className='container'>
       <div className="row">
           
           <div className="img-container">
      {
        search.results.map((results) => 
        (
          <div className="img-item" key={results.id}>
          <Link to={"/rid/" + results.id}>
          <img
            src={
              results.image
                ? results.image
                : "https://shmector.com/_ph/18/412122157.png"
            }
            alt={results.title}
            style={{
              height: "20rem",
              width : '25rem',
              padding: "2rem",
              borderRadius: "3rem",
            }}
          />
          </Link>
          <p className="text-center">{results.title}</p>
        </div>
        )
        )
      }
      </div>
      </div>
      </div>
    
  )
}

export default Searched