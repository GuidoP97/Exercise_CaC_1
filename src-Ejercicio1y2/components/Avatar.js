import React from 'react'
// import Pika from '../images/pika.png'

const Avatar = (props) => {
  return(
    <div className="avatar">
      <img src={props.user.img}/>
    </div>
  )
}

export default Avatar