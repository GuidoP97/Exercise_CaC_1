import React, { useState } from 'react'

const Formulario = ({datos, handleSubmit}) => {

  const [data, setData] = useState({ nombre: '', oficio: '' })

  const handleChange = (e) => {
    e.preventDefault()
    setData({...data,
      [e.target.name]: e.target.value})
    return(data)
  }

  const submitForm = (e) =>{
    e.preventDefault()
    return(
      handleSubmit(data)
    )
  }
  
  return (
    <form className="form" id="form"onSubmit={submitForm}>
      <label htmlFor="nombre">Nombre</label>
      <input 
        className="user_input"
        id="nombre"
        name="nombre"
        type="text"
        value={data.nombre}
        onChange={handleChange}
      />
      <label htmlFor="oficio">Oficio</label>
      <input 
        className="ofice_input"
        id="oficio"
        name="oficio"
        type="text"
        value={data.oficio}
        onChange={handleChange}
      />
      <input 
        className="button_input" 
        disabled={!(data.nombre && data.oficio)}
        type="submit"
      />
    </form>
  );
};

export default Formulario;