import Link from 'next/link'
import Image from 'next/image'
import LogoHorizontal from '../public/LogoHorizontal.png'

const links = [{
  label: 'Inicio',
  route: '/'
}, {
  label: 'Espacios',
  route: '/espacios'
}, {
  label: 'Ubicación',
  route: '/ubicacion'
}, {
  label: 'Contacto',
  route: '/contacto'
}, {
  label: 'Colaboradores',
  route: '/colaboradores'
}]

export function Header () {
  return (
    <header className='relative rounded-b-xl flex items-center justify-between w-full lg:pl-16 lg:pr-16 md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 pl-4 pr-4 bg-white m-0 shadow-lg'>
      <Image className='lg:w-80 md:w-44 sm:w-36 w-24' alt='LogoHorizontal' src={LogoHorizontal} />
      <nav>
        <ul className='flex lg:gap-14 md:gap-10 sm:gap-4 gap-3'>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link className='hover:text-orange-400 focus:text-orange-400 font-semibold lg:text-2xl md:text-base sm:text-base text-sm' href={route}> {label} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
