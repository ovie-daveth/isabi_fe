import React, { ReactNode, useState } from 'react'
import logo from "@/assets/iSabiBook.png"
import logoIcon from "@/assets/image.png"
import img1 from "@/assets/Ellipse 21.png"
import img2 from "@/assets/Ellipse 22.png"
import img3 from "@/assets/Ellipse 23.png"
import img4 from "@/assets/Ellipse 24@2x.png"
import CheckIcon from '@mui/icons-material/Check';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const gains = ["Access content anywhere","Learn from qualified and accredited tutors", "Comprehensive learning experience","Access content anywhere"]

const AuthLayout = ({children, style, title}: {children: ReactNode, style?: string, title: string}) => {

  const [showForm, setShowForm] = useState(false)
  const handleShowForm = () => {
    setShowForm(!showForm)
  }
  return (
    <div className={`${style} container`}>
      <div className='flex flex-col xl:flex-row items-start lg:justify-between xl:gap-0 lg:gap-10 gap-32 '>
        <div className='xl:w-[40%] w-full'>
          <div className='flex gap-3 items-center'>
            <img src={logoIcon} alt="logo" className='w-9' />
            <img src={logo} alt="logo" className='w-40' />
          </div>
          <div className={`${showForm ? "xl:block hidden":"block"}`} style={{marginTop: 50}}>
            <div className="flex xl:flex-col flex-row justify-center xl:gap-0 gap-32 xl:items-start items-center">
            <div className='flex flex-col gap-10'>
              <h1 className='lg:text-8xl text-6xl font-bold'>{title}</h1>
              <p className='md:text-2xl text-xl max-w-[350px]'>Join a network of over 500 students for collaboration and motivation</p>
            </div>
            <div className='flex bg-gray-200 w-fit rounded-full' style={{paddingTop: 4, paddingBottom: 4, paddingLeft: 8, paddingRight: 8, marginTop: 50}}>
            <img src={img4} alt="student" className='w-16' />
            <img src={img2} alt="student" className='w-16' />
            <img src={img1} alt="student" className='w-16' />
            <img src={img3} alt="student" className='w-16' />
            <div className='bg-white rounded-full flex items-center justify-center h-16 w-16'>
              <span className='font-semibold md:text-xl text-lg'>+23</span>
            </div>
            </div>
            </div>
            <div className='flex flex-col xl:items-start items-center gap-5 ' style={{marginTop: 40}}>
              <h4 className='font-bold md:text-2xl text-xl header-text0'>What you stand to get;</h4>
              <ul className='flex items-start flex-col gap-2 text md:text-xl text-lg' style={{marginTop: 12}}>
                {
                  gains.map((item, idx) => (
                    <li key={idx} className='flex gap-4'><CheckIcon className='header-text' /> {item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='xl:w-[60%] w-full'>
        <button onClick={handleShowForm} className={`primary-bg text-white rounded-4xl w-[30%] flex items-center justify-between p-0 font-bold md:text-lg cursor-pointer hover:primary-hover-bg m-auto  ${showForm ? "hidden" : "block xl:hidden"}`} style={{marginTop: 50}}>
            <span className="pl-5 font-bold">Get Started</span>
            <span className="bg-white p-4 rounded-full text-lg"><ArrowOutwardIcon className="priamry-text font-bold " /></span>
          </button>
          <div className={`formbg xl:w-[80%] w-full rounded-4xl ${showForm ? "block" : "hidden xl:block"}`} style={{padding: 7}}>
         
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
