import React, { useContext } from 'react';
import WomanImg from '../img/home/woman.png'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';


const Home = () => {

  const {mouseEnterHandler, mouseLeaveHandler}=useContext(CursorContext)

  return <motion.section
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  className='section'>  
  <div className='container mx-auto h-full relative '>
    <div className='flex flex-col justify-center'>
      <motion.div
       initial={{opacity:0, y:'-50%'}}
       animate={{opacity:1, y:0 }}
       exit={{opacity:0, y:'-50%'}}
       transition={transition1}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      
      className='w-full  pt-20 pb-3 lg:pt-20 lg:pb-10 lg:w-auto z-10 lg:absolute lg:bottom-4 flex flex-col justify-center  items-center lg:items-start '>
        <h1 className='h1 '>
          Photographer <br/> & film maker
        </h1>
        <p className='text-[16px] lg:text-[20px] font-primary mb-4 lg:mb-12' >Los Angeles, USA </p>
        <Link to={'/contact'} className='btn mb-[30px]' >hire me</Link>
      </motion.div>
      <div className='flex justify-end max-h-90 lg:max-h-max pb-5'>
        <motion.div 
        initial={{scale:0}}
        animate={{scale:1}}
        exit={{scale:0}}
        transition={transition1}
        className='relative overflow-hidden lg:flex lg:justify-center  '>
          <motion.img
          whileHover={{scale:1.1}}
          transition={transition1}
          src={WomanImg} alt='photographer' className='lg:w-[80%]' />
        </motion.div>
      </div>
    </div>
  </div>

  </motion.section>;
};

export default Home;
