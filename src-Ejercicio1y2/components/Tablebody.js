import React from 'react';
import Deletebutton from './Deletebutton'

const Tablebody = () => {
  return (
    <div className="tbody">
      <div>
        <p>Luis</p><p>Programador</p><Deletebutton/>
        </div>
      <div>
        <p>Noelia</p><p>Profesora</p><Deletebutton/>
        </div>
      <div>
        <p>Ada</p><p>Cientifica</p><Deletebutton/>
        </div>
    </div>
  );
};

export default Tablebody;