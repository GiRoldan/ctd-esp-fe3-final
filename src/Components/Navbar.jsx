import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <p>
        <span style={{ color: "red" }}>D</span>H Odonto
      </p>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <button className="back-btn" onClick={() => navigate(-1)}>↩</button>
        <Link to={routes.home}>
          <h3>Home</h3>
        </Link>
        <Link to={routes.contact}>
          <h3>Contact</h3>
        </Link>
        <Link to={routes.favs}>
          <h3>Favs</h3>
        </Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className="theme-btn">🌙</button>
      </nav>
    </div>
  );
};

export default Navbar;
