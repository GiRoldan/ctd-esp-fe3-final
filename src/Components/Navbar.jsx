import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button onClick={() => navigate(-1)}>↩</button>
      <Link to={routes.home}><h3>Home</h3></Link>
      <Link to={routes.contact}><h3>Contact</h3></Link>
      <Link to={routes.favs}><h3>Favoritos</h3></Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar