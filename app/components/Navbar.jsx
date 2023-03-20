'use client'
import useColorMode from '@/hooks/useColorMode'
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
  const [colorMode, setColorMode] = useColorMode('dark')
  const lightIconstyle = { color: '#202023' }
  const darkIconstyle = { color: '#6B46C1' }
  const menuStyle = { color: '#313134' }
  const menuStyle2 = { color: '#E2E8F0' }

  const handleClick = () => {
    setNavbar(!navbar)
  }

  return (
    <>
      <nav className=' fixed flex-wrap top-0 left-0 right-0 z-10 flex backdrop-blur-sm items-center justify-between px-5 pt-3 pb-2 max-w-4xl mx-auto bg-nav-color dark:bg-dark-bg'>
        <div>
          <Link
            href='/'
            className='text-2xl font-bold drop-shadow-lg p-4 text-dark-bg dark:text-light-white'
          >
            Shravan
          </Link>
        </div>

        <div className=' flex space-x-8'>
          <div className='hidden md:inline-flex items-center space-x-6 text-xl'>
            <Link
              href='/about'
              className='hover:underline focus:bg-teal p-2 rounded-md focus:text-dark-bg text-dark-bg dark:text-light-white'
            >
              About
            </Link>
            <Link
              href='/skills'
              className='hover:underline focus:bg-teal p-2 rounded-md focus:text-dark-bg text-dark-bg dark:text-light-white'
            >
              Skills
            </Link>
            <Link
              href='/projects'
              className='hover:underline focus:bg-teal p-2 rounded-md focus:text-dark-bg text-dark-bg dark:text-light-white'
            >
              Projects
            </Link>
            <Link
              href='/contact'
              className='hover:underline focus:bg-teal p-2 rounded-md focus:text-dark-bg text-dark-bg dark:text-light-white'
            >
              Contact
            </Link>
          </div>

          {/* ToggleMode Button */}
          <div className='sm:hidden space-x-3'>
            {colorMode === 'dark' ? (
              <button
                className='bg-sunlight p-3 rounded-md'
                onClick={() =>
                  setColorMode(colorMode === 'light' ? 'dark' : 'light')
                }
              >
                <MdLightMode style={lightIconstyle} />
              </button>
            ) : (
              <button
                className='bg-purple p-3 rounded-md'
                onClick={() =>
                  setColorMode(colorMode === 'light' ? 'dark' : 'light')
                }
              >
                <MdDarkMode className='fill-light-white' />
              </button>
            )}
            <button
              className='sm:hidden bg-menu-button-color dark:bg-dark-bg p-3 rounded-md border-menu-button-color dark:border-gray-500 border-2'
              onClick={handleClick}
            >
              <TbMenu2 style={colorMode === 'dark' ? menuStyle2 : menuStyle} />
            </button>
          </div>
        </div>

        {/* Menu Container */}
        <div
          className={` w-48 bg-menu-color dark:bg-blue  text-light-white absolute z-10 right-0 h-56 py-2 sm:hidden flex justify-center text-center text-2xl ${
            navbar
              ? 'top-16 right-2 rounded-md border-2 border-gray-600 opacity-95'
              : 'hidden'
          }`}
        >
          <div
            className='flex flex-col items-center justify-center space-y-4'
            onClick={handleClick}
          >
            <div className='text-dark-bg dark:text-light-white'>
              <Link href='/about'>About</Link>
            </div>
            <div className='text-dark-bg dark:text-light-white'>
              <Link href='/skills'>Skills</Link>
            </div>
            <div className='text-dark-bg dark:text-light-white'>
              <Link href='/projects'>Projects</Link>
            </div>
            <div className='text-dark-bg dark:text-light-white'>
              <Link href='/contact'>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
