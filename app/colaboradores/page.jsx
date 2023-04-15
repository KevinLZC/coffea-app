import Image from 'next/image'
import Cecilia from '../../public/Cecilia.jpg'
import Angeles from '../../public/Angeles.jpeg'
import User from '../../public/user.png'

export default function Colaboradores () {
  return (
    <>
      <div className='flex space-x-[75px] w-full'>
        <div className='rounded-2xl mt-10 flex flex-col items-center w-80 h-80 shadow-2xl'>
          <Image className='w-60 rounded-full translate-y-2' alt='Leonel' src={User} />
          <span className='translate-y-4'>Leonel Alejandro Ceballos Alvarado</span>
          <span className='text-sm translate-y-4'>Co-fundador de CLG</span>
        </div>
        <div className='rounded-2xl mt-10 flex flex-col items-center w-80 h-80 shadow-2xl'>
          <Image className='w-60 rounded-full translate-y-2' alt='Angeles' src={Angeles} />
          <span className='translate-y-4'>María de los Ángeles Gutiérrez Barajas</span>
          <span className='text-sm translate-y-4'>Co-fundadora de CLG</span>
        </div>
        <div className='rounded-2xl mt-10 flex flex-col items-center w-80 h-80 shadow-2xl'>
          <Image className='w-60 translate-y-2' alt='Kevin' src={User} />
          <span className='translate-y-4'>Kevin Lázaro Cernas</span>
          <span className='text-sm translate-y-4'>Co-fundador de CLG</span>
        </div>
      </div>
      <div className='rounded-2xl mt-10 flex flex-col items-center w-80 h-80 translate-x-[395px] shadow-2xl'>
        <Image className='w-60 rounded-full translate-y-2' alt='Cecilia' src={Cecilia} />
        <span className='translate-y-4'>Cecilia López Martínez</span>
        <span className='text-sm translate-y-4'>Co-fundadora de CLG</span>
      </div>
    </>
  )
}
