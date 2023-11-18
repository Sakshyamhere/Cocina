import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Ofcategory() {
    const [ofCategory, setofCategory] = useState([]);
    const params = useParams()
    const apiKey = "19c06f1f942c41bcaf6be5abedf29be2";
  
    useEffect(() => {
      getofCategory(params.category);
    }, [params.category]);
  
    const getofCategory = async (cuisine) => {
    
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisine}`
      );
      const data = await api.json();
      const newRecipes = data.results;
      setofCategory(newRecipes);
     
  
      
    };
  return (
    <div>
          <div className='container'>
       <div className="row">
           
           <div className="img-container">
      {
        ofCategory.map((results) => 
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
    </div>
  )
}

export default Ofcategory