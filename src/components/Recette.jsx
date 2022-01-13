import React, { Fragment } from "react";
import AffichageRecette from "./AffichageRecette";
export const Recette = (props) => {
  let ingredients = ["Farine ,    Beurre , Lait "];
  let etapes = [
    " Etape 1 : Mettre la farine dans un saladier ;",
    "Etape 2 : Incorporer les oeufs ;",
    "Etape 3 : Melanger le tout",
  ];
  return (
    <Fragment>
      <AffichageRecette
        nom="crepes"
        ingredients={ingredients}
        etapes={etapes}
      />
    </Fragment>
  );
};
export default Recette;
