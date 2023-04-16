import Image from 'next/image'
import home from '../public/Home.jpg'
import wifi from '../public/wifi.png'
import cookie from '../public/cookie.png'
import flor from '../public/flor-de-loto.png'
import laptop from '../public/laptop.png'

export default function HomePage () {
  return (
    <>
      <div>
        <div className='flex'>
          <div className='mt-12 lg:w-[900px] md:w-[500px] w-[300px] lg:pl-56 md:pl-28 pl-10 sm:translate-x-8'>
            <span className='lg:text-[136px] md:text-7xl text-5xl text-left lg:translate-y-10 font-serif'>"Somos el combustible para crear"</span>
          </div>
          <Image className='rounded-full h-40 w-40 translate-y-10 translate-x-6 sm:h-48 sm:w-48 sm:rounded-full sm:translate-x-28 sm:translate-y-4 md:h-60 md:rounded-lg lg:h-[450px] lg:w-[450px] lg:translate-x-72 lg:translate-y-8' alt='Inicio' src={home} />
        </div>
        <div className='relative w-0 h-0 md:w-36 md:h-36 md:translate-x-40 md:-translate-y-12 lg:w-64 lg:h-64 lg:translate-x-[680px] lg:-translate-y-48 ml-96 -mt-36 bg-gradient-to-b from-black to-gray-500 rounded-full border-solid border-white lg:border-[35px] md:border-[20px]' />
      </div>
    </>
  )
}
