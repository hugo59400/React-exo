import React, { Fragment, useState } from "react";
import Creationn from "./Creationn";
export const AfficheCreationn = (props) => {
  // son fils c CREATION ici c le parent
  // detruire composant avec bouton
  let [affiche, setAffiche] = useState(true);

  const handleClick = (e) => {
    e.stopPropagation();
    setAffiche(!affiche);
  };

  return (
    <Fragment>
      {affiche && <Creationn affiche={affiche} />}

      <button type="button" onClick={handleClick}>
        cacher composant complet{" "}
      </button>
    </Fragment>
  );
};
export default AfficheCreationn;
