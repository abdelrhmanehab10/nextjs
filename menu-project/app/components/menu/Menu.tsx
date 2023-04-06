"use client";

import Meals from "./Meals";
import MEALS from "../../../public/static/data";
import { useCallback, useEffect, useState } from "react";

interface Meal {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const Menu = () => {
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>(MEALS);

  function handleFilterClick(event: React.MouseEvent<HTMLLIElement>) {
    filter(event.currentTarget.innerText.toLowerCase());
  }

  function filter(selectedFilter: string) {
    console.log(selectedFilter);

    selectedFilter === "all"
      ? setFilteredMeals(MEALS)
      : setFilteredMeals(
          MEALS.filter((item) => item.category === selectedFilter.toLowerCase())
        );
  }

  return (
    <>
      <ul className="text-center mt-16">
        <li
          className={`
            inline-block
            mx-5
            text-lg 
            text-[#c59d5f] 
            transition
            px-4
            py-0.5 
            cursor-pointer
            hover:bg-[#c59d5f]
            hover:text-white
            hover:rounded
            `}
          onClick={handleFilterClick}
        >
          All
        </li>
        <li
          className={`
            inline-block
            mx-5
            text-lg 
            text-[#c59d5f] 
            transition
            rounded
            px-4
            py-0.5 
            cursor-pointer
            hover:bg-[#c59d5f]
            hover:text-white
            `}
          onClick={handleFilterClick}
        >
          Breakfast
        </li>
        <li
          className={`
            inline-block
            mx-5
            text-lg 
            text-[#c59d5f] 
            transition
            rounded
            px-4
            py-0.5 
            cursor-pointer
            hover:bg-[#c59d5f]
            hover:text-white
            `}
          onClick={handleFilterClick}
        >
          Lunch
        </li>
        <li
          className={`
            inline-block
            mx-5
            text-lg 
            text-[#c59d5f] 
            transition
            rounded
            px-4
            py-0.5 
            cursor-pointer
            hover:bg-[#c59d5f]
            hover:text-white
            `}
          onClick={handleFilterClick}
        >
          Shakes
        </li>
      </ul>
      <Meals meals={filteredMeals} />
    </>
  );
};

export default Menu;
