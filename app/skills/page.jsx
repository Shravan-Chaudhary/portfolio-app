import { Inter } from 'next/font/google'
import { IoLogoHtml5 } from 'react-icons/io5'
import { IoLogoCss3 } from 'react-icons/io5'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaNpm } from 'react-icons/fa'
import Button from '../components/Button'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

function Skills() {
  const style = { color: '' }
  return (
    <div className='max-w-xl mx-auto pt-24 h-full flex flex-col bg-body-color dark:bg-dark-bg'>
      {/* Half Page Container */}
      <div className='h-1/2 flex flex-col justify-center space-y-6 sm:space-y-8 items-center'>
        {/* Skills Heading Container */}
        <div className='w-fit backdrop-blur-lg mx-auto text-dark-bg dark:text-light-white drop-shadow-lg h-fit px-8 py-2 sm:px-12 text-center text-2xl opacity-95 space-y-2 border-b border-footer-color'>
          <h2 className='text-4xl font-semibold'>Skills</h2>
        </div>

        {/* Paragraph Container */}
        <div className='text-justify max-w-lg p-3 px-6 space-y-4'>
          <p className='text-xl sm:text-2xl font-regular dark:font-light leading-relaxed text-dark-bg dark:text-light-white'>
            As a web developer, my skill set is constantly evolving to keep up
            with the latest trends and technologies in the industry. Here are
            the technologies and tools I am proficient in.
            <br />
            <br />
            <span className='font-semibold'>Currently Learning:</span> NodeJs
            and ExpressJs.
          </p>
        </div>

        {/* Skills Icons Container */}
        <div className='flex  space-x-4 flex-wrap justify-center'>
          <IoLogoHtml5
            style={style}
            className='w-12 h-12 sm:w-16 sm:h-16 fill-light-gray dark:fill-light-white dark:bg-inherit'
          />
          <IoLogoCss3
            style={style}
            className='w-12 h-12 sm:w-16 sm:h-16 fill-light-gray dark:fill-light-white dark:bg-inherit'
          />
          <TbBrandJavascript
            style={style}
            className='w-12 h-12 sm:w-16 sm:h-16 fill-light-gray dark:fill-dark-bg  dark:bg-dark-bg'
          />
          <SiTailwindcss
            style={style}
            className='w-12 h-12 sm:w-16 sm:h-16 fill-light-gray dark:fill-light-white dark:bg-inherit'
          />
          <FaReact
            style={style}
            className='w-12 h-12 sm:w-16 sm:h-16 fill-light-gray dark:fill-light-white dark:bg-inherit'
          />
          <SiNextdotjs
            style={style}
            className='w-12 h-12 sm:w-16 sm:h-16 fill-light-gray dark:fill-light-white dark:bg-inherit'
          />
        </div>

        {/* Tools Divider Container */}
        <div className='flex space-x-3'>
          <hr className='h-px w-20 sm:w-28 my-4 bg-gray-200 border-0 dark:bg-footer-color' />
          <h3 className='text-xl sm:text-2xl'>Tools</h3>
          <hr className='h-px w-20 sm:w-28 my-4 bg-gray-200 border-0 dark:bg-footer-color' />
        </div>

        {/* Tools Icons Container */}
        <div className='flex space-x-6 flex-wrap justify-center'>
          <FaGitAlt
            style={style}
            className=' w-12 h-12 sm:w-16 sm:h-16 fill-light-gray dark:fill-light-white dark:bg-inherit'
          />
          <FaGithub
            style={style}
            className='fill-light-gray dark:fill-light-white dark:bg-inherit w-12 h-12 sm:w-16 sm:h-16 '
          />
          <FaNpm
            style={style}
            className='fill-light-gray dark:fill-light-white dark:bg-inherit w-12 h-12 sm:w-16 sm:h-16'
          />
        </div>
        {/* Projects Button Container */}
        <div className='flex w-full items-center justify-center pt-5 sm:pt-10'>
          <Button>Projects</Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Skills
