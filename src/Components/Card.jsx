import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import doctor from "../imagenesPrueba/doctor.jpg";
//import doctor from "../images/doctor.jpg";

import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, showButton }) => {
  const { value } = useContextGlobal;
  // console.log(value);

  const urlById = `https://jsonplaceholder.typicode.com/users/${id}`;

  //let dentistFav = localStorage.getItem('dentistFav')
  //let parsedFav = JSON.parse(dentistFav)
  // Renderiza un mismo favorito por cada card q se renderice!!! ojo!!!
  // console.log(parsedFav);

  let favs = localStorage.getItem('dentistFav')
  console.log(JSON.parse(favs));
  const [dentistSelectedById, setDentistSelectedById] = useState({})

  const addFav = () => {
       // Aqui iria la logica para agregar la Card en el localStorage
       if(favs){
        let parsedFavs = JSON.parse(favs)
          favs = [...parsedFavs, dentistSelectedById]
       } else {
          favs = [dentistSelectedById]
       }
      console.log('Adding to favs the dentist id number: ' + dentistSelectedById.id + '. See the information below: ')
      console.log(dentistSelectedById);
      localStorage.setItem('dentistFav', JSON.stringify(favs))
      alert('You add a new dentist to your favs! 😊')
  };

  useEffect(() => {
    fetch(urlById)
      .then((res) => res.json())
      .then((data) => setDentistSelectedById(data));
    console.log(dentistSelectedById);
  }, [dentistSelectedById]);

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* <div key={id}>
          <img className="card-img"  src={doctor}  alt="Doctor" width={200}/>
          <h3>{name}</h3>
          <h2>{username}</h2>
        </div> */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link key={id} to={`/dentist/${id}`}>
        <div key={id}>
          <img className="card-img" src='/images/doctor.jpg' alt="Doctor" width={180} />
          <h3>{name}</h3>
          <h2>{username}</h2>
          {/* <img src="/images/DH.png" alt="" /> */}
        </div>
      </Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {showButton && (
      <button onClick={addFav} className="favButton">
        ✨ Add fav ✨
      </button>
      )}
    </div>
  );
};

export default Card;
