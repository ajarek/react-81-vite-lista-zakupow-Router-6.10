import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link
        className='link'
        to={'/'}
      >
        Artykuły
      </Link>
      <Link
        className='link'
        to={'/zakupy'}
      >
        Zakupy
      </Link>
      <Link
        className='link'
        to={'/notatnik'}
      >
        Notatnik
      </Link>
    </nav>
  )
}

export default Nav
