import React, { useState } from 'react'
import '../styles/section.css'
import Table from './Table'
import Formulario from './Formulario'

const Section = () => {

  const [datos, setDatos] = useState([])

  const handleSubmit = (user) => {
    setDatos([...datos, user])
    return(datos)
  }

  return(
    <section className="section">
      <Table datos= {datos}/>
      <Formulario handleSubmit={handleSubmit} datos= {datos}/>
    </section>
  )
}

export default Section