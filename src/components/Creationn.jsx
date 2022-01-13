import React, { Fragment, useEffect, useState } from "react";

export const Creationn = (props) => {
  let [compteur, setCompteur] = useState(0);
  let [compteur2, setCompteur2] = useState(0);

  useEffect(() => {
    console.log("creation du compteur 1 et 2 jpense ");
  }, []);
  // incremente compteur 1
  const handleClick = (e) => {
    setCompteur(++compteur);
    console.log("increment de cpt1");
  };

  // incremente compteur 2
  const handleClickCpt2 = (e) => {
    setCompteur2(++compteur2);
    console.log("increment de cpt2");
  };

  // DEcremente compteur 2
  const decremCpt2 = (e) => {
    setCompteur2(--compteur2);
    console.log("cpt 2 decremente");
  };

  // DEcremente compteur 1
  const decremCpt1 = (e) => {
    setCompteur(--compteur);
    console.log("decrement de cpt1");
  };

  //verifier de la maj de letat du composant et du cpt
  useEffect(() => {
    console.log("creation  ");
  }, []);

  //verifier de la maj de letat du composant et du cpt 2
  useEffect(() => {
    console.log("composant modifie ");
  }, [compteur]);

  //verifier de la suppr dun composant dans clg
  useEffect(() => {
    return () => {
      console.log("destruction  ");
    };
  }, []);

  useEffect(() => {
    document.title = `compteur1 : ${compteur} ; compteur2 : ${compteur2}`;
  }, [compteur, compteur2]);

  useEffect(() => {
    document.title = `compteur1 : ${compteur} ; compteur2 : ${compteur2}`;
  }, [compteur2]);

  return (
    <Fragment>
      <div>
        <h1>COMPOSANT CREATION exo a faire :</h1>

        <p>l'affichge est a : {props.affiche && "true"} </p>
        <p>compteur 1 : {compteur}</p>
        <p>compteur 2 : {compteur2}</p>
        <button type="button" onClick={handleClick}>
          incremCPT1{" "}
        </button>
        <button type="button" onClick={handleClickCpt2}>
          incremCPT2{" "}
        </button>

        <button type="button" onClick={decremCpt1}>
          DECREMENT CPT1{" "}
        </button>
        <button type="button" onClick={decremCpt2}>
          DECREMENT CPT2{" "}
        </button>
      </div>
    </Fragment>
  );
};
export default Creationn;
