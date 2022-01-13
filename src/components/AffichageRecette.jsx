import React, { Fragment } from "react";
import AffichageList from "./AffichageList";
export const AffichageRecette = (props) => {
  return (
    <Fragment>
      <h1> composant fils : AffichageRecette et composant parent = recette </h1>
      <h4>Recette : {props.nom}</h4>
      <AffichageList nomList="liste ingredients" liste={props.ingredients} />
      <AffichageList nomList="liste etapes" liste={props.etapes} />
    </Fragment>
  );
};
export default AffichageRecette;
