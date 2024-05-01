import React from 'react'

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black  ">
      <h1 className="font-['Neue_Montreal'] text-5xl">
      Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="w-full border-t-[1px] border-[#a4b45b] mt-14">
        <div className="w-1/2">
          <h1 className="text-8xl font-['Neue_Montreal'] font-medium mt-8">Our approach</h1>
          <button className="px-10 py-6 bg-zinc-700 mt-10 rounded-full text-white text-lg flex gap-5 items-center">Read more
          <div className='w-2 h-2 bg-zinc-200 rounded-full'></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About