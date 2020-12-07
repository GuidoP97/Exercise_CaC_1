import React, {Component} from 'react'
import Table from './Table'

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

export default Section