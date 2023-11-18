import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";


function Vegeterian() {
  const [Vegeterian, setVegeterian] = useState([]);
  const [loading, setloading] = useState(true)
  const apiKey = "19c06f1f942c41bcaf6be5abedf29be2";

  useEffect(() => {
    getVegeterian();
  }, []);

  const getVegeterian = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=30`
    );
    const data = await api.json();
    setVegeterian(data.recipes);
    setloading(false)
  };

  return (
    <>
   <div className="container">
    <Heading className="my-4">VEGETARIAN</Heading>
{loading && <h1><Spinner/></h1>}

        <Splide
          options={{
            perPage: 4,
            arrow: false,
            pagination : false,
            drag: "free",
            gap: "2rem",
          }}
        >
          
          {Vegeterian.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"rid/" + recipe.id}>
                  <img src={recipe.image ? recipe.image : "https://shmector.com/_ph/18/412122157.png"} alt={recipe.title}  />
                  </Link>
                  <p className="text-center">{recipe.title}</p>
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      
        </div>
    </>
  );
}

const Heading = styled.h1 `
text-align : center;
`


const Card = styled.div`

padding : 2rem;


  img {
    height : 20rem;
    width : 18rem;
border-radius : 3rem;

  }

`

export default Vegeterian;
