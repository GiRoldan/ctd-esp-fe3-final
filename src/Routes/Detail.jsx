import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // const { value } = useContextGlobal();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  console.log(id + "soy paramsId");

  const [dentist, setDentist] = useState({
    id: "",
    name: "",
    email: "",
    address: {},
    phone: "",
    website: "",
    company: {},
  });
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setDentist(data));
  }, []);
  // }, [url]);

  console.log("dentist: " + dentist);
  console.log("dentist.id: " + dentist.id);
  console.log("dentist.name: " + dentist.name);

  return (
    // <button onClick={() => navigate('/')}>Volver al Home</button>

    <>
      <h1>Detail Dentist {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Website</th>
          </tr>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Detail;
