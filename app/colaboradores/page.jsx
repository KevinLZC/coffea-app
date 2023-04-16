import Image from 'next/image'
import Cecilia from '../../public/Cecilia.jpg'
import Angeles from '../../public/Angeles.jpeg'
import User from '../../public/user.png'

export default function Colaboradores () {
  return (
    <>
      <div className='flex flex-col mb-4'>
        <div className='lg:flex lg:mr-[450px] lg:ml-[450px] md:gap-10'>
          <div className='rounded-2xl min-w-[320px] mt-10 w-80 md:w-80 lg:w-80 flex flex-col items-center shadow-2xl mr-auto ml-auto'>
            <Image className='w-60 rounded-full' alt='Leonel' src={User} />
            <span>Leonel Alejandro Ceballos Alvarado</span>
            <span className='text-sm'>Co-fundador de CLG</span>
          </div>
          <div className='rounded-2xl mt-10 min-w-[320px] w-80 flex flex-col items-center shadow-2xl mr-auto ml-auto'>
            <Image className='w-60 mt-2 mb-2 rounded-full' alt='Angeles' src={Angeles} />
            <span>María de los Ángeles Gutiérrez Barajas</span>
            <span className='text-sm'>Co-fundadora de CLG</span>
          </div>
        </div>
        <div className='lg:flex lg:mr-[450px] lg:ml-[450px] md:gap-10'>
          <div className='rounded-2xl mt-10 min-w-[320px] w-80 flex flex-col items-center shadow-2xl mr-auto ml-auto'>
            <Image className='w-60 rounded-full' alt='Kevin' src={User} />
            <span>Kevin Lázaro Cernas</span>
            <span className='text-sm'>Co-fundador de CLG</span>
          </div>
          <div className='rounded-2xl mt-10 min-w-[320px] w-80 flex flex-col items-center shadow-2xl mr-auto ml-auto'>
            <Image className='w-60 mt-2 mb-2 rounded-full' alt='Cecilia' src={Cecilia} />
            <span>Cecilia López Martínez</span>
            <span className='text-sm'>Co-fundadora de CLG</span>
          </div>
        </div>
      </div>
    </>
  )
}
