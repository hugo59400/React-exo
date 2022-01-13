import React, { Fragment, useState } from "react";
import AjoutUtilisateur from "./AjoutUtilisateur";

export const ListeUtilisateur = () => {
  // etat : tab nommé utilisateurs  via un hook
  let [utilisateurs, setUtilisateur] = useState([]);

  // ajout user dans tab utilisateurs avec fonction hndlesubmit
  const handleSubmit = (utilisateur) => {
    let newUser = [...utilisateurs];
    newUser.push(utilisateur);
    setUtilisateur((utilisateur = newUser));
  };
// SUPPRIMER ELEM DANS TAB
  const handleEffacer = (e) => {
    e.stopPropagation()
    setUtilisateur([])
  };

  return (
    <Fragment>
        <h1>COMPOSANT LISTE USERS</h1>
      <h3>liste users </h3>
      <button onClick={handleEffacer}>SUPPR TT </button>
      <ul>
        {utilisateurs.map((item, index) => (
          <li key={index}> Nom : {item.nom} ,Prenom :{item.prenom} , Age : {item.age} </li>
        ))}
      </ul> 
      <AjoutUtilisateur handleSubmit={handleSubmit} />
    </Fragment>
  );
};

export default ListeUtilisateur;
