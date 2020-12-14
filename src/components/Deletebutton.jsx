import React, {useEffect} from 'react';

const Deletebutton = () => {

/*   const handleDelete = (e) =>{
    console.log(e.target.parentElement.parentElement)
    return(
      e.target.parentElement.parentElement.remove()
      )
    } */
    
  return (
      <button className="dbutton" onClick={handleDelete}>Delete</button>
  );
};

export default Deletebutton;