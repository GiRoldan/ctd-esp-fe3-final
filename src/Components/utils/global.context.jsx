import { createContext, useContext, useEffect, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const url = "https://jsonplaceholder.typicode.com/users";
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, []);

  let dentistFav = localStorage.getItem("dentistFav");
  //let parsedFav = JSON.parse(dentistFav)
  // Renderiza un mismo favorito por cada card q se renderice!!! ojo!!!
  // console.log(parsedFav);

  useEffect(() => {
    let dentistFav = localStorage.getItem("dentistFav");
  }, []);

  return (
    <ContextGlobal.Provider value={{ value, setValue, dentistFav }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
