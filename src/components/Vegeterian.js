import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";


function Vegeterian() {
  const [Vegeterian, setVegeterian] = useState([]);
  const [loading, setloading] = useState(true)
  const apiKey = "e8df2698559547e3b012c17a67bfa0fa";





  useEffect(() => {
    getVegeterian();
  }, []);

  const getVegeterian = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipies/random?apiKey=${apiKey}&number=30&diet=Lacto-Vegetarian`
    );
    const data = await api.json();
    setVegeterian(data.recipies);
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
          {Vegeterian.map((recipie) => {
            return (
              <SplideSlide key={recipie.id}>
                <Card>
                  <Link to={"recipie/" + recipie.id}>
                  <img src={recipie.image ? recipie.image : "https://shmector.com/_ph/18/412122157.png"} alt={recipie.title}  />
                  </Link>
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
