import React from "react";

interface Props {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab = ({ label, onClick, active }: Props) => {
  return (
    <li
      id="0"
      className={`
        relative
        inline-block
        md:block
        md:mb-4
        mx-4 
        text-2xl 
        font-normal
        cursor-pointer
        ${active? `text-main 
        before:content-[''] 
        before:w-[80px]
        before:h-[2px]
        before:bg-main
        before:absolute
        before:-bottom-1
        before:left-1/2
        before:-translate-x-1/2
        md:before:w-[3px]
        md:before:h-[40px]
        md:before:top-1/2
        md:before:-left-5
        md:before:-translate-y-1/2

        `: ''}
        `}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default Tab;
