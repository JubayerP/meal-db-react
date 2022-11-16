import React from "react";

const Meal = ({ meal , handleAddToCart}) => {
  const { idMeal, strMeal, strCategory, strMealThumb, strInstructions } = meal;


  return (
    <div>
      <div className="card w-80 h-[500px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={strMealThumb}
            alt="Meal"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
                  <h2 className="card-title">{ strMeal}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={()=>handleAddToCart(meal)}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
