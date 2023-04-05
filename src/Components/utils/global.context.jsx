import { createContext, useContext, useEffect, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [value, setValue] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setValue(data));
  }, []);
  console.log('soy el log de context' + value);
  console.log('soy el log de value.name ' + value.name);

  console.log('soy el log de value:', value);
if (value.length > 0) {
  value.forEach(obj => console.log(`name: ${obj.name}, id: ${obj.id}`));
}

  return (
    <ContextGlobal.Provider value={{ value, setValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
