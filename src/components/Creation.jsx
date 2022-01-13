import React, { Fragment, useEffect, useState } from "react";

export const Creation = (props) => {
    let [compteur,setCompteur]=useState(0)
    //creation composant affiche vivant dans clg 
    useEffect( () =>{
        console.log("vivant")
    }, []);
// incremente compteur 
const handleClick=(e)=>{
    setCompteur(++compteur)
}
//verifier de la maj de letat du composant et du cpt 
useEffect( () =>{
    console.log('maj du composant CREATION ')
},[compteur])

//verifier de la suppr dun composant 
useEffect( () =>{
    return ()=>{
        console.log("a mort les composants ")
    }
},[]);

  return (
    <Fragment>
      <div>
        <h1>COMPOSANT CREATION :</h1>
        <p>coucou </p>
        <p>laffichge est a : {props.affiche && "true"} </p>
        <p>jen suis a {compteur}</p>
        <button type="button" onClick={handleClick}>incremCPT </button>
      </div>
    </Fragment>
  );
};
export default Creation;
