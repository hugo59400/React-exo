import React, { Fragment } from "react";
import PropTypes from "prop-types";
export const User = (props) => {
  return (
    <Fragment>
      <h1>composant USER : descriptif de mon user </h1>
      <p>nom: {props.nom}</p>
      <p>prenom: {props.prenom}</p>
      <p>age: {props.age} ans</p>
    </Fragment>
  );
};
// typer variable et les rendree obligatoire si on veut
User.propTypes = {
  nom: PropTypes.string.isRequired,
  prenom: PropTypes.string,
  age: PropTypes.number,
};
// verifier le type dune donnee dans un composant ici user
// verifier dans la console navigateur
User.propTypes = {
  // param de la fonction nom du champ , props , composantName
  nom: function (props, nom, User) {
    if (typeof props[nom] == "number") {
      return new Error(` prop invalide  ${nom} pour ${User} `);
    }
  },
};

// affiche sur chrome les infos ci dessous pas besoin de remplir les champs dans <User> lors de l'appel dans App.jsx
User.defaultProps = {
  nom: "testNom",
  prenom: "bob",
  age: 42,
};

export default User;
