import React, { Fragment , useState} from "react";

// export class ComposantFonction extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             etat:"valeur"
//         }
//     }
//     render() {
//     return(


// <Fragment>
// <p> valeur stockee dans son etat  : {this.state.etat} </p>

// </Fragment>
       
//     )
//     }
// }


export const ComposantFonction =(props)=>{
    // defini etat et compteur via un hook
    let [etat, setEtat] = useState("valeur")
    let [compteur, setCompteur] = useState(props.debutCompte)
    // focntion qui modifie etat 
   const handleClick=(e)=>{
       e.stopPropagation()
       setEtat("bjr")
   }

   const handleCompteur=(e)=>{
    e.stopPropagation()
    setCompteur(++compteur)
}



    return(
<Fragment>
    <h1>HOOKS</h1>
 <p> valeur stockee dans son etat  : {etat} </p>
<button onClick={handleClick}>click ici  </button>
<div>
valeur du compteur par defaut : {props.debutCompte}
    <p>compteur : {compteur}</p>
    <button onClick={handleCompteur}> incremente cpt </button>
</div>
</Fragment>

    )
}

export default ComposantFonction
// les hooks gerent etat des composants stateless(composant fonction)
// gere cycle de vie des composants 