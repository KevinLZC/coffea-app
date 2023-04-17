import Image from 'next/image'
import logoV from '../public/LogoVertical.png'
import Link from 'next/link'
export function Footer () {
  return (
    <footer className=' bg-gray-100 flex justify-center lg:gap-40 md:gap-16 sm:gap-8 gap-4 items-center lg:h-48 md:h-32 text-gray-500 rounded-t-2xl md:mt-10 space-y-4'>
      <div>
        <Image className='lg:w-56 md:w-48 sm:w-24 w-20' alt='LogoHorizontal' src={logoV} />
      </div>
      <div className='lg:w-96 sm:w-80 w-40 text-center lg:text-xl md:text-lg sm:text-xs text-xs'>
        <span>Paul P Harris #31 col. Lomas Vista Hermosa 28016 Colima, Colima, México.</span>
      </div>
      <div className='flex flex-col items-center text-center lg:space-y-8 md:space-y-2 sm:space-x-1 lg:text-xl md:text-lg sm:text-xs text-xs'>
        <Link href='/colaboradores'>Colaboradores</Link>
        <Link href='/ubicacion'>Ubicación</Link>
        <Link href='/contacto'>Contacto</Link>
      </div>
      <div className='text-center lg:text-2xl md:text-xl sm:text-xs text-xs lg:w-96 md:w-64 w-32'>
        <span>"Somos el combustible para crear"</span>
      </div>
    </footer>
  )
}
