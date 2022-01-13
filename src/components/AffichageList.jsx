import React, { Fragment } from "react";
export const AffichageList = (props) => {
  // reutilisable car rendu generique donc on peut afficher des listes en appelant ce composant 
  return (
    <Fragment>
      <h1> Etapes de preparation</h1>
      <ul>
        {props.liste.map((element, i) => (
          <li key={i}> {element} </li>
        ))}
      </ul>
    </Fragment>
  );
};
export default AffichageList;
