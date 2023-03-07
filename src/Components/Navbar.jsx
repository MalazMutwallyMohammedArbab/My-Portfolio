import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'
import Quotes from './Quotes'


export default function Navbar() {
  return (
    <div className='font-regu font-semibold container'>
      {/* For Computer */}
      <div className='hidden lg:block lg:flex lg:justify-between lg:items-center lg:mt-9'>
        <div className='text-3xl text-orange font-cairo flex-start'>Portfolio</div>

        <div className='flex justify-evenly w-[44%] text-xl absolute right-[25%] font-normal'>
          <NavLink className="border-b-2 border-orange hover:text-orange transition ease-out duration-500" to="/" >Home</NavLink>
          <NavLink className="border-b-2 border-white hover:text-orange hover:border-orange transition ease-out duration-500" to="/notebooks">Notebooks</NavLink>
          <NavLink className="border-b-2 border-white hover:text-orange hover:border-orange transition ease-out duration-500" to="/skills">Skills</NavLink>
          <NavLink className="border-b-2 border-white hover:text-orange hover:border-orange transition ease-out duration-500" to="/projects">Projects</NavLink>
          <NavLink className="border-b-2 border-white hover:text-orange hover:border-orange transition ease-out duration-500" to="/contact">Contact</NavLink>
        </div>

        <div className='text-xl w-[30%] absolute left-[3%] text-center hover:text-orange z-[20]'><Quotes /></div>
      </div>

      {/* For Mobile */}
      <div className='lg:hidden border-b p-3 flex justify-between items-center'>
        <div className='text-3xl text-orange font-cairo'>Portfolio</div>        
        <Navigation />
      </div>
    </div>
  )
}
