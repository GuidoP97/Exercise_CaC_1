import React from 'react';
import Deletebutton from './Deletebutton'
import {generate as id} from "shortid";


const Tablebody = ({datos}) => {
  return (
    <tbody className="tbody">
        {datos.map((datos) =>(
          <tr className="tbody_row" key={id()}>
            <td><p>{datos.nombre}</p></td>
            <td><p>{datos.oficio}</p></td>
            <td><Deletebutton/></td>
          </tr>
        ))}
    </tbody>
  );
};

export default Tablebody;