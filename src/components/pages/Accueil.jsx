import React, { Fragment } from "react";
import { Recuperateur } from "../Recuperateur";
import { Exemple1 } from "../Exemple1";
import { MonPremier } from "../MonPremier";
import { Compteur } from "../Compteur";
import { Dynamique } from "../Dynamique";
import { ListOfThings } from "../ListOfThings";
import { Recette } from "../Recette";
import { User } from "../User";
import { Controlled } from "../Controlled";
import ComposantFonction from "../ComposantFonction";
import { ListeUtilisateur } from "../ListeUtilisateur";
import AfficheCreation from "../AfficheCreation";
import AfficheCreationn from "../AfficheCreationn";
export const Accueil =(props)=>{
return(

<Fragment>
    <h1> Page Accueil </h1>
    <div>
    <Exemple1 />
    <Recuperateur nom="hugo" info="poulet" />
    <Dynamique type="second" val="coleau" />
    <AfficheCreationn />
        <MonPremier />
        <Compteur />
        {/* composant parent ci dessous  */}
        <ListOfThings />
        <Recette />
        <User />
        <Controlled />
        <ComposantFonction debutCompte={2} />
        <ListeUtilisateur />
        <AfficheCreation />
    </div>
</Fragment>


)
}

export default Accueil