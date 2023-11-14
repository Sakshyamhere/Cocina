import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import "../style/image.css";
import { Link } from "react-router-dom";

function Morerecipe() {
  const [moreRecipie, setMorerecipe] = useState([]);

  const apiKey = "e8df2698559547e3b012c17a67bfa0fa";

  useEffect(() => {
    getMorerecipe();
  }, []);

  const getMorerecipe = async () => {
    // if (moreRecipie.length > 30){
    //   return false;
    // }
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12`
    );
    const data = await api.json();
    const newRecipes = data.recipes;
    
    if (newRecipes.length > 2) {
      setMorerecipe(moreRecipie.concat(newRecipes));
    } 

    
  };

  return (
    <>
      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={moreRecipie.length} 
        next={getMorerecipe}
        hasMore={moreRecipie.length <300}
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
              {moreRecipie.map((recipie) => (
                <div className="img-item" key={recipie.id}>
                  <Link to={"recipie/" + recipie.id}>
                  <img
                    src={
                      recipie.image
                        ? recipie.image
                        : "https://shmector.com/_ph/18/412122157.png"
                    }
                    alt={recipie.title}
                    style={{
                      height: "20rem",
                      padding: "2rem",
                      borderRadius: "3rem",
                    }}
                  />
                  </Link>
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
