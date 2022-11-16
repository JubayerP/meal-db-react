import React from "react";

const Cart = ({ cart }) => {
  let mealName = '';
  for (const meal of cart) {
      mealName = meal.strMeal;
  }
  return (
    <div className="mt-10">
      <span className="text-2xl block">{mealName}</span>
    </div>
  );
};

export default Cart;
