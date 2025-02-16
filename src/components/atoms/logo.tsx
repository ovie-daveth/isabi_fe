import React, { useEffect, useState } from 'react'
import logo from "@/assets/iSabiBook.png";
import logoIcon from "@/assets/image.png";

const Logo = () => {

  return (
    <div className="flex lg:gap-3 gap-2 items-center">
        <img src={logoIcon} alt="logo" className="xl:w-9 w-6" />
        <img src={logo} alt="logo" className={`xl:w-40 lg:w-28 w-28 sm:block hidden`}  />
    </div>
  )
}

export default Logo