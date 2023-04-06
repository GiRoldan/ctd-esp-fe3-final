import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  // let favs = localStorage.getItem("dentistFav");
  // let parsedFavs = JSON.parse(favs);

  const { favState } = useContextGlobal();


  return (
    <>
      {favState && favState.length > 0 ? (
        <>
          <h1>Dentists Favs</h1>
          <div className="card-grid">
            {/* este componente debe consumir los destacados del localStorage */}
            {/* Deberan renderizar una Card por cada uno de ellos */}
            {!"favs"
              ? null
              : favState.map((f) => (
                  <Card
                    name={f.name}
                    username={f.username}
                    id={f.id}
                    showButton={false}
                  />
                ))}
            {console.log({ favState })}
          </div>
        </>
      ) : (
        <>
        </>
      )}
    </>
  );
};

export default Favs;
