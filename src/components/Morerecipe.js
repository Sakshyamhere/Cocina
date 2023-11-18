import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import "../style/image.css";
import { Link } from "react-router-dom";

function Morerecipe() {
  const [morerecipe, setMorerecipe] = useState([]);

  const apiKey = "19c06f1f942c41bcaf6be5abedf29be2";

  useEffect(() => {
    getMorerecipe();
  }, []);

  const getMorerecipe = async () => {
  
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12`
    );
    const data = await api.json();
    const newRecipes = data.recipes;
    
    if (newRecipes.length > 2) {
      setMorerecipe(morerecipe.concat(newRecipes));
    } 

    
  };

  return (
    <>
      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={morerecipe.length} 
        next={getMorerecipe}
        hasMore={morerecipe.length <300}
        loader={
          <div className="container">
            <h1>
              <Spinner />
            </h1>
          </div>
        }
      >
        <div className="container">
          <Heading>OTHERS</Heading>
          <div className="row">
           
            <div className="img-container">
              {morerecipe.map((recipe) => (
                <div className="img-item" key={recipe.id}>
                  <Link to={"rid/" + recipe.id}>
                  <img
                    src={
                      recipe.image
                        ? recipe.image
                        : "https://shmector.com/_ph/18/412122157.png"
                    }
                    alt={recipe.title}
                    style={{
                      height: "20rem",
                      width : '25rem',
                      padding: "2rem",
                      borderRadius: "3rem",
                    }}
                  />
                  </Link>
                  <p className="text-center">{recipe.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;

export default Morerecipe;
