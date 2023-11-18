import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RId() {
  const [information, setInformation] = useState("Ingredients");
  const [rId, setRId] = useState({});
  const apiKey = "19c06f1f942c41bcaf6be5abedf29be2";
  const params = useParams();

  useEffect(() => {
    getRId(params.rid);
  }, [params.rId]);

  const getRId = async (recipeid) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${recipeid}/information?apiKey=${apiKey}`
    );
    const data = await api.json();
    console.log(data);
    setRId(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="image flex-column d-flex m-4">
              <img
                src={rId.image}
                alt="recipe"
                style={{ borderRadius: "14px", alignItems: "center" }}
              />
              <h2 className="text-center mt-4">{rId.title}</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-row">
              <button
                type="button"
                className={`btn btn-outline-dark m-4 ${
                  information === "Ingredients" ? "active" : ""
                }`}
                onClick={() => {
                  setInformation("Ingredients");
                }}
              >
                Ingredients
              </button>
              <button
                type="button"
                className={`btn btn-outline-dark m-4 ${
                  information === "Instruction" ? "active" : ""
                }`}
                onClick={() => {
                  setInformation("Instruction");
                }}
              >
                Instruction
              </button>
            </div>{" "}
            {information === "Instruction" && (
              <>
                <h4
                  style={{ textAlign: "justify" }}
                  dangerouslySetInnerHTML={{ __html: rId.instructions }}
                ></h4>
              </>
            )}
            {information === "Ingredients" &&
              rId &&
              rId.extendedIngredients && (
                <ul>
                  {rId.extendedIngredients.map((extendedIngredients, index) => (
                    <li key={index}><h5>{extendedIngredients.original}</h5></li>
                  ))}
                </ul>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RId;
