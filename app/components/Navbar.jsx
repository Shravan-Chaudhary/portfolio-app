import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  MdOutlineLightMode as MdLightMode,
  MdOutlineDarkMode as MdDarkMode,
} from 'react-icons/md'

function Navbar() {
  const style = { color: '#202023' }

  return (
    <nav className='fixed'>
      <div className='flex items-center justify-between px-5 pt-4 pb-2 max-w-6xl mx-auto'>
        <div>
          <Link href='/' className='text-2xl font-bold p-4'>
            Shravan
          </Link>
        </div>

        <div className='space-x-8'>
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
          <button className='bg-sunlight p-3 rounded-md'>
            <MdLightMode style={style} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
