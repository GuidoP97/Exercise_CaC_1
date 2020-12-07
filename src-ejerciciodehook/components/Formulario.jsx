import React, {useState} from 'react';

const Formulario = ({handleSubmit}) => {
  const [data, setData] = useState({
                                    nombre: '', 
                                    oficio: ''
                                  });
  
  const handleChange = (e) => {
    // spread operator
    setData({...data, 
      [e.target.value]: e.target.value});
  }
// formspree
  const envioForm= (e) => {
    alert(`Los datos ingresados son: ${data.nombre} y ${data.oficio}`)
  }

  return(
    <form className="form" onSubmit={envioForm}>
      <label htmlFor="nombre">Nombre</label>
      <input 
        className="user_input"
        id="nombre"
        name="nombre" 
        onChange={handleChange}
        type="text" 
        value={data.nombre} 
      />
      <label htmlFor="oficio">Oficio</label>
      <input 
        className="ofice_input"
        id="oficio"
        name="oficio" 
        onChange={handleChange}
        type="text" 
        value={data.oficio} 
      />
      <input 
        className="button_input" 
        type="submit"
        onClick={handleSubmit}
      />
    </form>
  )
}

export default Formulario