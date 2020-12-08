import React, {Component} from 'react'
import Tablebody from './Tablebody'
import Tablehead from './Tablehead'

class Table extends Component{
  render(){
    return(
      <table className="table">
        <Tablehead/>
        <Tablebody datos={this.props.datos}/>
      </table>
    );
  }
}

export default Table