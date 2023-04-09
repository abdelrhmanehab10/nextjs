import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
type Content = {
  title: string;
  name: string;
  date: string;
  li: string[];
};

interface Props {
  content: Content;
}

const Content = ({ content }: Props) => {
  return (
    <div className="self-start p-16 text-left">
      <h2 className="text-xl tracking-wider">{content.title}</h2>
      <h4 className="text-secondary text-base font-bold m-3">{content.name}</h4>
      <p className="text-secondary ml-1 text-sm tracking-widest">
        {content.date}
      </p>
      <ul className="my-5">
        {content.li.map((li: string) => (
          <li className="mt-5 grid grid-cols-[5%_95%] items-center gap-5 text-sm text-slate-700" key={li}>
            <BsFillArrowRightCircleFill size={20} className="text-main"/>{li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
