import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Spinner from "./Spinner";

function Popular() {
  const [popular, setPopular] = useState([]);
  const [loading, setloading] = useState(true)
  const apiKey = "e8df2698559547e3b012c17a67bfa0fa";





  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=30`
    );
    const data = await api.json();
    setPopular(data.recipes);
    setloading(false)
  };

  return (
    <>
   <div className="container">
    <Heading className="my-4">POPULAR</Heading>
{loading && <h1><Spinner/></h1>}

        <Splide
          options={{
            perPage: 3,
            arrow: false,
            pagination : false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <img src={recipe.image ? recipe.image : "https://shmector.com/_ph/18/412122157.png"} alt={recipe.title}  />
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
    height : 18rem;
    width : 23rem;
border-radius : 3rem;

  }

`;

export default Popular;
