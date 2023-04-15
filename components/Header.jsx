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
    <header className='absolute flex items-center justify-between z-50 w-full pl-44 pr-44 pt-10 bg-white'>
      <Image className='w-56' alt='LogoHorizontal' src={LogoHorizontal} />
      <nav>
        <ul className='flex gap-14'>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link className='hover:text-orange-400 font-semibold text-lg' href={route}> {label} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
