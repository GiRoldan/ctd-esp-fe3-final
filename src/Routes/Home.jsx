import React from 'react'
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
        {console.log({value})}
        {value.map((item) =><Card name={item.name} username={item.username} id={item.id} showButton={true}/>)}  

      </div>
    </main>
  )
}

export default Home