import React, { Fragment, useState } from "react";

export const AjoutUtilisateur = (props) => {
  // defini users  via un hook
  const [utilisateur, setUtilisateur] = useState({
    nom: "",
    prenom: "",
    age: "",
  });

  const handleChangeNom = (e) => {
    setUtilisateur({
      ...utilisateur,
      nom: e.target.value,
    });
  };
  const handleChangePrenom = (e) => {
    setUtilisateur({
      ...utilisateur,
      prenom: e.target.value,
    });
  };

  const handleChangeAge = (e) => {
    setUtilisateur({
      ...utilisateur,
      age: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    props.handleSubmit(utilisateur);
  };

  return (
    <Fragment>
      <h1>COMPOSANT Ajout utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <label>entrer un nom:</label>
        <input
          type="text"
          name="nom"
          defaultValue={utilisateur.nom}
          onChange={handleChangeNom}
        />
        <br />

        <label>entrer un prenom:</label>
        <input
          type="text"
          name="prenom"
          defaultValue={utilisateur.prenom}
          onChange={handleChangePrenom}
        />
        <br />

        <label>entrer un age:</label>
        <input
          type="text"
          name="age"
          defaultValue={utilisateur.age}
          onChange={handleChangeAge}
        />
        <br />

        <button type="submit"> valider </button>
      </form>
    </Fragment>
  );
};

export default AjoutUtilisateur;
