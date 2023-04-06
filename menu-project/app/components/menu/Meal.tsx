"use client"

import Image from "next/image";

interface Props {
  title:string,
  price:number,
  desc:string,
  img:string,
}

const Meal = ({ title, price, desc, img }: Props) => {
  return (
    <>
      <div className="grid grid-cols-[225px_1fr] gap-5">
        <Image
          src={`/static${img}`}
          width="100"
          height="100"
          className={`
            border-4
            border-[#c59d5f]
            rounded
            justify-end
            w-full
            h-[150px]
            object-cover
            `}
          alt="meal-image"
          priority
        />
        <div className="details">
          <div className="flex justify-between border-b border-b-slate-500 border-dotted mb-3">
            <h6 className="font-bold">{title}</h6>
            <span className="text-[#c59d5f] font-bold">{price}</span>
          </div>
          <p className="text-slate-500">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default Meal;
