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
    <header className='relative flex items-center justify-between w-full lg:pl-44 lg:pr-44 md:pl-24 md:pr-24 sm:pl-10 sm:pr-10 pt-2 pb-0 pl-2 pr-2 bg-white m-0'>
      <Image className='lg:w-56 md:w-44 sm:w-36 w-24 lg:pr-8 md:pr-8 sm:pr-8' alt='LogoHorizontal' src={LogoHorizontal} />
      <nav>
        <ul className='flex lg:gap-14 md:gap-12 sm:gap-4 gap-3'>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link className='hover:text-orange-400 focus:text-orange-400 font-semibold lg:text-lg md:text-base sm:text-base text-sm' href={route}> {label} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
