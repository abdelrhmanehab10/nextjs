"use client"

const Header = () => {
  return (
        <h1 className={`
        text-4xl 
        font-bold 
        text-[#102a42] 
        text-center 
        mt-12 
        relative
        before:content-['']
        before:bg-[#c59d5f]
        before:w-[80px]
        before:h-[4px]
        before:absolute
        before:-bottom-[12px]
        before:left-1/2
        before:-translate-x-1/2
        `}
        >Our Menu</h1>
  )
}

export default Header