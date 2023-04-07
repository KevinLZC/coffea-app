import Link from 'next/link'

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
    <header className=''>
      <nav>
        <ul className='flex gap-8 p-5 ml-96 pl-96'>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}> {label} </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
