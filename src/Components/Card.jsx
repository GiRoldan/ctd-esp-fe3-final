import React from "react";
import doctor from '../imagenesPrueba/doctor.jpg';


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <div key={id}>
          <img className="card-img"  src={doctor}  alt="Doctor" width={200}/>
          <h3>{name}</h3>
          <h2>{username}</h2>
        </div>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
