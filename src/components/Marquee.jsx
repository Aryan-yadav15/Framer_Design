import { motion } from 'framer-motion'
import React from 'react'
import '/src/customFonts.css';
const Marquee = () => {
  return (
    <div className='w-full bg-[#481E14] py-20 rounded-tl-3xl rounded-tr-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-10 overflow-hidden'>
        <motion.h1 initial={{x:"-10%"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat: Infinity , duration:5}} className="text-[18vw] leading-none font-['Founders_Grotesk'] uppercase font-semibold -mb-14 pt-10">Aryan Yadav</motion.h1>
        <motion.h1 initial={{x:"-10%"}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat: Infinity , duration:5}} className='text-[18vw] leading-none  font-["Founders_Grotesk"] uppercase font-semibold -mb-14 pt-10'>Aryan Yadav</motion.h1>
      </div>
    </div>
  )
}

export default Marquee 