import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {value} = useContextGlobal();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {value.map((value) =>
          <Link key={value.id} to={`/dentist/${value.id}`} >
            <Card name={value.name} username={value.username} id={value.id} />
          </Link>
        )}
      </div>
    </main>
  )
}

export default Home