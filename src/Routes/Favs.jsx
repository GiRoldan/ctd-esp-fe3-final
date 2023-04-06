import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { favState, favDispatch } = useContextGlobal();
  
  const clearFavs = () => {
    favDispatch({ type: "CLEAR_FAV" });
  };

  return (
    <>
      {favState && favState.length > 0 ? (
        <>
        {<button className="delete-favs-btn" onClick={clearFavs}>Remove all</button>}
        <br />
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
