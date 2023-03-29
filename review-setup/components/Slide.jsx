import { useState } from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import data from "../public/static/data.js";
const Slide = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const generateRandomNum = () => {
    let randomNum = Math.floor(Math.random() * data.length);
    return randomNum;
  };
  console.log(activeSlide);
  return (
    <div key={data[activeSlide].id} className="mt-24 text-center">
      <div className="profile-pic w-fit	m-auto relative before:content-[' '] before:absolute before:rounded-full 
          before:-z-10 before:bg-primary before:left-3 before:-top-1 before:w-[9rem] before:h-[9rem]">
        <Image
          src={data[activeSlide].img_path}
          alt="profile-pic"
          className="m-auto rounded-full"
          width="300"
          height="300"
          style={{ width: "9.3rem", height: "9.3rem", objectFit: "cover" }}
        ></Image>
        <span
          className="w-10 h-10 absolute top-0 bg-primary flex items-center justify-center rounded-full"
        >
          <FaQuoteRight size={16} color="white" />
        </span>
      </div>
      <h6 className="mt-5 font-semibold text-lg">{data[activeSlide].name}</h6>
      <p className="text-blue-400">{data[activeSlide].title}</p>
      <p className="my-2 text-gray-500">{data[activeSlide].review}</p>
      <div className="arrows flex justify-center items-center gap-2">
        <MdKeyboardArrowLeft
          className="text-primary opacity-60 cursor-pointer transition-all hover:opacity-100"
          size={35}
          onClick={() =>
            activeSlide === 0 ? "" : setActiveSlide((prev) => prev - 1)
          }
        />
        <MdKeyboardArrowRight
          className="text-primary opacity-60 cursor-pointer transition-all hover:opacity-100"
          size={35}
          onClick={() =>
            activeSlide === 3 ? "" : setActiveSlide((prev) => prev + 1)
          }
        />
      </div>
      <button
        type="button"
        className="text-primary rounded px-2 transition-all hover:bg-primary hover:text-white"
        onClick={() => setActiveSlide(generateRandomNum)}
      >
        Surprise Me
      </button>
    </div>
  );
};

export default Slide;
