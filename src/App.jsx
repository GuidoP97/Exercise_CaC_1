import React, { Component } from 'react'
import Form from './components/Form'
import List from './components/List'
// import styled, {createGlobalStyle} from 'styled-components' 


class App extends Component {

  state = {}

 handleRecibir = (datos) => {
    this.setState({datos}) 
    return this.state
 }

  render() {
    return (
            <>
              <Form handleRecibir={this.handleRecibir}/>
              <List data={[this.state]} />
            </>)
}
}

export default App