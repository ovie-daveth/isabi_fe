import React, { useState } from 'react'
import Logo from '@/components/atoms/logo';
import streak from "@/assets/fire.png"
import board from "@/assets/board-icon.png"
import notififyIcon from "@/assets/svg-icon.png"


const menus = [
    {
      id: 1,
      name: "Overview"
    },
    {
      id: 2,
      name: "Subjects"
    },
    {
      id: 3,
      name: "Exam Preparation"
    },
    {
      id: 4,
      name: "Report"
    },
  ]

const TopHeader = () => {
    const [active, setActive] = useState(1)

    
  const handleNavigation = (id: number) => {
    setActive(id)
  }

  return (
    <div className="flex flex-wrap sm:gap-10 gap-5 justify-between items-center self-stretch w-full max-md:max-w-full">
        <div className="flex flex-wrap sm:gap-16 gap-5 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <div className="flex gap-3 items-center self-stretch my-auto">
            <Logo /> 
          </div>
          <nav className={`flex sm:flex-wrap items-center sm:self-stretch my-auto sm:text-base font-semibold text-black sm:gap-0 gap-5 `}>
           {
            menus.map((item) => (
              <button onClick={() => handleNavigation(item.id)} className={`overflow-hidden sm:gap-2.5 self-stretch sm:px-8 sm:py-3.5 my-auto whitespace-nowrap rounded-[100px] sm:max-md:px-5 px-2  ${active === item.id ? "bg-slate-900 text-white" : ""}`}>
              {item.name}
            </button>
            ))
           }
          </nav>
        </div>
        <div className="flex gap-8 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex gap-5 justify-between items-center self-stretch my-auto w-[177px]">
            <div className="flex gap-1.5 items-center self-stretch my-auto text-base font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src={streak}
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                alt=""
              />
              <div className="self-stretch my-auto">0</div>
            </div>
            <div className="flex gap-1.5 items-center self-stretch my-auto text-base font-semibold text-black whitespace-nowrap">
              <img
                loading="lazy"
                src={board}
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                alt=""
              />
              <div className="self-stretch my-auto">320</div>
            </div>
            <div className="flex justify-center self-stretch my-auto w-6 min-h-[24px]">
              <img
                loading="lazy"
                src={notififyIcon}
                className="object-contain flex-1 shrink w-6 aspect-square basis-0"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto w-9">
            <div className="flex flex-col justify-center w-full rounded-2xl max-w-[36px] min-h-[36px]">
              <div className="flex overflow-hidden flex-1 justify-center items-center rounded-2xl size-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/e925627fa4404be68784e8320bcd6258/12fb02a3dde9a7d5cee9317d3b2b0c2f32bff6c619bbd527ad3448b87665a574?apiKey=e925627fa4404be68784e8320bcd6258&"
                  className="object-contain flex-1 shrink self-stretch my-auto w-full rounded-2xl aspect-square basis-0 max-w-[36px]"
                  alt="User avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TopHeader