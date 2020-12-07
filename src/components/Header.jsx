import React from 'react'
import '../styles/header.css'
import NombreUsuario from './NombreUsuario'
import Avatar from './Avatar';


const Header = () => {
   const user = {
    name: 'Raul',
    lastName: 'El 6º Hokage',
    img: "https://s1.eestatic.com/2017/08/30/ciencia/medio-ambiente/Cambio_climatico-Ola_de_calor-Calor-Temperaturas-Estados_Unidos-Medio_ambiente_242987491_44739008_1024x576.jpg"
  };

  return (
    <header className="header">
      <h1 className="h1">Striata</h1>
      <NombreUsuario user={user}/>
      <Avatar user={user}/>
    </header>
  )
}

export default Header;