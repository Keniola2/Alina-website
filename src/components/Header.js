import React, { useContext } from 'react';
import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'
import { CursorContext } from '../context/CursorContext';
import { Link } from 'react-router-dom';

const Header = () => {

  const {mouseEnterHandler, mouseLeaveHandler}=useContext(CursorContext)


  return <header className=' fixed top-0 left-0 w-full px-[30px] lg:px-[100px] z-30 h-[50px] lg:h-[130px] flex items-center '>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between ' >

  <Link
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  to={'/'} className='max-w-[200px]'>
  <img src={Logo} alt='logo' />
  </Link>
  <div className='flex flex-col lg:flex-row'>
  <nav
  onMouseEnter={mouseEnterHandler}
  onMouseLeave={mouseLeaveHandler}
  className='hidden xl:flex gap-x-12 font-semibold ' >
    <Link to={'/'} className=' text-[#696c6d] hover:text-primary transition'>
       Home  
      </Link>
      <Link to={'/about'} className=' text-[#696c6d] hover:text-primary transition'>
       About
      </Link>
      <Link to={'/portfolio'} className=' text-[#696c6d] hover:text-primary transition'>
      Portfolio  
      </Link>
      <Link to={'/contact'} className=' text-[#696c6d] hover:text-primary transition'>
       Contact  
      </Link>
  </nav>
 
  </div>

    </div>
   {/* socials */}
   <Socials/>
{/* mobile nav */}
<MobileNav className=' '/>
  </header>;
};

export default Header; 
