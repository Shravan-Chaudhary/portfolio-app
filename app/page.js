import Image from 'next/image'
import stars from './assests/Stars.svg'
import astro from './assests/Astronaut.svg'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='max-w-xl mx-auto mt-16 h-screen flex flex-col'>
      <div className='h-1/4 px-4 mt-14 items-center'>
        <Image
          src={astro}
          alt='astro'
          height='auto'
          width='auto'
          className=' object-contain astro h-32 sm:h-40'
        />
      </div>

      <div className='h-3/4 px-4 items-center space-y-4'>
        <div>
          <div className='w-fit backdrop-blur-lg mx-auto  text-light-white h-fit px-10 py-3 sm:px-20 text-center text-2xl rounded-md opacity-95 space-y-2 border border-gray-200'>
            <h2 className='text-4xl sm:text-5xl'>{`Hi, I'm Shravan`}</h2>
            <p className='text-sm sm:text-xl'>
              (Full Stack Web Developer)
            </p>{' '}
          </div>
        </div>

        <div className='text-center'>
          <p className='text-lg sm:text-xl'>
            Hello and welcome to my portfolio website! My name is Shravan and I
            am a web developer with a passion for creating engaging and dynamic
            websites.
          </p>
        </div>
      </div>
    </div>
  )
}

//  <div className='max-w-xl mx-auto'>
//       <div className='flex flex-col h-1/2 text-center'>
//         <div className='para'>
//           <p></p>
//         </div>
//       </div>

//       <div className=' flex items-center h-3/6 flex-col px-5 '>
//         <div className='mx-auto mt-28'>
//           <Image
//             src={astro}
//             alt='astro'
//             height='auto'
//             width='auto'
//             className=' object-contain astro h-40'
//           />
//         </div>
//         <div className='absolute overflow object-contain mx-auto top-10 z-[-10] w-4/12 h-80 sm:h-1/2'>
//           <Image
//             src={stars}
//             alt='stars'
//             height='auto'
//             width='auto'
//             priority={true}
//             className=''
//           />
//         </div>
//         <div className='w-fit backdrop-blur-lg mt-20 sm:mt-24 mx-auto bg-light-gray text-light-white h-fit px-7 py-3 text-center text-2xl rounded-md opacity-95 space-y-2'>
//           <h2 className='text-4xl sm:text-5xl'>{`Hi, I'm Shravan`}</h2>
//           <p className='text-sm'>(Full Stack Web Developer)</p>
//         </div>
//       </div>
//     </div>
