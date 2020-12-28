import React, { Component } from 'react'
import Form from './components/Form'
import List from './components/List'
// import styled, {createGlobalStyle} from 'styled-components' 


class App extends Component {

  state = {}

  datosArr = []

 handleRecibir = (datos) => {
    this.setState({datos})
    if(datos !== ''){
      this.datosArr.push(this.state.datos)
    }
    console.log(this.datosArr);
    return this.datosArr
 }

  render() {
    return (
            <>
              <Form handleRecibir={this.handleRecibir}/>
              <List data={this.datosArr} />
            </>)
}
}

export default App