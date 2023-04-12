import Image from "next/image";
import React, { SetStateAction, useCallback, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";

type reveiw = {
  id: number;
  img: string;
  name: string;
  title: string;
  review: string;
};

interface Props {
  active: number;
  reviews: reveiw[];
  setActive: React.Dispatch<SetStateAction<number>>;
}

const Slides = ({ active, reviews, setActive }: Props) => {
  const positionOfSlide = (reviewId: number) => {
    const activeSlide = `translate-x-0`;
    const nextSlide = `translate-x-[500px]`;
    const lastSlide = `-translate-x-[500px]`;
    let position = nextSlide;
    if (active === reviewId) position = activeSlide;
    if (
      reviewId === active - 1 ||
      (active === 0 && reviewId === reviews.length - 1)
    )
      position = lastSlide;

    return position;
  };

  useEffect(() => {
    const lastIndex = reviews.length - 1;
    if (active < 0) {
      setActive(lastIndex);
    }
    if (active > lastIndex) {
      setActive(0);
    }
  }, [active, reviews, setActive]);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setActive(active === reviews.length - 1 ? 0 : active + 1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [active, setActive, reviews]);

  return (
    <div className="relative w-full">
      {reviews.map((review) => (
        <div
          key={review.id}
          className={`
          ${positionOfSlide(review.id)}
          absolute
          text-center 
          flex 
          flex-col
          items-center
          transition
          `}
        >
          <Image
            src={review.img}
            alt="profile-pic"
            width="150"
            height="150"
            className="w-[150px] h-[150px] object-cover border-4 border-light rounded-full"
          />
          <h2 className="text-main text-sm font-bold uppercase tracking-wider pt-5">
            {review.name}
          </h2>
          <p className="text-xs">{review.title}</p>
          <p className="pt-10 text-light">{review.review}</p>
          <FaQuoteRight size={40} className="text-main mt-5" />
        </div>
      ))}
    </div>
  );
};

export default Slides;
