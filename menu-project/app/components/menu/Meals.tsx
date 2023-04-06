"use client"
import React from "react";
import Meal from "./Meal";

interface Props {
  meals: {
    id: number;
    title: string;
    price: number;
    desc: string;
    img: string;
  }[];
}

const Meals = ({ meals }: Props) => {
  return (
    <div className="w-[90%] m-auto grid grid-cols-2 sm:grid-cols-1 gap-10 mt-20 ">
      {meals.map((meal) => (
        <Meal
          key={meal.id}
          title={meal.title}
          price={meal.price}
          desc={meal.desc}
          img={meal.img}
        />
      ))}
    </div>
  );
};

export default Meals;
