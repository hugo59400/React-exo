import React, { Fragment } from "react";
import AjoutUtilisateur from "../AjoutUtilisateur";
import ListeUtilisateur from "../ListeUtilisateur";
import User from "../User";
export const PageUtilisateurs =(props)=>{
return(

<Fragment>
<h1> Page users </h1>
<User> </User>
<ListeUtilisateur> </ListeUtilisateur>
</Fragment>


)
}

export default PageUtilisateurs