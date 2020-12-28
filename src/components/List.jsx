import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  width:30rem;
  background-color: skyblue;
  display:grid;
  margin: 3rem auto;
`
const Row = styled.div`
  border:1px solid black;
  display:grid;
  grid-template-columns:3fr 1fr;
  grid-template-rows:1.5rem;
`
const Cell = styled.div`
  border:1px solid maroon;
  background-color:lightgray;
`

const List = ({data}) => (
  <>
    <Container>
      {
        // data.map((datosArr)=>(
        //   <Row>
        //     <Cell>{datosArr.nombre} {datosArr.apellido}</Cell>
        //     <Cell>Del</Cell>
        //   </Row>
        // ))
      }
    </Container>
  </>
)

export default List