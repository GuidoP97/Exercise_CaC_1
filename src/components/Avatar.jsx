import React from 'react'
// import Pika from '../images/pika.png'

const Avatar = (props) => {
  return(
    <div className="avatar">
      <img src={props.user.img} alt={"Imagen de perfil"}/>
    </div>
  )
}

export default Avatar