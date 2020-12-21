import React, { Component } from 'react';
import styled from 'styled-components' 

const FormStyle = styled.form`
  width:10rem;
  height: 12rem;
  border: 1px solid black;
  display:flex;
  flex-direction:column;
  margin:auto;
  padding:2rem;
`
const InputForm = styled.input`
  width:7rem;
  height:1rem;
  background-color:red;
  margin: 0.5rem 0 0.5rem;
`
const InputSubmit = styled.input`
  font-size: 1rem;
  outline:none;
  border-radius: 1rem;
  border: 1px dashed blue;
  width: 4rem;
  height: 1.5rem;
  margin-top:1.2rem;
`


class Form extends Component {

  state = {
    nombre: '',
    apellido: ''
  }

  handleInput = (e) => {
    this.setState({[e.target.name]:e.target.value})
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    return this.props.handleRecibir(this.state) //fallas
  }

  render(){
    return (
          <>
            <FormStyle onSubmit={this.handleSubmit}>
              <label>nombre</label>
              <InputForm onChange={this.handleInput} name="nombre" type="text"/>
              <label>apellido</label>
              <InputForm onChange={this.handleInput}  name="apellido" type="text"/>
              <InputSubmit type="submit" value="enviar"/>
            </FormStyle>
          </>
    )
  }
}

export default Form