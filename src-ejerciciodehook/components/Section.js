// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import Table from './Table'
import Formulario from './Formulario'
import Tablebody from './Tablebody'

/* class Section extends React.Component{
  render(){
    return(
      <section className="section">
        <div className="parrafo">
        <p>lLorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corporis nobis aliquam eos nihil. Quibusdam repudiandae rerum odio quae voluptate rem facilis expedita animi, ex adipisci dolorem impedit iure nisi.</p>
        </div>
        <Table/>
      </section>
    )
  }
} */


const Section = () => {

  const handleSubmit = () =>{
    useEffect(() => {
      return(
        <Tablebody oficio={data.oficio} nombre={data.nombre}/>
      )
    })
  }

  return(
    <section className="section">
      <Table/>
      <Formulario handleSubmit={handleSubmit}/>
    </section>
  )
}

export default Section