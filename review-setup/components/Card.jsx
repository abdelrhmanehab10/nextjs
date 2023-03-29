import Slide from "./Slide";

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center  shadow-lg p-5 w-1/2">
      <h2 className="text-4xl text-gray-800 relative font-bold before:content-[''] before:w-2/5 before:h-1 before:bg-gray-800 before:absolute before:-bottom-3 before:left-1/2 before:-translate-x-1/2">
        Our Reviews
      </h2>
      <Slide />
    </div>
  );
};

export default Card;
