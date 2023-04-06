import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, showButton }) => {

  const {favDispatch, favState} = useContextGlobal()

  const urlById = `https://jsonplaceholder.typicode.com/users/${id}`;

  const [dentistSelectedById, setDentistSelectedById] = useState({});

  const addFav = () => {
    const existFav = favState.find((f) => f.id === dentistSelectedById.id);

    if (existFav) {
      alert('Warning! ⚠️\nYou can not add a dentist that is already in your favorites list.');
    } else {
    favDispatch({type: 'ADD_FAV', payload: dentistSelectedById})
      alert('Congratulations! ✅\nYou add a new dentist to your favs! 😊');
    }
  };

  console.log("Antes " + urlById);

  useEffect(() => {
    fetch(urlById)
      .then((res) => res.json())
      .then((data) => setDentistSelectedById(data));
  }, []);

  console.log(dentistSelectedById);
  console.log("Después del fetch urlById " + urlById);
  console.log(dentistSelectedById);
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link key={id} to={`/dentist/${id}`}>
        <div key={id}>
          <img
            className="card-img"
            src="/images/doctor.jpg"
            alt="Doctor"
            width={180}
          />
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
