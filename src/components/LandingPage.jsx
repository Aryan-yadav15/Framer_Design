import '/src/customFonts.css';
import { CiLocationArrow1 } from "react-icons/ci";

import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker" key={index}> {/* Added key prop for uniqueness */}
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <div className="mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500"></div>
              )}

              <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75] font-['Founders_Grotesk']">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className='border-t-2 border-zinc-700 mt-16 flex justify-between items-center py-5 px-20'>
        {["For Public and Privete", "from to first pitch to iPO"].map((item, index) =>
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        )}
        <div className="start flex items-center">
          <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light flex items-center justify-center gap-3'>Get in Contact <CiLocationArrow1 /></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage