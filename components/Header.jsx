import Link from 'next/link'
import styles from '../styles/Header.module.css'

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
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>COFFEA (Logo)</li>
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
