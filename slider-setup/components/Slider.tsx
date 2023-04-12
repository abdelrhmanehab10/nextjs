import { useState, useEffect } from "react";
import Slides from "./Slides";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

type reveiw = {
  id: number;
  img: string;
  name: string;
  title: string;
  review: string;
};

const reviews: reveiw[] = [
  {
    id: 0,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "Maria Ferguson",
    title: "Office Manager",
    review:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },

  {
    id: 1,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "SUSAN ANDERSEN",
    title: "The Boss",
    review:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.",
  },

  {
    id: 2,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "JOHN DOE",
    title: "Regular Guy",
    review:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },

  {
    id: 3,
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "PETER SMITH",
    title: "Product Designer",
    review:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
];

const Slider = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-around px-10 pt-10">
      <span className="bg-light p-1 rounded translate-y-40 cursor-pointer">
        <IoIosArrowBack
          className="text-white"
          onClick={() => setActive((prev) => prev - 1)}
        />
      </span>
      <Slides active={active} reviews={reviews} setActive={setActive} />
      <span className="bg-light p-1 rounded translate-y-40 cursor-pointer">
        <IoIosArrowForward
          className="text-white"
          onClick={() => setActive((prev) => prev + 1)}
        />
      </span>
    </div>
  );
};

export default Slider;
