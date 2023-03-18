'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  MdOutlineLightMode as MdLightMode,
  MdOutlineDarkMode as MdDarkMode,
} from 'react-icons/md'
import { TbMenu2 } from 'react-icons/tb'

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const style = { color: '#202023' }

  const handleClick = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <nav className=' fixed flex-wrap top-0 left-0 right-0 z-10 flex bg-dark-bg items-center justify-between px-5 pt-3 pb-2 max-w-4xl mx-auto'>
        <div>
          <Link href='/' className='text-2xl font-bold p-4'>
            Shravan
          </Link>
        </div>

        <div className=' flex space-x-8'>
          <div className='hidden md:inline-flex items-center space-x-8 text-xl'>
            <Link href='/' className='hover:underline '>
              Home
            </Link>
            <Link
              href='/projects'
              className='hover:underline focus:bg-teal p-2 rounded-md focus:text-dark-bg'
            >
              Projects
            </Link>
          </div>
          <div className='space-x-3'>
            <button className='bg-sunlight p-3 rounded-md'>
              <MdLightMode style={style} />
            </button>
            <button
              className='sm:hidden bg-dark-bg p-3 rounded-md border-gray-500 border-2'
              onClick={handleClick}
            >
              <TbMenu2 />
            </button>
          </div>
        </div>
        <div
          className={` w-48 bg-blue text-light-white absolute z-10 right-0 h-56 py-2 sm:hidden flex justify-center text-center text-2xl ${
            navbar
              ? 'top-16 right-2 rounded-md border-2 border-gray-600 opacity-95'
              : 'hidden'
          }`}
        >
          <div className='flex flex-col items-center justify-center space-y-4'>
            <div className='flex justify-start'>
              <Link href='/'>Home</Link>
            </div>
            <div>
              <Link href='projects'>Projects</Link>
            </div>
            <div>
              <Link href='/'>Skills</Link>
            </div>
            <div>
              <Link href='/'>About</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
