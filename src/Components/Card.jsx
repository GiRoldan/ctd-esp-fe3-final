import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, showButton }) => {

  const urlById = `https://jsonplaceholder.typicode.com/users/${id}`;

  let favs = localStorage.getItem("dentistFav");
  console.log(JSON.parse(favs));
  const [dentistSelectedById, setDentistSelectedById] = useState({});

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    if (favs) {
      let parsedFavs = JSON.parse(favs);
      favs = [...parsedFavs, dentistSelectedById];
    } else {
      favs = [dentistSelectedById];
    }
    console.log(
      "Adding to favs the dentist id number: " +
        dentistSelectedById.id +
        ". See the information below: "
    );
    console.log(dentistSelectedById);
    localStorage.setItem("dentistFav", JSON.stringify(favs));
    alert("You add a new dentist to your favs! 😊");
  };

  console.log("Antes " + urlById);

  useEffect(() => {
    fetch(urlById)
      .then((res) => res.json())
      .then((data) => setDentistSelectedById(data));
  }, []);
  // }, [urlById, dentistSelectedById]);
  //Esta línea sirve para que se actualice el localStorage cada vez q se agrega un nuevo fav
  //El problema es:
  // si la agrego se renderiza infinitas veces la app, la consola no para!!
  // si NO la agrego, entonces cdo agrego favoritos, algunos se agregan al array y otros se pisan, es decir no todos se agregan

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
