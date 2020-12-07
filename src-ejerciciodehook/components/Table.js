import React, {Component} from 'react'
import Tablebody from './Tablebody'
import Tablehead from './Tablehead'

class Table extends Component{
  render(){
    return(
      <div className="table">
        <Tablehead/>
        <Tablebody/>
      </div>
    );
  }
}

export default Table