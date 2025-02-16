import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../context/store";
import { setActiveTab } from "../../../context/slices/navigation-slice";

const menus = [
    {
      id: 1,
      name: "Study Packages"
    },
    {
      id: 2,
      name: "My Subjects"
    },
    {
      id: 3,
      name: "Study History"
    }
  ]

const Navigation = () => {
    const dispatch = useDispatch<AppDispatch>();
    const activeTab = useSelector((state: RootState) => state.navigation.activeTab);
    
  return (
    <div className="flex gap-6 items-center md:mt-2.5 mt-10 text-base font-semibold tracking-tight text-black max-md:max-w-full mb-5 md:px-5 px-2">
        {
            menus.map((item) => (
                <button  onClick={() => dispatch(setActiveTab(item.id))} className={`overflow-hidden gap-2.5 self-stretch md:px-8 py-5 my-auto font-semibold text-black rounded-2xl px-3 ${activeTab === item.id ? "bg-zinc-100" : ""}`}>
                    {item.name}
                </button>
            ))
        }
      </div>
  )
}

export default Navigation
