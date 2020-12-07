import React from 'react'

const NombreUsuario = (props) => {
  return (
    <div className="nombreUsuario">
      <h4>
        Hola, {props.user.name} {props.user.lastName}
      </h4>      
    </div>
  )
}

export default NombreUsuario