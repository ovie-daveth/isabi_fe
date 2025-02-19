import { useState } from 'react'
import Logo from '../atoms/logo'
import { Button } from '../ui/button'
import CustomButton from '../atoms/button'
import { useNavigate } from 'react-router-dom'

const menus = [
  {
    id: 1,
    name: "Home"
  },
  {
    id: 2,
    name: "About"
  },
  {
    id: 3,
    name: "Courses"
  },
  {
    id: 4,
    name: "Pricing"
  },
  {
    id: 5,
    name: "Contact"
  },
]
const Header = () => {

  const navigate = useNavigate()
  
  const [active, setActive] = useState(1)

  const [openMenu, setOpenMenu] = useState(false)

  const [selectedMenu, setSelectedMenu] = useState(menus[0]); // Default to 'Home'

  const handleMenuIDUpdate = (id: number) => {
    const newMenu = menus.find((item) => item.id === id);
    if (newMenu) {
      setSelectedMenu(newMenu);
      setOpenMenu(false); // Close the menu after selection
    }
  };
  const handleMenuUpdate = (id: number) => {
    setActive(id)
  }

  
  return (
    <div className='flex items-center justify-between z-50 xl:pl-2 xl:mr-20'>
      <div>
        <Logo />
      </div>
      <div className='lg:flex hidden items-center gap-5'>
        {
          menus.map((item) => (
            <Button onClick={() => handleMenuUpdate(item.id)} variant={active === item.id ? `default`: "ghost"} className={` py-2 px-5 h-12 rounded-full flex items-center gap-3 border-[1px]`} key={item.id}>
              <span>{item.name}</span>
             {
              active === item.id &&  <span className='w-3 h-3 rounded-full bg-white'></span>
             }
            </Button>
          ))
        }
      </div>
      <div className="block lg:hidden z-50">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="flex items-center border-b border-primary py-2"
      >
        <span className="text-lg">{selectedMenu.name}</span>
      </button>

      {openMenu && (
        <div className="absolute sm:left-1/2 left-0 sm:right-[unselt] right-0 sm:-translate-x-[60%] flex flex-col items-center gap-20 bg-white sm:min-h-[500px] shadow-lg p-2 rounded-lg sm:w-[320px] w-full mt-10 justify-center pb-10">
          {menus
            .filter((item) => item.id !== selectedMenu.id) // Hide selected menu
            .map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuIDUpdate(item.id)}
                className="h-12 flex items-center hover:border-primary hover:border-b transition"
              >
                <span>{item.name}</span>
              </button>
            ))}
        </div>
      )}
    </div>
      <div className='items-center gap-3 hidden sm:flex'>
        <CustomButton fn={() => navigate("/auth/login")} title="Sign in to your account" variant='secondary' />
      </div>
      <div className='items-center gap-3 flex sm:hidden'>
        <CustomButton fn={() => navigate("/auth/login")} title="Sign in" variant='secondary' />
      </div>
    </div>
  )
}

export default Header