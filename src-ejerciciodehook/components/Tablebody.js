import React from 'react';
import Deletebutton from './Deletebutton'

const Tablebody = ({oficio, nombre}) => {
  return (
    <div className="tbody">
      <div>
        <p>{nombre}</p><p>{oficio}</p><Deletebutton/>
      </div>
    </div>
  );
};

export default Tablebody;