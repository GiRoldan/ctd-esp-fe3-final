import { useReducer } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const themes = {
  dark: {
    theme: false,
    // bgColor: 'black',
    // color: 'white'
  },
  light: {
    theme: true,
    // bgColor: 'white',
    // color: 'black'
  },
};

const initialThemeState = themes.light;

// export const initialState = { theme: "", data: [] };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_DARK":
      return themes.dark;
    case "SWITCH_LIGHT":
      return themes.light;
    default:
      throw new Error();
  }
};

const initialFavState = JSON.parse(localStorage.getItem("favs")) || [];
console.log(initialFavState);

const favReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    default:
      throw new Error();
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [value, setValue] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, []);
  //   console.log('soy el log de context' + value);
  //   console.log('soy el log de value.name ' + value.name);

  //   console.log('soy el log de value:', value);
  // if (value.length > 0) {
  //   value.forEach(obj => console.log(`name: ${obj.name}, id: ${obj.id}`));
  // }

  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState
  );

  const [favState, favDispatch] = useReducer(favReducer, initialFavState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favState));
  }, [favState]);

  console.log("soy favState " + favState);

  return (
    <ContextGlobal.Provider
      value={{
        value,
        setValue,
        themeState,
        themeDispatch,
        favState,
        favDispatch,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
